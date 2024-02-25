import React, { useState, useEffect } from 'react';
import './SeatingArrangement.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { saveSelectedSeats } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';



// Seating arrangement component
const SeatingArrangement = () => {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const { busId } = useParams(); // Get the busId from route parameters
  // console.log(busId)

  const selectedSeats = useSelector(state => state.selectedSeats); // Get selected seats from Redux store
  console.log(selectedSeats);

  const dispatch = useDispatch();
  // const availableSeats = useSelector(state => state.availableSeats);
  // console.log(availableSeats);
  // const totalCost = useSelector(state => state.totalCost);


  useEffect(() => {
    const fetchAvailableSeats = async () => {
      try {
        const response = await axios.get('http://localhost:5263/api/Seats/GetAvailableSeats', {
          params: { busId: busId }, // Pass the busId as a parameter
        });
        setAvailableSeats(response.data);
        // console.log(availableSeats)
      } catch (error) {
        console.error('Error fetching available seats:', error);
      }
    };
    fetchAvailableSeats();
    // console.log(availableSeats)

    return () => {
      // Cleanup code
    };
  }, [busId]);

  // useEffect(() => {
  //   console.log(availableSeats); // Log availableSeats after it has been updated
  // }, [availableSeats]);

  const handleSeatSelection = (seatNumber, seatPrice) => {
    const isChecked = document.getElementById(seatNumber).checked;
    if (isChecked) {
      setTotalCost(prevCost => prevCost + seatPrice);
    } else {
      setTotalCost(prevCost => prevCost - seatPrice);
    }

    // Update selected seats in Redux store
    const updatedSelectedSeats = isChecked
      ? [...selectedSeats, { seatNumber, seatPrice }]
      : selectedSeats.filter(seat => seat.seatNumber !== seatNumber);
    dispatch(saveSelectedSeats(updatedSelectedSeats));
  };
  // console.log({updatedSelectedSeats});
  // console.log(selectedSeats);
  // console.log(saveSelectedSeats);



  
      
// return (
//   <div className="bus">
//       <h2>Select and book your seats:</h2>
//     <div className="seatside">
      
//     </div>
// <ol className="cabin seatside">
// {availableSeats.map(seat => (
//   <li className={`seat ${seat.isAvailable ? 'available' : 'unavailable'}`} key={seat.seatId}>
//     <input type="checkbox" id={seat.seatNumber} disabled={!seat.isAvailable} />
//     <label htmlFor={seat.seatNumber}>{seat.seatNumber}</label>
//   </li>
// ))}
// </ol> </div>
//   );
// };





return (
  <div className="bus">
    <h2>Select and book your seats:</h2>
    <div className="seatside"></div>
    <ol className="cabin seatside">
      
      {Array.from({ length: 10 }, (_, rowIndex) => (
        <li key={`row-${rowIndex}`} className={`row row--${rowIndex + 1}`}>
          <ol className="seats" type="A">
            {Array.from({ length: 5 }, (_, seatIndex) => {
              const seatNumber = rowIndex * 5 + seatIndex + 1;
              const seat = availableSeats.find(seat => seat.seatId === seatNumber);
              // console.log(seat)
              // const isSeatAvailable = availableSeats.includes(seatNumber);
              const isSeatAvailable = availableSeats.some(seat => seat.seatId === seatNumber);
              
              // console.log(isSeatAvailable)
              // console.log(seatNumber)
              return (
                <li
                  key={`seat-${seatNumber}`}
                  // data-price={isSeatAvailable ? seat.seatPrice : ''}
                  className={`seat ${isSeatAvailable ? 'available' : 'unavailable'}`}
                >
                  <input type="checkbox" id={seatNumber} disabled={!isSeatAvailable}
                  onChange={() => handleSeatSelection(seatNumber, seat.seatPrice)}
                  />
                  <label htmlFor={seatNumber} 
                  data-price={isSeatAvailable ? seat.seatPrice : ''}                                    
                  >{seatNumber}</label>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
    <div className="seatside"></div>

{/* ===if none of the seats are clicked the buttoon should not be clickable=== */}
{/* add a private route */}

    <div className="text-right mb-4 mr-4">
    <Link to="/details">
      <button id="confirmBookingBtn" type="button" className="btn btn-primary" >
        Confirm Booking
      </button>
      </Link>
    </div>

    <div className="text-right mb-4 mr-4">
      <div>
        <span>Total Cost: Rs.{totalCost}</span>
      </div>
    </div>
  </div>
);
          }
export default SeatingArrangement;