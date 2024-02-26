import React from 'react';
import { useSelector } from 'react-redux';
import './BookingDetails.css';

function BookingDetails() {
    // Dummy data
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
// const seatDataSet = new Set(selectedSeats);
// const seatData = [...seatDataSet];
// console.log(seatData);


  //   const bookingData = {
  //     busId: busInfo.busId, // Assuming busId is available in busInfo
  //     seatIds: seatIds, // Array of selected seat IDs
  //     travelDate: travelDate.travelDate, // Replace with actual travel date
  //     userId: userId, // Replace with actual user ID
  //     totalSeats: seatIds.length // Assuming totalSeats is the number of selected seats
  // };
  // console.log(bookingData);



    // const busData = {
    //     busName: 'Pinkbus',
    //     busType: 'A/C Seater (2+2)',
    //     seatNumbers: 'A1, A2, A3',
    //     seatPrice: '$20',
    //     totalPrice: '$60',
    //     bookedForWhichDate: '4th February 2024',
    //     origin: 'Origin City',
    //     destination: 'Destination City'
    //   };



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
              console.log('Booking successful');
              // Redirect or perform any other actions upon successful booking
          } else {
              console.error('Failed to make booking');
          }
      } catch (error) {
          console.error('An error occurred:', error);
      }
    };


    
      return (
        <div className="busListingContainer">
          <div className="busCardContainer">
            <div className="busCard false" id="">
              <div className="makeFlex column appendBottom22 busInfo">
                {/* Bus Name */}
                <p className="busName">Bus Name: {busInfo.busName}</p>
                {/* Bus Type */}
                <p className="busType">Bus Type: {busInfo.busType}</p>
                {selectedSeats.map((seat, index) => (
                  // {seatData.map((seat, index) => (
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
                <button className="continueButton" onClick={handleBooking}>Continue</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default BookingDetails;
