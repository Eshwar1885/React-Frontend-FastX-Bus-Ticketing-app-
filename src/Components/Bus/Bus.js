import  {  useState } from 'react';
import './Bus.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBus } from '../Redux/Actions';

function Bus() {

  const location = useLocation();
  const navigate = useNavigate();
  const { buses } = location.state;
  const handleSelectSeats = (busId) => {
    navigate(`/seating/${busId}`); // Navigate to '/seating/:busId' where :busId is the actual bus ID
  };


  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const buses = useSelector(state => state.buses); // Assuming buses are stored in Redux state
  // console.log(buses);
  // const handleSelectSeats = (busId) => {
  //   dispatch(selectBus(busId));
  //   navigate(`/seating/${busId}`);
  // };


  return (
    <div>
    {buses.map(bus => (
    <div key={bus.busId}>
      
    <div id="busList" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgb(245, 245, 245)' }}>
      
      <div style={{ margin: 'auto' }}>
        <div className="busListingContainer">
          <div className="busCardContainer ">
            <div className="busCard false" id="">
              <div className="makeFlex false">
                <div className="makeFlex column appendBottom22 busInfo">
                  <div className="makeFlex">
                    <div></div>
                    <div>
                      <p className="makeFlex hrtlCenter appendBottom8 latoBold blackText appendRight15">{bus.busName}</p>
                    </div>
                  </div>
                  <p className="makeFlex hrtlCenter secondaryTxt nowrapStyle">{bus.busType}</p>
                </div>
                <div className="makeFlex row appendBottom20 alignSelfStart hrtlCenter">
                  <div>
                    <span className="font18 latoBlack blackText appendRight4">16:30</span>
                    <span className="font14 secondaryTxt capText"> 4 Feb</span>
                  </div>
                  <div className="line-border-top"></div>
                  <div className="font14 secondaryTxt">
                    <span>04 </span>hrs 
                    <span> 30 </span>mins
                  </div>
                  <div className="line-border-top"></div>
                  <div>
                    <span className="font18 blackText appendRight4 latoRegular">21:00</span>
                    <span className="font14 secondaryTxt capText"> 4 Feb</span>
                  </div>
                </div>
                <div className="priceSection">
                  <div className="makeFlex column end">
                    <div className="makeFlex appendBottom8">
                      <span> <i className="fa-solid fa-indian-rupee-sign kafEbu">&nbsp;476</i></span>
                    </div>
                  </div>
                  {/* ))} */}
                </div>
              </div>
              <div className="makeFlex spaceBetween">
                <div className="busCardFooter makeFlex spaceBetween ">
                  <ul className="makeFlex hrtlCenter font12 noSelection">
                    <span className="listingSprite newPrimoIcon appendRight24"></span>
                    <li className="detailHeader amenitiesList">
                      <span className="appendRight5">Amenities</span>
                      <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
                    </li>
                    <li className="detailHeader ">
                      <span className="appendRight5">Pickups &amp; Drops</span>
                      <i className="fa-solid fa-angle-down downArrowSmallIcon"></i>
                    </li>
                  </ul>
                  {/* <div className="sc-jKJlTe fnCpOO select-seats">Select Seats</div> */}
                  
                  {/* <button className="sc-jKJlTe fnCpOO select-seats" 
                  onClick={() => handleSelectSeats(bus.busId)}
                  > */}
                    <button className="sc-jKJlTe fnCpOO select-seats"
                     onClick={() => handleSelectSeats(bus.busId)}>
                    Select Seats
              {/* {showSeating ? 'Hide Seats' : 'Select Seats'} */}
            </button>
            {/* {showSeating && <SeatingArrangement />} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   ))}
  </div>
  );
}
export default Bus;



