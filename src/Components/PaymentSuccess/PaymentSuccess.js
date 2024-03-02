import './PaymentSuccess.css';
import tickmark from './tickmark.png';

function PaymentSuccess(){
    return(
    <div className="green">
        <img src={tickmark} className="tickimage" alt="Bus Image"/>
    <div class="paymentcontainer">
        <div class="tick-mark"></div>
        <p class="success-text">Congratulations!! You successfully booked your seats</p>
    </div>

    <div class="paymentbutton-container">
        <a href="home.html" >
            <button class="button id1">Go to Home Page</button>
        </a>
        <a href="bookinghistory.html" >
        <button class="button id2">View Booking History</button></a>
    </div>
    </div>
    )
    }
export default PaymentSuccess;