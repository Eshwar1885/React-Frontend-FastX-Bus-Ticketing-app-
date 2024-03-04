// import './DetailsContainer.css';
// function DetailsContainer(){
//     return(
//         <div>
// <div className="detailsbusListingContainer">
//         <div className="detailsbusCardContainer">
//             <div className="detailsbusCard">
//                 <h2>Bus 1 Details</h2>
//                 <p>Bus Name: Pink Bus</p>
//                 <p>Price: $50</p>
//                 <p>Date: 2024-02-04</p>
//                 <p>Oigin</p>
//                 <p>Destination: Pune</p>
//             </div>
//             <div className="detailsbusCardFooter">
//                 <p>Booking ID: 123456789</p>
//                 <p>Seat Number: 12</p>
//             </div>
//         </div>
//         </div>

//         </div>
//     )
// }
// export default DetailsContainer;

// DetailsContainer.js

// DetailsContainer.js

// DetailsContainer.js

import './DetailsContainer.css';


function DetailsContainer(booking){
    return(
        <div className="detailsbusListingContainer">
            <div className="detailsbusCardContainer">
                <div className="detailsbusCard">
                    <div className="detailheader">
                        <h2 className="detailbusName">Bus Name:{booking.booking.busName}</h2>
                    </div>
                    <div className="detailsRow">
                        <div className="detailLabel">Bus Type:</div>
                        <div className="detailValue">{booking.booking.busType}</div>
                        {/* <div className="detailLabel">Origin:</div>
                        <div className="detailValue">{booking.booking.origin}</div>
                        <div className="detailLabel">Destination</div>
                        <div className="detailValue">{booking.booking.destination}</div> */}
                    </div>

                    <div className="detailsRow">
                        <div className="detailLabel">seatNumbers</div>
                        <div className="detailValue">{booking.booking.seatNumbers}</div>
                        <div className="detailLabel">Status:</div>
                        <div className="detailValue">{booking.booking.status}</div>
                        {/* <div className="detailLabel">Something:</div>
                        <div className="detailValue">Something else</div> */}
                    </div>
                    {/* Add other details here */}
                </div>
            </div>
        </div>
    );
}

export default DetailsContainer;
