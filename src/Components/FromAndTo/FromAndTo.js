import React, { useState } from 'react';
import styles from '../../caraousel.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Caraousel from '../Caraousel/Caraousel';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector and useDispatch from react-redux
import { selectOrigin, selectDestination, selectTravelDate } from '../Redux/Actions'; // Corrected path
import Navbar from '../Navbar/Navbar';



function FromAndTo() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initializing dispatch function
    const Origin = useSelector(state => state.origin); // Example usage of useSelector
    // console.log(Origin)
    const Destination = useSelector(state => state.destination); // Example usage of useSelector
    // console.log(Destination)
    // const [TravelDate, setDate] = useState('');
    const TravelDate = useSelector(state => state.travelDate); // Example usage of useSelector
    // console.log(TravelDate)
    // const today = new Date().toISOString().split('T')[0]; // Get today's date in the format yyyy-mm-dd
    const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const today = currentDate.toISOString().slice(0, 16);
  const [errors, setErrors] = useState({});


    const handleSearch = async () => {
        const errors = {};
        let isValid = true;

        if (!Origin.origin) {
            errors.origin = 'Please enter a source.';
            isValid = false;
        }

        if (!Destination.destination) {
            errors.destination = 'Please enter a destination.';
            isValid = false;
        }

        if (!TravelDate.travelDate) {
            errors.travelDate = 'Please select a travel date.';
            isValid = false;
        }

        if (isValid) {
        try {
            const response = await axios.get('http://localhost:5263/api/Bus/search', {
                // params: { Origin, Destination, TravelDate },
                params: {
                  Origin: Origin.origin,
                  Destination: Destination.destination,
                  TravelDate: TravelDate.travelDate,
              },
            });
            navigate('/bus-list', { state: { buses: response.data } }); // Pass the fetched data to the Bus component
            console.log(response.data)
        } catch (error) {
            console.error('Error searching buses:', error);
        } 
    }
    else {
            setErrors(errors);
        }
    };

    const handleOriginChange = (e) => {
        setErrors((prevState) => ({ ...prevState, origin: '' }));
        dispatch(selectOrigin(e.target.value));
    };

    const handleDestinationChange = (e) => {
        setErrors((prevState) => ({ ...prevState, destination: '' }));
        dispatch(selectDestination(e.target.value));
    };

    const handleTravelDateChange = (e) => {
        setErrors((prevState) => ({ ...prevState, travelDate: '' }));
        dispatch(selectTravelDate(e.target.value));
    };


    return (
        <div>
            <Navbar/>
            <Caraousel />
            <div className={styles.fromAndTo}>
                <div className={styles.a}>
                    <div className={styles.ikHMPa}>
                        <div>
                            <div className={styles.outerContainer}>
                                <div className={styles.btnStyle}>
                                    <div className={styles.iconStyle}>
                                    <i className="fa-solid fa-bus ${styles.newStyle}"></i>

                                        <div className={styles.outerinputStyle}>
                                            <div className={styles.inputStyle}>
                                                <input
                                                    id="src"
                                                    type="text"
                                                    placeholder="Source"
                                                    className={styles.inputStyleA}
                                                    // value={Origin.origin}
                                                    value={Origin.origin}

                                                    onChange={handleOriginChange} // Using handleOriginChange to update Origin
                                                />
                                                <label htmlFor="src">From</label>
                                                {/* {errors.origin && <p className={styles.errorMessage}>{errors.origin}</p>} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.jVMfHp}>
                            <i className={`${styles['fa-solid']} ${styles['fa-arrows-left-right']} ${styles.newStyle}`}></i>
                        </div> */}
                        <div className={styles.jVMfHp}>
                <i className="fa-solid fa-arrows-left-right ${styles.newStyle}"></i>
                        </div>
                        <div className={styles.outerContainer}>
                            <div role="button" className={styles.btnStyle}>
                                <div className={styles.destIcon}>
                                <i className="fa-solid fa-bus ${styles.newStyle}"></i>
                                    <div className={styles.outerinputStyle}>
                                        <div className={`${styles['sc-htoDjs']} inputStyle`}>
                                            <input
                                                id="dest"
                                                type="text"
                                                placeholder="Destination"
                                                className={styles.inputStyleA}
                                                value={Destination.destination}
                                                onChange={handleDestinationChange} // Using handleDestinationChange to update Destination
                                            />
                                            <label htmlFor="dest">To</label>
                                            {/* {errors.destination && <p className={styles.errorMessage}>{errors.destination}</p>} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="datetime-local" min={today} className={styles.c} value={TravelDate.travelDate} onChange={handleTravelDateChange} />
                        <div className={styles.CalendarContainer}></div>
                        {/* {errors.travelDate && <p style={{ color: 'red' }}>{errors.travelDate}</p>} */}
                        <button id="search_button" className={styles.busBtn} onClick={handleSearch}>
                            SEARCH BUSES
                        </button>
                    </div>
                </div>
            </div>
            {errors.origin && <h5 style={{ color: 'red' }}>{errors.origin}</h5>}

            {errors.destination && <h5 style={{ color: 'red' }}>{errors.destination}</h5>}

            {errors.travelDate && <h5 style={{ color: 'red' }}>{errors.travelDate}</h5>}

        </div>
        
    );
}

export default FromAndTo;
