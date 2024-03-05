import './Payment.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Payment(){
    const bookingId = useSelector(state => state.bookingId);
    // console.log(bookingId);

    const handlePayment = async () => {
        const paymentData = {
            bookingId: bookingId
        };
  
        try {
            const response = await fetch('http://localhost:5263/api/Payment/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            });
  
            if (response.ok) {
                  // setBookingId(data.bookingId); // Set booking ID received from API response
                //   console.log('Payment successful');
                // Redirect or perform any other actions upon successful booking
  
                // const data = await response.json();
                // dispatch(setBookingId(data.bookingId)); // Dispatch action to store bookingId in Redux store
            } else {
                console.error('Failed to make payment');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
      };

    return(

        <div>
            <Link to="/paymentsuccess">
            <button className="paymentcontinueButton" onClick={handlePayment}>Confirm Payment</button>
            </Link>
        </div>

    );
}
export default Payment;