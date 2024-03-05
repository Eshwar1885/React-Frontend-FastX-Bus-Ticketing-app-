// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// function RefundRequest() {
//     const [refundRequests, setRefundRequests] = useState([]);    

//     useEffect(() => {
//         async function fetchRefundRequests() {
//             try {
//                 const response = await axios.get('http://localhost:5263/api/Refund/RefundRequest');
//                 setRefundRequests(response.data);
//             } catch (error) {
//                 console.error('Error fetching refund requests:', error);
//             }
//         }

//         fetchRefundRequests();
//     }, []);

//     const handleAcceptRefund = async (bookingId, userId) => {
//         try {
//             await axios.get(`http://localhost:5263/api/BusOperator/AcceptRefund?bookingId=${bookingId}&userId=${userId}`);
//             // Optionally, you can update the UI to reflect the accepted refund
//         } catch (error) {
//             console.error('Error accepting refund:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Refund Requests</h1>
//             {refundRequests.map(request => (
//                 <div key={request.bookingId} className="refund-request">
//                     <p>Bus Name: {request.busName}</p>
//                     <p>Number of Seats: {request.numberOfSeats}</p>
//                     <p>Booked For Which Date: {request.bookedForWhichDate}</p>
//                     <p>Seat Numbers: {request.seatNumbers}</p>
//                     <p>Booking ID: {request.bookingId}</p>
//                     <p>Total Cost: {request.totalCost}</p>
//                     <p>UserName: {request.userName}</p>
//                     {/* Display other booking information if needed */}
//                     <button onClick={() => handleAcceptRefund(request.bookingId,request.userId)}>Accept Refund</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default RefundRequest;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RefundRequest.css';
import BusOperatorNavbar from '../BusOperatorNavbar/BusOperatorNavbar';


function RefundRequest() {
    const [refundRequests, setRefundRequests] = useState([]); 
    const [acceptedRefunds, setAcceptedRefunds] = useState({});
    const [refresh, setRefresh] = useState(false);

   

    useEffect(() => {
        async function fetchRefundRequests() {
            try {
                const response = await axios.get('http://localhost:5263/api/Refund/RefundRequest');
                setRefundRequests(response.data);
            } catch (error) {
                console.error('Error fetching refund requests:', error);
            }
        }

        fetchRefundRequests();
    }, [refresh]);

    const handleAcceptRefund = async (bookingId, userId) => {
        try {
            await axios.get(`http://localhost:5263/api/BusOperator/AcceptRefund?bookingId=${bookingId}&userId=${userId}`);
            // Optionally, you can update the UI to reflect the accepted refund
            setRefresh(!refresh); // Toggle refresh to trigger a refresh

            alert('Refund approved successfully!');
            setAcceptedRefunds(prevState => ({
                ...prevState,
                [bookingId]: true,
            }));
        } catch (error) {
            console.error('Error accepting refund:', error);
        }
    };

    return (
        <div className="blue-color">
            <BusOperatorNavbar/>
            <h1>Refund Requests</h1>
            {refundRequests.map(request => (
                <div key={request.bookingId} className="refund-request">
                    <p>Bus Name: {request.busName}</p>
                    <p>Number of Seats: {request.numberOfSeats}</p>
                    <p>Booked For Which Date: {request.bookedForWhichDate}</p>
                    <p>Seat Numbers: {request.seatNumbers}</p>
                    <p>Booking ID: {request.bookingId}</p>
                    <p>Total Cost: {request.totalCost}</p>
                    <p>UserName: {request.userName}</p>
                    {/* Display other booking information if needed */}
                    {/* <button onClick={() => handleAcceptRefund(request.bookingId,request.userId)}>Accept Refund</button> */}
                    <button 
                        onClick={() => handleAcceptRefund(request.bookingId,request.userId)}
                        disabled={acceptedRefunds[request.bookingId]}
                    >
                        {acceptedRefunds[request.bookingId] ? "Already Refunded" : "Accept Refund"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default RefundRequest;




