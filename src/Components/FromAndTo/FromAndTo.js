import React, { useState } from 'react';
import styles from '../../caraousel.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function FromAndTo() {
    const navigate = useNavigate()
// navigate('/')
    const [Origin, setOrigin] = useState('');
    const [Destination, setDestination] = useState('');
    const [TravelDate, setDate] = useState('');

    // const handleSearch = () => {
    //     // Redirect to BusList component with parameters
    //     navigate(`/buslist/${origin}/${destination}/${date}`);
    //   };


    // const handleSearch = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:5263/api/Bus/search', {
    //       params: { Origin, Destination, TravelDate },
    //     });
    //     console.log(response)
    //     // navigate('/bus-list', { state: { buses: response.data } });
    //     navigate(`/bus-list/${Origin}/${Destination}/${TravelDate}`);

    //   } catch (error) {
    //     console.error('Error searching buses:', error);  
    //   }



      const handleSearch = async () => {
        try {
          const response = await axios.get('http://localhost:5263/api/Bus/search', {
            params: { Origin, Destination, TravelDate },
          });
      
          // navigate(`/bus-list/${Origin}/${Destination}/${TravelDate}`, { state: { buses: response.data } }); // Pass the fetched data to the Bus component
          navigate('/bus-list', { state: { buses: response.data } }); // Pass the fetched data to the Bus component
          console.log(response.data)
        } catch (error) {
          console.error('Error searching buses:', error);
          
        
      };
    
    
      



      // console.log(handleSearch);
    };


  return (
    <div className={styles.fromAndTo}>
      <div className={styles.a}>
        <div className={styles.ikHMPa}>
          <div>
            <div className={styles.outerContainer}>
              <div className={styles.btnStyle}>
                <div className={styles.iconStyle}>
                  {/* Some source icon */}
                  <i>
                    
                  </i>
                  <div className={styles.outerinputStyle}>
                    <div className={styles.inputStyle}>
                      <input
                        id="src"
                        type="text"
                        placeholder="Source"
                        className={styles.inputStyleA}
                        value={Origin}
                        onChange={e => setOrigin(e.target.value)}
                        />
                      <label htmlFor="src">From</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.jVMfHp}>
            {/* Double arrow icon */}
            {/* <i className={styles.fa-solid fa-arrows-left-right newStyle}></i> */}
            <i className={`${styles['fa-solid']} ${styles['fa-arrows-left-right']} ${styles.newStyle}`}></i>

          </div>
          <div className={styles.outerContainer}>
            <div role="button" className={styles.btnStyle}>
              <div className={styles.destIcon}>
                {/* Destination icon */}
                {/* <i className={styles.destIconStyle icon icon-dest}></i> */}
                <i className={`${styles.destIconStyle} icon icon-dest`}></i>

                <div className={styles.outerinputStyle}>
                  {/* <div className={styles.sc-htoDjs inputStyle}> */}
                  <div className={`${styles['sc-htoDjs']} inputStyle`}>

                    <input
                      id="dest"
                      type="text"
                      placeholder="Destination"
                      className={styles.inputStyleA}
                      value={Destination}
                      onChange={e => setDestination(e.target.value)}
                    />
                    <label htmlFor="dest">To</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input type="datetime-local" className={styles.c} value={TravelDate} onChange={e => setDate(e.target.value)} />
          <div className={styles.CalendarContainer}></div>
          <button  id="search_button" className={styles.busBtn} onClick={handleSearch}>
            SEARCH BUSES
          </button>
        </div>
      </div>
    </div>
  );
}

export default FromAndTo;
