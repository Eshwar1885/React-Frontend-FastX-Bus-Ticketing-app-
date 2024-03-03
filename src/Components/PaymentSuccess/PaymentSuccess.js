import './PaymentSuccess.css';
import tickmark from './tickmark.png';

function PaymentSuccess(){
    return(
    <div className="green">
        <img src={tickmark} className="tickimage" alt="Bus Image"/>
    <div className="paymentcontainer">
        <div className="tick-mark"></div>
        <p className="success-text">Congratulations!! You successfully booked your seats</p>
    </div>

    <div className="paymentbutton-container">
        <a href="home.html" >
            <button className="button id1">Go to Home Page</button>
        </a>


        
        <a href="bookinghistory.html" >
        <button className="button id2">View Booking History</button></a>
    </div>
    </div>
    )
    }
export default PaymentSuccess;