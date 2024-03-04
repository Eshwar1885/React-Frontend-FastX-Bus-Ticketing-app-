// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import './BookingDetails.css';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setBookingId } from '../Redux/Actions';


// function BookingDetails() {
//   const dispatch = useDispatch();


//     const origin = useSelector(state => state.origin);
//     const destination = useSelector(state => state.destination); 
//     const travelDate = useSelector(state =>state.travelDate); 
//     const selectedSeats = useSelector(state=>state.selectedSeats);
//     // console.log(selectedSeats);
//     const totalPrice = selectedSeats.reduce((total, seat) => total + seat.seatPrice, 0);
//     const busInfo = useSelector(state => state.busInfo);

//     // console.log('Bus Info:', busInfo);
    



//     // const busInfo = useSelector(state => {
//     //   const { busName, busType } = state.busInfo;
//     //   return { busName, busType };
//     // });
//     // console.log('Bus Info:', busInfo);

// // Extract seatIds from selectedSeats array
// // const seatIds = selectedSeats.map(seat => seat.seatNumber);
// const userId = sessionStorage.getItem('userId'); // Get userId from session storage

// // Extract unique seatIds from selectedSeats array
// const seatIdsSet = new Set(selectedSeats.map(seat => seat.seatNumber));
// const seatIds = [...seatIdsSet]; // Convert Set back to array if needed

// // const [bookingId, setBookingId] = useState(null); // State variable to store booking ID



//     const handleBooking = async () => {
//       const bookingData = {
//           busId: busInfo.busId,
//           seatIds: seatIds,
//           travelDate: travelDate.travelDate,
//           userId: userId,
//           totalSeats: seatIds.length
//       };

//       try {
//           const response = await fetch('http://localhost:5263/api/Booking', {
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(bookingData)
//           });

//           if (response.ok) {
//                 // setBookingId(data.bookingId); // Set booking ID received from API response
//                 // console.log('Booking successful. Booking ID:', data.bookingId);
//               // Redirect or perform any other actions upon successful booking

//               const data = await response.json();
//               dispatch(setBookingId(data.bookingId)); // Dispatch action to store bookingId in Redux store
//           } else {
//               console.error('Failed to make booking');
//           }
//       } catch (error) {
//           console.error('An error occurred:', error);
//       }
//     };


    
//       return (
//         // <div className="busListingContainer">
//         //   <div className="busCardContainer">
//         //     <div className="busCard false" id="">
//         //       <div className="makeFlex column appendBottom22 busInfo">
//         //         {/* Bus Name */}
//         //         <p className="busName">Bus Name: {busInfo.busName}</p>
//         //         {/* Bus Type */}
//         //         <p className="busType">Bus Type: {busInfo.busType}</p>
//         //         {selectedSeats.map((seat, index) => (
//         // <div key={index}>

//         //         {/* Seat Numbers */}
//         //         <p className="seatNumbers">Seat Numbers: {seat.seatNumber}</p>
//         //         {/* Seat Price */}
//         //         <p className="seatPrice">Seat Price: {seat.seatPrice}</p>
//         //         {/* Total Price */}
//         // </div>))}
//         //         <p className="totalPrice">Total Price: {totalPrice}</p>
//         //         {/* Booked For Which Date */}
//         //         <p className="bookedForWhichDate">Booked For Which Date: {travelDate.travelDate}</p>
//         //         <p className="origin">Origin: {origin.origin}</p>
//         //         <p className="destination">Destination: {destination.destination}</p>
//         //         <Link to="/payment">
//         //         {/* <Link to={bookingId ? `/payment/${bookingId}` : "#"}> */}
//         //         {/* Continue Button */}
//         //         <button className="continueButton" onClick={handleBooking}>Continue</button>
//         //         </Link>
//         //       </div>
//         //     </div>
//         //   </div>
//         // </div>

// <div className="busdetails1">
//         <table className="busdetailstable">
//       <tr>
//             <th colSpan="2">Journey Information</th>
//           </tr>
   
//     <tr>
//       <td>Origin</td>
//       <td>Mumbai</td>
//     </tr>

//     <tr>
//       <td>Destination</td>
//       <td>Mumbai</td>
//     </tr>
//     <tr>
//       <td>Bus Type</td>
//       <td>Mumbai</td>
//     </tr>
//     <tr>
//       <td>Travel Date</td>
//       <td>Mumbai</td>
//     </tr>
//     {/* <tr>
//       <td>From</td>
//       <td>Mumbai</td>
//     </tr>
//     <tr>
//       <td>From</td>
//       <td>Mumbai</td>
//     </tr> */}
//     </table>


