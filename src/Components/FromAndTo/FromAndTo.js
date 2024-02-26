import React, { useState } from 'react';
import styles from '../../caraousel.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Caraousel from '../Caraousel/Caraousel';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector and useDispatch from react-redux
import { selectOrigin, selectDestination, selectTravelDate } from '../Redux/Actions'; // Corrected path



function FromAndTo() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initializing dispatch function

    const Origin = useSelector(state => state.origin); // Example usage of useSelector
    console.log(Origin)

    const Destination = useSelector(state => state.destination); // Example usage of useSelector
    console.log(Destination)

    // const [TravelDate, setDate] = useState('');
    const TravelDate = useSelector(state => state.travelDate); // Example usage of useSelector
    console.log(TravelDate)

    const handleSearch = async () => {
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
        };
    };

    const handleOriginChange = (e) => {
        dispatch(selectOrigin(e.target.value)); // Dispatching action to update Origin in Redux store
    };

    const handleDestinationChange = (e) => {
        dispatch(selectDestination(e.target.value)); // Dispatching action to update Destination in Redux store
    };

    const handleTravelDateChange = (e) => {
      dispatch(selectTravelDate(e.target.value)); // Dispatching action to update Destination in Redux store
  };


    return (
        <div>
            <Caraousel />
            <div className={styles.fromAndTo}>
                <div className={styles.a}>
                    <div className={styles.ikHMPa}>
                        <div>
                            <div className={styles.outerContainer}>
                                <div className={styles.btnStyle}>
                                    <div className={styles.iconStyle}>
                                        <i></i>
                                        <div className={styles.outerinputStyle}>
                                            <div className={styles.inputStyle}>
                                                <input
                                                    id="src"
                                                    type="text"
                                                    placeholder="Source"
                                                    className={styles.inputStyleA}
                                                    value={Origin.origin}
                                                    onChange={handleOriginChange} // Using handleOriginChange to update Origin
                                                />
                                                <label htmlFor="src">From</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.jVMfHp}>
                            <i className={`${styles['fa-solid']} ${styles['fa-arrows-left-right']} ${styles.newStyle}`}></i>
                        </div>
                        <div className={styles.outerContainer}>
                            <div role="button" className={styles.btnStyle}>
                                <div className={styles.destIcon}>
                                    <i className={`${styles.destIconStyle} icon icon-dest`}></i>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="datetime-local" className={styles.c} value={TravelDate.travelDate} onChange={handleTravelDateChange} />
                        <div className={styles.CalendarContainer}></div>
                        <button id="search_button" className={styles.busBtn} onClick={handleSearch}>
                            SEARCH BUSES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FromAndTo;
