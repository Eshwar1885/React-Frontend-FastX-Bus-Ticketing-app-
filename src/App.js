import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/RegisterUser/Register';
import RegisterBusOperator from './Components/RegisterBusOperator/RegisterBusOperator';
import RegisterAdmin from './Components/RegisterAdmin/RegisterAdmin';
import Carousel from './Components/Caraousel/Caraousel';
import FromAndTo from './Components/FromAndTo/FromAndTo';
import Bus from './Components/Bus/Bus';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



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
              <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<FromAndTo/>} />
                {/* <Route path="/bus-list/:Origin/:Destination/:TravelDate" element={<Bus/>} /> */}
                {/* <Route path="/buslist/:origin/:destination/:date" component={Bus} /> */}

                <Route path="/bus-list" element={<Bus />} />
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
