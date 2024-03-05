import React, { useState, useEffect } from "react";
import './AddBus.css'
import BusOperatorNavbar from "../../BusOperatorNavbar/BusOperatorNavbar";

function AddBus() {
    const [currentStep, setCurrentStep] = useState(1);
    const [busName, setBusName] = useState("");
    const [busType, setBusType] = useState("");
    const [totalSeats, setTotalSeats] = useState("");
    const [seatPrice, setSeatPrice] = useState(0);

    const [amenities, setAmenities] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const token=sessionStorage.getItem('token');

    // useEffect(() => {
    //     const getAmenities = () => {
    //         fetch("http://localhost:5263/api/Amenity/GetAmenityFromAmenityTable")
    //             .then(res => res.json())
    //             .then(res => {
    //                 setAmenities(res);
    //                 console.log(res);
    //             })
    //             .catch(err => console.error(err));
    //     };

    //     getAmenities();
    // }, []);

    useEffect(() => {
        const getAmenities = () => {
            fetch("http://localhost:5263/api/Amenity/GetAmenityFromAmenityTable")
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(res => {
                    setAmenities(res);
                    // console.log(res);
                })
                .catch(err => console.error(err));
        };
    
        getAmenities();
    }, []);
    

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const addBus = () => {
        const bus = {
            busName: busName,
            busType: busType,
            totalSeats: totalSeats,
            busOperatorId: sessionStorage.getItem('userId'),
            seatPrice: seatPrice,
            amenities: selectedAmenities
        };
        
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(bus)
        // };

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+token
            },
            body: JSON.stringify(bus)
        };
        // console.log(requestOptions.headers);

        fetch("http://localhost:5263/api/Bus/AddBusByBusOperator", requestOptions)
            // .then(res => res.json())
            .then(res => {
                if (!res.ok) {
                    if (res.status === 401) {
                        throw new Error('You are not authorized to add a bus.');
                    } else {
                        throw new Error('Network response was not ok');
                    }
                }
                return res.json();
            })
            .then(res => {
                // console.log(res);
                if (res.busId) {
                    // Add amenities for the bus if busId is available
                    addAmenitiesForBus(res.busId, selectedAmenities);
                    // Alert when addBus is successful
                    window.alert("Bus added successfully!");
                }
            })
            .catch(err => {
                console.log(err);
                // Display an alert for unauthorized access
                if (err.message === 'You are not authorized to add a bus.') {
                    window.alert(err.message);
                } else {
                    window.alert('You are not authorized to add a bus.');
                }
            });
        };
        const addAmenitiesForBus = (busId, amenityNames) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ busId, amenityNames })
        };

        fetch("http://localhost:5263/api/BusOperator/AddAmenitiesToBus", requestOptions)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                // Handle the response if needed
            })
            .catch(err => console.log(err));
        };

    const handleCheckboxChange = (e, amenityName) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setSelectedAmenities([...selectedAmenities, amenityName]);
        } else {
            setSelectedAmenities(selectedAmenities.filter(name => name !== amenityName));
        }
    };

    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <div className="mb-3">
                            <label htmlFor="busName" className="form-label">Bus Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="busName"
                                value={busName}
                                onChange={(e) => setBusName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bustype" className="form-label">Bus Type:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bustype"
                                value={busType}
                                onChange={(e) => setBusType(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="totalSeats" className="form-label">Total Number of Seats:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="totalSeats"
                                value={totalSeats}
                                onChange={(e) => setTotalSeats(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="seatPrice" className="form-label">Min seat price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="seatPrice"
                                value={seatPrice}
                                onChange={(e) => setSeatPrice(e.target.value)}
                            />
                        </div>
                        <button onClick={nextStep} className="btn btn-primary">Next</button>
                    </>
                );
            case 2:
                return (
                    <>

                        <div className="mb-3">
                            <label className="form-label">Select Amenities:</label>
                            {amenities.map(amenity => (
                                <div key={amenity.amenityId} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={amenity.name}
                                        value={amenity.name}
                                        checked={selectedAmenities.includes(amenity.name)}
                                        onChange={(e) => handleCheckboxChange(e, amenity.name)}
                                    />
                                    <label className="form-check-label" htmlFor={amenity.name}>
                                        {amenity.name}
                                    </label>
                                </div>
                            ))}
                        </div>


                        <button onClick={prevStep} className="btn btn-secondary mr-2">Previous</button>
                        <button onClick={addBus} className="btn btn-primary">Submit</button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mt-5 black">
            <h2>Bus Information Form - Step {currentStep}</h2>
            {renderFormStep()}
        </div>
    );
}

export default AddBus;














