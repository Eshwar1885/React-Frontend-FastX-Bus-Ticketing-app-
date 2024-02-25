import React from 'react';
import { useSelector } from 'react-redux';
import './BookingDetails.css';

function BookingDetails() {
    // Dummy data
    const origin = useSelector(state => state.origin);
    const destination = useSelector(state => state.destination); 
    const travelDate = useSelector(state =>state.travelDate); 
    const selectedSeats = useSelector(state=>state.selectedSeats);
    const totalPrice = selectedSeats.reduce((total, seat) => total + seat.seatPrice, 0);


    const busData = {
        busName: 'Pinkbus',
        busType: 'A/C Seater (2+2)',
        seatNumbers: 'A1, A2, A3',
        seatPrice: '$20',
        totalPrice: '$60',
        bookedForWhichDate: '4th February 2024',
        origin: 'Origin City',
        destination: 'Destination City'
      };
    
      return (
        <div className="busListingContainer">
          <div className="busCardContainer">
            <div className="busCard false" id="">
              <div className="makeFlex column appendBottom22 busInfo">
                {/* Bus Name */}
                <p className="busName">Bus Name: {busData.busName}</p>
                {/* Bus Type */}
                <p className="busType">Bus Type: {busData.busType}</p>
                {selectedSeats.map((seat, index) => (
        <div key={index}>

                {/* Seat Numbers */}
                <p className="seatNumbers">Seat Numbers: {seat.seatNumber}</p>
                {/* Seat Price */}
                <p className="seatPrice">Seat Price: {seat.seatPrice}</p>
                {/* Total Price */}
        </div>))};
                <p className="totalPrice">Total Price: {totalPrice}</p>
                {/* Booked For Which Date */}
                <p className="bookedForWhichDate">Booked For Which Date: {travelDate.travelDate}</p>
                {/* <p className="origin">Origin: {busData.origin}</p>
                <p className="destination">Destination: {busData.destination}</p> */}
                <p className="origin">Origin: {origin.origin}</p>
                <p className="destination">Destination: {destination.destination}</p>
                {/* Continue Button */}
                <button className="continueButton">Continue</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default BookingDetails;
