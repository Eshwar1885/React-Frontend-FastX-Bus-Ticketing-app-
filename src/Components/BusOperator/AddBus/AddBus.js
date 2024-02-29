import React, { useState, useEffect } from "react";
import './AddBus.css'
function AddBus(){

    var [busName,setBusName]=useState("");
    var [busType,setBusType]=useState("");
    var [totalSeats,setTotalSeats]=useState("");
    // var [busOperatorId,setBusOperatorId]=useState("");
    var [amenities,setAmenities] = useState([]);
    const [selectedAmenity, setSelectedAmenity] = useState("");
    const [customAmenity, setCustomAmenity] = useState("");


    useEffect(() => {
      const getAmenities = () => {
          fetch("http://localhost:5263/api/Amenity/GetAmenityFromAmenityTable")
              .then(res => res.json())
              .then(res => {
                  setAmenities(res);
                  console.log(res);
              })
              .catch(err => console.error(err));
      };

      getAmenities(); // Call getAmenities function when component mounts
  }, []);

    var bus={};
    const userId = sessionStorage.getItem('userId'); // Get userId from session storage


    var addBus=()=>{
        bus.busName=busName;
        bus.busType=busType;
        bus.totalSeats=totalSeats;
        bus.busOperatorId=userId;

        // Use custom amenity if "Other (Please Specify)" is selected
    const amenityToAdd = selectedAmenity === "other" ? customAmenity : selectedAmenity;
        //console.log(bus);
        var requestOptions = {
            method :'POST',
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(bus)
        }
        console.log(requestOptions);
        fetch("http://localhost:5263/api/Bus/AddBusByBusOperator",requestOptions)
        .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.busId) {
                    // Add amenity for the bus if busId is available
                    addAmenityForBus(res.busId, amenityToAdd);
                }
            })
            .catch(err => console.log(err));    
    }

    const addAmenityForBus = (busId, amenityName) => {
      var requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ busId: busId, amenityName: amenityName })
      }

      fetch("http://localhost:5263/api/BusOperator/AddAmenityForBusByBusOperator", requestOptions)
      .then(res => {
        // Check if request was successful
        if (res.ok) {
            console.log("Amenity added successfully for the bus.");
        } else {
            console.error("Failed to add amenity for the bus.");
        }
    })
    .catch(err => console.error("Error adding amenity for the bus:", err));
  }
    // var getAmenities =  ()=>{
    //   fetch("http://localhost:5263/api/Amenity/GetAmenityFromAmenityTable")
    //   .then(res=>res.json())
    //   .then(res=>{
    //        setAmenities(res);
    //       console.log(amenities);
    //   });
    // }

   // console.log(addBus);
    return(
        <div>
           

    <div className="container mt-5 black">
      <h2>Bus Information Form</h2>
      {/* <form > */}
      {/* onSubmit={handleSubmit} */}
        <div className="mb-3">
          <label htmlFor="busName" className="form-label">
            Bus Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="busName"
            name="busName"
            value={busName}
            onChange={(e)=>setBusName(e.target.value)}
            // required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bustype" className="form-label">
            Bus Type:
          </label>
          <input
            type="text"
            className="form-control"
            id="bustype"
            name="bustype"
            value={busType}
           onChange={(e)=>setBusType(e.target.value)}
            // required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalSeats" className="form-label">
            Total Number of Seats:
          </label>
          <input
            type="number"
            className="form-control"
            id="totalSeats"
            name="totalSeats"
           value={totalSeats}
            onChange={(e)=>setTotalSeats(e.target.value)}
          //  required
          />
        </div>

        <div className="mb-3">
                    <label htmlFor="amenity" className="form-label">Select Amenity:</label>
                    <select className="form-control" id="amenity" value={selectedAmenity} onChange={(e) => setSelectedAmenity(e.target.value)}>
                        <option value="">Select Amenity</option>
                        {amenities.map(amenity => (
                            <option  key={amenity.amenityId} value={amenity.name}>{amenity.name}</option>
                        ))}
                        {/* <option value="other">Other (Please Specify)</option> */}
                    </select>
                    {/* Show input field if "other" option is selected */}
    {selectedAmenity === "other" && (
        <input
            type="text"
            className="form-control mt-2"
            placeholder="Enter the amenity"
            value={customAmenity}
            onChange={(e) => setCustomAmenity(e.target.value)} // Update customAmenity state
        />
    )}
                </div>


        {/* <div className="mb-3">
          <label htmlFor="operatorId" className="form-label">
            Bus Operator ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="operatorId"
            name="operatorId"
           value={busOperatorId}
            onChange={(e)=>setBusOperatorId(e.target.value)}
           // required
          />
        </div> */}
        <button onClick={addBus} className="btn btn-primary">
          Submit
        </button>
      {/* </form> */}
    </div>





        </div>
    )
}
export default AddBus;