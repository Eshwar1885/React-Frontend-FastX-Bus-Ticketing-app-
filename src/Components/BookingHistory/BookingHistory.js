import axios from 'axios';
import './BookingHistory.css';
import { useEffect, useState } from 'react';
import RefundRequest from '../RefundRequest/RefundRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setUserId } from '../Redux/Actions';
import DetailsContainer from '../DetailsContainer/DetailsContainer';



function BookingHistory() {
    const [pastBookings, setPastBookings] = useState([]);
    const [upcomingBookings, setUpcomingBookings] = useState([]);
    const [cancelledBookings, setCancelledBookings] = useState([]);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [bookingIdToCancel, setBookingIdToCancel] = useState('');
    const dispatch = useDispatch();
    const userId = sessionStorage.getItem('userId');
        console.log("Retrieved userId from session storage:", userId); // Log userId retrieved from session storage


    useEffect(() => {

        const fetchPastBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5263/api/Booking/past/${userId}`);
                const sortedPastBookings = response.data.sort((a, b) => new Date(b.bookedForWhichDate) - new Date(a.bookedForWhichDate));
                setPastBookings(sortedPastBookings);
            } catch (error) {
                console.error('Error fetching past bookings:', error);
            }
        };

        const fetchUpcomingBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5263/api/Booking/upcoming/${userId}`);
                const sortedUpcomingBookings = response.data.sort((a, b) => new Date(b.bookedForWhichDate) - new Date(a.bookedForWhichDate));
                setUpcomingBookings(sortedUpcomingBookings);
            } catch (error) {
                console.error('Error fetching upcoming bookings:', error);
            }
        };

        const fetchCancelledBookings = async () => {
            try {
                const response = await axios.get(`http://localhost:5263/api/Booking/getcancelled/${userId}`);
                const sortedCancelledBookings = response.data.sort((a, b) => new Date(b.bookedForWhichDate) - new Date(a.bookedForWhichDate));
                setCancelledBookings(sortedCancelledBookings);
            } catch (error) {
                console.error('Error fetching cancelled bookings:', error);
            }
        };

        fetchPastBookings();
        fetchUpcomingBookings();
        fetchCancelledBookings();
    }, [dispatch]);

    const cancelBooking = async (bookingId) => {
        try {
            const userId = sessionStorage.getItem('userId');
            await axios.get(`http://localhost:5263/api/Booking/cancel?bookingId=${bookingId}&userId=${userId}`);

            // , {
            //     bookingId: bookingId,
            //     userId: userId
            // }
            console.log('Booking cancelled successfully.');
            alert('Booking cancelled successfully. Refund will be processed within 2 to 3 business days.');
            // Update cancelled bookings
            const updatedCancelledBookings = cancelledBookings.concat(upcomingBookings.find(booking => booking.bookingId === bookingId));
            setCancelledBookings(updatedCancelledBookings);
            // Remove cancelled booking from upcoming bookings
            const updatedUpcomingBookings = upcomingBookings.filter(booking => booking.bookingId !== bookingId);
            setUpcomingBookings(updatedUpcomingBookings);
        } catch (error) {
            console.error('Error cancelling booking:', error);
        }
    };

    const confirmCancellation = (bookingId) => {
        setShowConfirmationModal(true);
        setBookingIdToCancel(bookingId);
    };

    const closeModal = () => {
        setShowConfirmationModal(false);
    };

    const handleCancellationConfirmation = () => {
        cancelBooking(bookingIdToCancel);
        closeModal();
    };

    return (
        <div>
            <div className="container-fluid status-container">
                <ul className="nav nav-tabs statustabs">
                    <li className="nav-item tab-item">
                        <a className="nav-link active" data-toggle="tab" href="#tab1">Upcoming</a>
                    </li>
                    <li className="nav-item tab-item">
                        <a className="nav-link" data-toggle="tab" href="#tab2">Cancelled</a>
                    </li>
                    <li className="nav-item tab-item">
                        <a className="nav-link" data-toggle="tab" href="#tab3">Completed</a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                        <h4>Upcoming Bookings</h4>
                        {upcomingBookings.length === 0 ? (
                            <p>No upcoming bookings</p>
                        ) : (
                            <div className="bookingBusListingContainer">
                                <div className="busCardContainer">
                                    {upcomingBookings.map(booking => (
                                        <div key={booking.bookingId} className="historyBusCard">
                                            <DetailsContainer booking={booking} />
                                            <button onClick={() => confirmCancellation(booking.bookingId)} className="btn btn-danger">Cancel Booking</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tab-pane fade" id="tab2">
                        <h4>Cancelled Bookings</h4>
                        {cancelledBookings.length === 0 ? (
                            <p>No cancelled bookings</p>
                        ) : (
                            <div className="busListingContainer">
                                <div className="busCardContainer">
                                    {cancelledBookings.map(booking => (
                                        <div key={booking.bookingId} className="historyBusCard">
                                            <DetailsContainer booking={booking} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="tab-pane fade" id="tab3">
                        <h4>Past Bookings</h4>
                        {pastBookings.length === 0 ? (
                            <p>No past bookings</p>
                        ) : (
                            <div className="busListingContainer">
                                <div className="busCardContainer">
                                    {pastBookings.map(booking => (
                                        <div key={booking.bookingId} className="historyBusCard">
                                            <DetailsContainer booking={booking} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <div className={`modal ${showConfirmationModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showConfirmationModal ? 'block' : 'none' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Cancellation</h5>
                            <button type="button" className="close" onClick={closeModal}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to cancel this booking?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-danger" onClick={handleCancellationConfirmation}>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingHistory;