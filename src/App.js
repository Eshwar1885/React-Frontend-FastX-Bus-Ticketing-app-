import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/RegisterUser/Register';
import RegisterBusOperator from './Components/RegisterBusOperator/RegisterBusOperator';
import RegisterAdmin from './Components/RegisterAdmin/RegisterAdmin';
import Caraousel from './Components/Caraousel/Caraousel';
import FromAndTo from './Components/FromAndTo/FromAndTo';
import Bus from './Components/Bus/Bus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SeatingArrangement from './Components/SeatingArrangement/SeatingArrangement';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import Payment from './Components/Payment/Payment';
import Navbar from './Components/Navbar/Navbar';
import AddBus from './Components/BusOperator/AddBus/AddBus';
import Main from './Components/Main/Main';
import BusDetails from './Components/BusDetails/BusDetails';
import BusActions from './Components/BusActions/BusActions';
import BookingHistory from './Components/BookingHistory/BookingHistory';
import RefundRequest from './Components/RefundRequest/RefundRequest';
import DetailsContainer from './Components/DetailsContainer/DetailsContainer';
import PaymentSuccess from './Components/PaymentSuccess/PaymentSuccess';
import PrivateRouteBookingHistory from './Components/PrivateRoutes/PrivateRouteBookingHistory';
import BusOperatorLogin from './Components/Login/BusOperatorLogin';



function App() {
  return (
    <div className="App">
            
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />

              <Route path="/register" element={<Register />} />
              <Route path="/registerbusoperator" element={<RegisterBusOperator />} />
              <Route path="/registeradmin" element={<RegisterAdmin />} />


                <Route path="/login" element={<Login />} />
                <Route path="/busoperatorlogin" element={<BusOperatorLogin />} />

                <Route path="/fromandto" element={<FromAndTo/>} />

                

                <Route path="/bus-list" element={<Bus />} />
                <Route path="/seating/:busId" element={<SeatingArrangement />} />
                {/* <Route path="/details" element={<BookingDetails />} /> */}
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/nav" element={<Navbar/>}/>

                {/* busoperator actions */}


                <Route path="/addbus" element={<AddBus/>}/>

                <Route path="/busdetails" element={<BusDetails/>}/>
                <Route path="/busactions" element={<BusActions/>}/>

                <Route element={<PrivateRoute/>}>
                  <Route path="/bookinghistory" element={<BookingHistory/>}/>
                </Route>

                <Route path="/refundrequest" element={<RefundRequest/>}/>
                <Route path="/detailscontainer" element={<DetailsContainer/>}/>
                 <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>    
                 
              
                    
                

                 <Route element={<PrivateRoute/>}>
                  <Route path="/details" element={<BookingDetails />} />
                </Route>

                
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
