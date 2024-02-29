import axios from 'axios';
import './BookingHistory.css';
import { useEffect, useState } from 'react';
function BookingHistory(){

    const [pastBookings, setPastBookings] = useState([]);
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const userId = sessionStorage.getItem('userId');


  useEffect(() => {
    const fetchPastBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5263/api/Booking/past/${userId}`);
        const sortedPastBookings = response.data.sort((a, b) => new Date(b.bookedForWhichDate) - new Date(a.bookedForWhichDate));
        setPastBookings(sortedPastBookings);
        // setPastBookings(response.data);
      } catch (error) {
        console.error('Error fetching past bookings:', error);
      }
    };

    const fetchUpcomingBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5263/api/Booking/upcoming/${userId}`);
        const sortedUpcomingBookings = response.data.sort((a, b) => new Date(b.bookedForWhichDate) - new Date(a.bookedForWhichDate));
        setUpcomingBookings(sortedUpcomingBookings);
        // setUpcomingBookings(response.data);
      } catch (error) {
        console.error('Error fetching upcoming bookings:', error);
      }
    };

    fetchPastBookings();
    fetchUpcomingBookings();
  }, []); // Empty dependency array ensures this effect runs only once on component mount


    return(
        <div>
        
        <div class="container-fluid">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#tab1">Upcoming</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab2">Cancelled</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab3">Completed</a>
            </li>
        </ul>

        {/* <div class="tab-content">
            <div class="tab-pane fade show active" id="tab1">
                <h4>Booking Summary</h4>
                <p>This is the content for the Booking Summary tab.</p>
            </div> */}

<div class="tab-content">
<div className="tab-pane fade show active" id="tab1">
                    <h4>Upcoming Bookings</h4>
                    {upcomingBookings.length === 0 ? (
                            <p>No upcoming bookings</p>
                        ) : (
                    <div className="busListingContainer">
                        <div className="busCardContainer">
                            {upcomingBookings.map(booking => (
                                <div key={booking.numberOfSeats} className="busCard">
                                    <h2>Bus 1 Details</h2>
                                    <p>Bus Name: {booking.busName}</p>
                                    <p>Bus Type: {booking.busType}</p>
                                    {/* <p>Total Price: ${booking.totalPrice}</p> */}
                                    <p>Booked For Which Date: {booking.bookedForWhichDate}</p>
                                    <p>Origin: {booking.origin}</p>
                                    <p>Destination: {booking.destination}</p>
                                    <p>Ticket Count: {booking.ticketCount}</p>
                                    <div className="busCardFooter">
                                        <p>Seat Numbers: {booking.seatNumbers}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}
                    </div>
            <div class="tab-pane fade" id="tab2">
            <div class="busListingContainer">
                            <div class="busCardContainer">
                                <div class="busCard">
                                    <h2>Bus 1 Details</h2>
                                    <p>Bus Name: Pink Bus</p>
                                    <p>Bus Type: ac seater</p>
                                    <p>Total Price: $50</p>
                                    <p>Booked For Which Date: 2024-02-04</p>
                                    <p>Origin: Mumbai</p>
                                    <p>Destination: Pune</p>
                                    <p>Ticket Count: </p>
                                </div>
                                <div class="busCardFooter">
                                    <p>Seat Numbers: 12,13</p>
                                </div>
                            </div>
                        </div>
            </div>
            <div class="tab-pane fade" id="tab3">
            <h4>Past Bookings</h4>
            {pastBookings.length === 0 ? (
                            <p>No Past bookings</p>
                        ) : (
                    <div className="busListingContainer">
                        <div className="busCardContainer">
                            {pastBookings.map(booking => (
                                <div key={booking.numberOfSeats} className="busCard">
                                    <h2>Bus 1 Details</h2>
                                    <p>Bus Name: {booking.busName}</p>
                                    <p>Bus Type: {booking.busType}</p>
                                    {/* <p>Total Price: ${booking.totalPrice}</p> */}
                                    <p>Booked For Which Date: {booking.bookedForWhichDate}</p>
                                    <p>Origin: {booking.origin}</p>
                                    <p>Destination: {booking.destination}</p>
                                    <p>Ticket Count: {booking.ticketCount}</p>
                                    <div className="busCardFooter">
                                        <p>Seat Numbers: {booking.seatNumbers}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    )}
                        </div>
            </div>
        </div>
    </div>        


    );
}
export default BookingHistory;