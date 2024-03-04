import React, { useState } from 'react';
import './Bus.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBusInfo } from '../Redux/Actions';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

function Bus() {
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const [fetchingAmenities, setFetchingAmenities] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { buses } = location.state;

  const toggleAmenities = async (busId) => {
    setAmenitiesOpen(!amenitiesOpen);
    if (!amenitiesOpen) {
      try {
        setFetchingAmenities(true);
        const response = await axios.get(`http://localhost:5263/api/Amenity/bus/amenitiesForABus?busId=${busId}`);
        setAmenities(response.data);
      } catch (error) {
        console.error('Error fetching amenities:', error);
      } finally {
        setFetchingAmenities(false);
      }
    }
  };

  const handleSelectSeats = (busId, busName, busType) => {
    dispatch(setBusInfo(busName, busType, busId));
    navigate(`/seating/${busId}`);
  };

  return (
    <div>
      <Navbar/>
      {buses.map(bus => (
        <div key={bus.busId}>
          <div id="busList" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'rgb(245, 245, 245)' }}>
            <div style={{ margin: 'auto' }}>
              <div className="busListingContainer">
                <div className="busCardContainer">
                  <div className="busCard">
                    <div className="makeFlex">
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
                        {/* <div>
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
                        </div> */}
                      </div>
                    </div>
                    <div className="makeFlex spaceBetween">
                      <div className="busCardFooter makeFlex spaceBetween ">
                        <ul className="makeFlex hrtlCenter font12 noSelection">
                          <span className="listingSprite newPrimoIcon appendRight24"></span>
                          <li className="detailHeader amenitiesList" onClick={() => toggleAmenities(bus.busId)}>
                            <span className="appendRight5">Amenities</span>
                            <i className={`fa-solid fa-angle-${amenitiesOpen ? 'up' : 'down'} downArrowSmallIcon`}></i>
                          </li>
                        </ul>
                        {amenitiesOpen && (
                          <div className="amenities-dropdown-below">
                            {fetchingAmenities ? (
                              <p>Loading amenities...</p>
                            ) : amenities.length > 0 ? (
                              amenities.map((amenity, index) => (
                                <p key={index}>{amenity.name}</p>
                              ))
                            ) : (
                              <p>No amenities available for this bus.</p>
                            )}
                          </div>
                        )}
                        <button className="sc-jKJlTe fnCpOO select-seats" onClick={() => handleSelectSeats(bus.busId, bus.busName, bus.busType)}>
                          Select Seats
                        </button>
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