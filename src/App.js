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
              {/* <Route path="/register" element={<Register />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/new" element={<New/>} />
                <Route path="/details" element={<BookingDetails />} />
                <Route path="/" element={<FromAndTo/>} />
                {/* <Route element={<PrivateRoute/>}>
                  <Route path="/new-page" element={<New/>} />
                </Route> */}
                

                <Route path="/bus-list" element={<Bus />} />
                 {/* <Route path="/seating" element={<SeatingArrangement/>}/> */}
                <Route path="/seating/:busId" element={<SeatingArrangement />} />
                <Route path="/details" element={<BookingDetails />} />

                 
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
