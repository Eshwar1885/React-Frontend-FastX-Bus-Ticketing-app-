import { useEffect, useState } from 'react';
import axios from 'axios';
import './BusDetails.css';

function BusDetails() {
  const [busDetails, setBusDetails] = useState(null);

  useEffect(() => {
    // Retrieve bus operator ID from session storage
    const busOperatorId = sessionStorage.getItem('userId');

    // Make GET request to fetch bus details
    if (busOperatorId) {
      axios.get(`http://localhost:5263/api/BusOperator/GetBusForBusOperator?busOperatorId=${busOperatorId}`)
        .then(response => {
          // Set bus details in state
          setBusDetails(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching bus details:', error);
        });
    } else {
      console.error('Bus operator ID not found in session storage');
    }
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="bus-details-container">
      {busDetails ? (
        <div className="bus-details">
          {busDetails.map((bus) => (
            <div key={bus.busId} className="bus-item">
              <div className="bus-item-container">
                <p>Bus Name: {bus.busName}</p>
                <p>Bus Type: {bus.busType}</p>
                {/* Add more details if needed */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading bus details...</p>
      )}
    </div>
  );
}

export default BusDetails;
