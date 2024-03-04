import { Link } from 'react-router-dom';
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
        <Link to="/">
        <button className="button id1">Go to Home Page</button>
</Link>


        
        <Link to="/bookinghistory"><button className="button id2">View Booking History</button></Link>
    </div>
    </div>
    )
    }
export default PaymentSuccess;