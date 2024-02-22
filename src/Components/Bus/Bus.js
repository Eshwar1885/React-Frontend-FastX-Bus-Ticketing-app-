// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './Bus.css';
// import axios from 'axios';



// function Bus() {
//   // const { origin, destination, date } = useParams();
//   // const [buses, setBuses] = useState([]);

//   // useEffect(() => {
//   //   // Fetch data from the database based on origin, destination, and date
//   //   // Example fetch call, replace with your actual API call
//   //   fetch(`your_api_endpoint?origin=${origin}&destination=${destination}&date=${date}`)
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       // Set the fetched data to the state
//   //       setBuses(data);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // }, [origin, destination, date]);
//   // --------------------------
//   const BusList = () => {
//     const [buses, setBuses] = useState([]);
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchBuses = async () => {
//         try {
//           // Make a GET request to your backend endpoint
//           const response = await axios.get('/api/buses', {
//             params: {
//               origin: '...',
//               destination: '...',
//               date: new Date().toISOString(), // You can pass the date dynamically
//             },
//           });
//           setBuses(response.data);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching buses:', error);
//           setLoading(false);
//         }
//       };
  
//       fetchBuses();
//     }, []);
  
//     if (loading) {
//       return <p>Loading...</p>;
//     }
  
//     if (buses.length === 0) {
//       return <p>No buses found.</p>;
//     }
  
//   // return (
//   //   <div id="busList" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgb(245, 245, 245)' }}>
//   //     <div style={{ margin: 'auto' }}>
//   //       <div className="busListingContainer">
//   //         <div className="busCardContainer ">
//   //           <div className="busCard false" id="">
//   //             <div className="makeFlex false">
//   //               <div className="makeFlex column appendBottom22 busInfo">
//   //                 <div className="makeFlex">
//   //                   <div></div>
//   //                   <div>
//   //                     <p className="makeFlex hrtlCenter appendBottom8 latoBold blackText appendRight15">Pinkbus</p>
//   //                   </div>
//   //                 </div>
//   //                 <p className="makeFlex hrtlCenter secondaryTxt nowrapStyle">A/C Seater (2+2)</p>
//   //               </div>
//   //               <div className="makeFlex row appendBottom20 alignSelfStart hrtlCenter">
//   //                 <div>
//   //                   <span className="font18 latoBlack blackText appendRight4">16:30</span>
//   //                   <span className="font14 secondaryTxt capText">4 Feb</span>
//   //                 </div>
//   //                 <div className="line-border-top"></div>
//   //                 <div className="font14 secondaryTxt">
//   //                   <span>04</span>hrs
//   //                   <span>30</span>mins
//   //                 </div>
//   //                 <div className="line-border-top"></div>
//   //                 <div>
//   //                   <span className="font18 blackText appendRight4 latoRegular">21:00</span>
//   //                   <span className="font14 secondaryTxt capText">4 Feb</span>
//   //                 </div>
//   //               </div>
//   //               <div className="priceSection">
//   //                 <div className="makeFlex column end">
//   //                   <div className="makeFlex appendBottom8">
//   //                     <span> <i className="fa-solid fa-indian-rupee-sign kafEbu">&nbsp;476</i></span>
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //             <div className="makeFlex spaceBetween">
//   //               <div className="busCardFooter makeFlex spaceBetween ">
//   //                 <ul className="makeFlex hrtlCenter font12 noSelection">
//   //                   <span className="listingSprite newPrimoIcon appendRight24"></span>
//   //                   <li className="detailHeader amenitiesList">
//   //                     <span className="appendRight5">Amenities</span>
//   //                     <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
//   //                   </li>
//   //                   <li className="detailHeader ">
//   //                     <span className="appendRight5">Pickups &amp; Drops</span>
//   //                     <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
//   //                   </li>
//   //                 </ul>
//   //                 <div className="sc-jKJlTe fnCpOO select-seats">Select Seats</div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
//   // return (
//   //   <div id="busList" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgb(245, 245, 245)' }}>
//   //     {buses.map(bus => (
//   //       <div key={bus.id} style={{ margin: 'auto' }}>
//   //         <div className="busListingContainer">
//   //           <div className="busCardContainer ">
//   //             <div className="busCard false" id="">
//   //               <div className="makeFlex false">
//   //                 <div className="makeFlex column appendBottom22 busInfo">
//   //                   <div className="makeFlex">
//   //                     <div></div>
//   //                     <div>
//   //                       {/* <p className="makeFlex hrtlCenter appendBottom8 latoBold blackText appendRight15">{bus.type}</p> */}
//   //                     </div>
//   //                   </div>
//   //                   <p className="makeFlex hrtlCenter secondaryTxt nowrapStyle">{bus.type}</p>
//   //                 </div>
//   //                 <div className="makeFlex row appendBottom20 alignSelfStart hrtlCenter">
//   //                   <div>
//   //                     <span className="font18 latoBlack blackText appendRight4">{bus.departureTime}</span>
//   //                     <span className="font14 secondaryTxt capText">{bus.departureDate}</span>
//   //                   </div>
//   //                   <div className="line-border-top"></div>
//   //                   <div className="font14 secondaryTxt">
//   //                     <span>{bus.duration.hours}</span>hrs
//   //                     <span>{bus.duration.minutes}</span>mins
//   //                   </div>
//   //                   <div className="line-border-top"></div>
//   //                   <div>
//   //                     <span className="font18 blackText appendRight4 latoRegular">{bus.arrivalTime}</span>
//   //                     <span className="font14 secondaryTxt capText">{bus.arrivalDate}</span>
//   //                   </div>
//   //                 </div>
//   //                 <div className="priceSection">
//   //                   <div className="makeFlex column end">
//   //                     <div className="makeFlex appendBottom8">
//   //                       <span> <i className="fa-solid fa-indian-rupee-sign kafEbu">&nbsp;{bus.price}</i></span>
//   //                     </div>
//   //                   </div>
//   //                 </div>
//   //               </div>
//   //               <div className="makeFlex spaceBetween">
//   //                 <div className="busCardFooter makeFlex spaceBetween ">
//   //                   <ul className="makeFlex hrtlCenter font12 noSelection">
//   //                     <span className="listingSprite newPrimoIcon appendRight24"></span>
//   //                     <li className="detailHeader amenitiesList">
//   //                       <span className="appendRight5">Amenities</span>
//   //                       <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
//   //                     </li>
//   //                     <li className="detailHeader ">
//   //                       <span className="appendRight5">Pickups &amp; Drops</span>
//   //                       <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
//   //                     </li>
//   //                   </ul>
//   //                   <div className="sc-jKJlTe fnCpOO select-seats">Select Seats</div>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </div>
//   //     ))}
//   //   </div>
//   // );
  
//   return (
//     <div>
//       {buses.map(bus => (
//         <div key={bus.id}>
//           <p>Name: {bus.name}</p>
//           <p>Type: {bus.type}</p>
//           {/* Add more bus details here */}
//         </div>
//       ))}
//     </div>
//   );
// }
// }

// export default Bus;































// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function Bus(){
// const BusList = () => {
//   const location = useLocation();
//   const { buses } = location.state;
//   return (
//     <div>
//       <h2>List of Buses</h2>
//       {buses[0].map(bus => (
//         <div key={bus.id}>
//           <p>Bus Name: {bus.name}</p>
//           <p>Bus Type: {bus.type}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
// }
// export default Bus;



import React from 'react';
import { useLocation } from 'react-router-dom';

function Bus() {
  const location = useLocation();
  const { buses } = location.state;

  return (
    <div>
      <h2>List of Buses</h2>
      {buses.map(bus => (
        <div key={bus.busId}>
          <p>Bus Name: {bus.busName}</p>
          <p>Bus Type: {bus.busType}</p>
          <p>Bus Origin: {bus.origin}</p>
          <p>Bus Destination: {bus.destination}</p>
          <p>Bus Total Seats: {bus.totalSeats}</p>
        </div>
      ))}
    </div>
  );
}

export default Bus;
