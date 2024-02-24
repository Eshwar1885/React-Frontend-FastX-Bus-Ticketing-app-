import React, { useState, useEffect } from 'react';
import './SeatingArrangement.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


// Seating arrangement component
const SeatingArrangement = () => {
  const [availableSeats, setAvailableSeats] = useState([]);

  const [totalCost, setTotalCost] = useState(0);

  const { busId } = useParams(); // Get the busId from route parameters

  // console.log(busId)

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
  };
  




//   return (
//     <div className="bus">
//         <h2>Select and book your seats:</h2>
//       <div className="seatside">
        
//       </div>
//       <ol className="cabin seatside">
//         <li className="row row--1">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="1" />
//               <label htmlFor="1">1</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="2" />
//               <label htmlFor="2">2</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="3" />
//               <label htmlFor="3">3</label>
//               </li>
//               <li className="seat">
//                 <input type="checkbox" id="4" />
//                 <label htmlFor="4">4</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="5" />
//               <label htmlFor="5">5</label>
//             </li>
//           </ol>
//         </li>
//         <li className="row row--2">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="6" />
//               <label htmlFor="6">6</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="7" />
//               <label htmlFor="7">7</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="8" />
//               <label htmlFor="8">8</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="9" />
//               <label htmlFor="9">9</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="10" />
//               <label htmlFor="10">10</label>
//             </li>
//           </ol>
//         </li>
//         <li className="row row--3">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="11" />
//               <label htmlFor="11">11</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="12" />
//               <label htmlFor="12">12</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="13" />
//               <label htmlFor="13">13</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="14" />
//               <label htmlFor="14">14</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="15" />
//               <label htmlFor="15">15</label>
//             </li>          
//           </ol>
//         </li>
//         <li className="row row--4">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="16" />
//               <label htmlFor="16">16</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="17" />
//               <label htmlFor="17">17</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="18" />
//               <label htmlFor="18">18</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="19" />
//               <label htmlFor="19">19</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="20" />
//               <label htmlFor="20">20</label>
//             </li>           
//           </ol>
//         </li>
//         <li className="row row--5">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="21" />
//               <label htmlFor="21">21</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="22" />
//               <label htmlFor="22">22</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="23" />
//               <label htmlFor="23">23</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="24" />
//               <label htmlFor="24">24</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="25" />
//               <label htmlFor="25">25</label>
//             </li>          
//           </ol>
//         </li>
//         <li className="row row--6">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="26" />
//               <label htmlFor="26">26</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="27" />
//               <label htmlFor="27">27</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="28" />
//               <label htmlFor="28">28</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="29" />
//               <label htmlFor="29">29</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="30" />
//               <label htmlFor="30">30</label>
//             </li>          
//           </ol>
//         </li>
//         <li className="row row--7">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="31" />
//               <label htmlFor="31">31</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="32" />
//               <label htmlFor="32">32</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="33" />
//               <label htmlFor="33">33</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="34" />
//               <label htmlFor="34">34</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="35" />
//               <label htmlFor="35">35</label>
//             </li>         
//           </ol>
//         </li>
//         <li className="row row--8">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="36" />
//               <label htmlFor="36">36</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="37" />
//               <label htmlFor="37">37</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="38" />
//               <label htmlFor="38">38</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="39" />
//               <label htmlFor="39">39</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="40" />
//               <label htmlFor="40">40</label>
//             </li>          
//           </ol>
//         </li>
//         <li className="row row--9">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="41" />
//               <label htmlFor="41">41</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="42" />
//               <label htmlFor="42">42</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="43" />
//               <label htmlFor="43">43</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="44" />
//               <label htmlFor="44">44</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="45" />
//               <label htmlFor="45">45</label>
//             </li>
//           </ol>
//         </li>
//         <li className="row row--10">
//           <ol className="seats" type="A">
//             <li className="seat">
//               <input type="checkbox" id="46" />
//               <label htmlFor="46">46</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="47" />
//               <label htmlFor="47">47</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="48" />
//               <label htmlFor="48">48</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="49" />
//               <label htmlFor="49">49</label>
//             </li>
//             <li className="seat">
//               <input type="checkbox" id="50" />
//               <label htmlFor="50">50</label>
//             </li>
//           </ol>
//         </li>
//       </ol>
//       <div className="seatside">
        
// </div>



//       <div className="text-right mb-4 mr-4">
//         <button id="confirmBookingBtn" type="button" className="btn btn-primary" disabled >Confirm Booking</button>
//       </div>

//       {/* <script>
//         document.getElementById("confirmBookingBtn").addEventListener("click", function() {
//             // Redirect to the booking page
//             window.location.href = "bookingpage.html";
//         });
//     </script> */}
        
//       {/* <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
//       <script>
//         $(document).ready(function () {
//           // Add event listener to checkboxes
//           $('input[type="checkbox"]').change(function () {
//             // Check if any seat is selected
//             var seatsSelected = $('input[type="checkbox"]:checked').length > 0;
    
//             // Enable/Disable Confirm Booking button based on seat selection
//             $('#confirmBookingBtn').prop('disabled', !seatsSelected);
//           });
//         });
//       </script> */}

// <div className="text-right mb-4 mr-4">
//     <div>
//       <span>Total Cost: Rs.<span id="totalCost">0</span></span>
    
//   {/* <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
//   <script>
//     $(document).ready(function () {
//       // Cost per seat
//       var costPerSeat = 1000; // You can set your desired cost here

//       // Add event listener to checkboxes
//       $('input[type="checkbox"]').change(function () {
//         // Calculate total cost based on the number of selected seats
//         var totalSeats = $('input[type="checkbox"]:checked').length;
//         var totalCost = totalSeats * costPerSeat;

//         // Update the total cost display
//         $('#totalCost').text(totalCost.toFixed(2));

//         // Check if any seat is selected
//         var seatsSelected = totalSeats > 0;

//         // Enable/Disable Confirm Booking button based on seat selection
//         $('#confirmBookingBtn').prop('disabled', !seatsSelected);
//       });
//     });
//   </script> */}


//     </div>
//     {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */}
// </div>
// </div>





      
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
              console.log(seat)
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


    <div className="text-right mb-4 mr-4">
    <Link to="/new-page">
      <button id="confirmBookingBtn" type="button" className="btn btn-primary" >
        Confirm Booking
      </button>
      </Link>
    </div>

    <div className="text-right mb-4 mr-4">
      <div>
        {/* <span>Total Cost: Rs.{totalCost}<span id="totalCost"></span></span> */}
        <span>Total Cost: Rs.{totalCost}</span>
      </div>
    </div>
  </div>
);


          }


export default SeatingArrangement;