//     <table className="busdetailstable">
//     <tr>
//       <th>Seat Number</th>
//       <th>Price</th>
    
//     </tr>
//     {selectedSeats.map((seat, index) => (
//             <tr key={index}>
//               <td>{seat.seatNumber}</td>
//               <td>{seat.seatPrice}</td>
//             </tr>
//           ))}
//     <tr>
//       <td>Origin</td>
//       <td>Mumbai</td>
//     </tr>
//     <tr>
//       <td>Total Cost</td>
//       <td>{totalPrice}</td>
//     </tr>
//     </table>
//     </div>


//   );
// };

// export default BookingDetails;












import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './BookingDetails.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBookingId } from '../Redux/Actions';
import Navbar from '../Navbar/Navbar';


function BookingDetails() {
  const dispatch = useDispatch();


    const origin = useSelector(state => state.origin);
    const destination = useSelector(state => state.destination); 
    const travelDate = useSelector(state =>state.travelDate); 
    const selectedSeats = useSelector(state=>state.selectedSeats);
    // console.log(selectedSeats);
    const totalPrice = selectedSeats.reduce((total, seat) => total + seat.seatPrice, 0);
    const busInfo = useSelector(state => state.busInfo);

    // console.log('Bus Info:', busInfo);
    



    // const busInfo = useSelector(state => {
    //   const { busName, busType } = state.busInfo;
    //   return { busName, busType };
    // });
    // console.log('Bus Info:', busInfo);

// Extract seatIds from selectedSeats array
// const seatIds = selectedSeats.map(seat => seat.seatNumber);
const userId = sessionStorage.getItem('userId'); // Get userId from session storage

// Extract unique seatIds from selectedSeats array
const seatIdsSet = new Set(selectedSeats.map(seat => seat.seatNumber));
const seatIds = [...seatIdsSet]; // Convert Set back to array if needed

// const [bookingId, setBookingId] = useState(null); // State variable to store booking ID



    const handleBooking = async () => {
      const bookingData = {
          busId: busInfo.busId,
          seatIds: seatIds,
          travelDate: travelDate.travelDate,
          userId: userId,
          totalSeats: seatIds.length
      };

      try {
          const response = await fetch('http://localhost:5263/api/Booking', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(bookingData)
          });

          if (response.ok) {
                // setBookingId(data.bookingId); // Set booking ID received from API response
                // console.log('Booking successful. Booking ID:', data.bookingId);
              // Redirect or perform any other actions upon successful booking

              const data = await response.json();
              dispatch(setBookingId(data.bookingId)); // Dispatch action to store bookingId in Redux store
          } else {
              console.error('Failed to make booking');
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
    };


    
      return (
<div><Navbar/>

<div className="busdetails1">
        <table className="busdetailstable">
          <tbody>
      <tr>
            <th colSpan="2">Journey Information</th>
          </tr>
   
    <tr>
      <td>Origin</td>
      <td>{origin.origin}</td>
    </tr>

    <tr>
      <td>Destination</td>
      <td>{destination.destination}</td>
    </tr>

    
    <tr>
      <td>Bus Name</td>
      <td> {busInfo.busName}</td>
    </tr>
    <tr>
      <td>Bus Type</td>
      <td>{busInfo.busType}</td>
    </tr>
    <tr>
      <td>Travel Date</td>
      <td>{travelDate.travelDate}</td>
    </tr>
    </tbody>
    {/* <tr>
      <td>From</td>
      <td>Mumbai</td>
    </tr>
    <tr>
      <td>From</td>
      <td>Mumbai</td>
    </tr> */}
    </table>


    <table className="busdetailstable">
      <tbody>
    <tr>
      <th>Seat Number</th>
      <th>Price</th>
    
    </tr>
    {selectedSeats.map((seat, index) => (
            <tr key={index}>
              <td>{seat.seatNumber}</td>
              <td>{seat.seatPrice}</td>
            </tr>
          ))}
    <tr>
      <td>Total Cost</td>
      <td>{totalPrice}</td>
    </tr>
    </tbody>
    </table>
    <br/>
    {totalPrice !== 0 && (
        <Link to="/payment">
          <button className="detailscontinueButton" onClick={handleBooking}>Confirm</button>
        </Link>
      )}

    {/* <Link to="/payment">
      <button className="detailscontinueButton" onClick={handleBooking}>Confirm</button>
      </Link> */}

    </div>

    </div>

  );
};

export default BookingDetails;
