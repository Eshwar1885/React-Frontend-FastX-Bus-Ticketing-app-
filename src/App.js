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
import New from './Components/New/New';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import BookingDetails from './Components/New/BookingDetails';
import Payment from './Components/Payment/Payment';
import Navbar from './Components/Navbar/Navbar';
import AddBus from './Components/BusOperator/AddBus/AddBus';
import Main from './Components/Main/Main';



function App() {
  return (
    <div className="App">
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <RegisterBusOperator/> */}
            {/* <RegisterAdmin/> */}
            {/* <Carousel/> */}
            {/* <FromAndTo/> */}
            {/* <Bus/> */}
            <BrowserRouter>
              <Routes>
              <Route path="/main" element={<Main />} />

              <Route path="/register" element={<Register />} />
              <Route path="/registerbusoperator" element={<RegisterBusOperator />} />
              <Route path="/registeradmin" element={<RegisterAdmin />} />


                <Route path="/login" element={<Login />} />
                <Route path="/new" element={<New/>} />
                {/* <Route path="/details" element={<BookingDetails />} /> */}
                <Route path="/home" element={<FromAndTo/>} />
                <Route element={<PrivateRoute/>}>
                  <Route path="/details" element={<BookingDetails />} />
                </Route>

                

                <Route path="/bus-list" element={<Bus />} />
                 {/* <Route path="/seating" element={<SeatingArrangement/>}/> */}
                <Route path="/seating/:busId" element={<SeatingArrangement />} />
                <Route path="/details" element={<BookingDetails />} />
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/nav" element={<Navbar/>}/>

                {/* busoperator actions */}
                <Route path="/addbus" element={<AddBus/>}/>

                 
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
