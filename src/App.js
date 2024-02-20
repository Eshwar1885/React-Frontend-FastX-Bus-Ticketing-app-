import logo from './logo.svg';
import './App.css';
// import Login from './Components/Login/Login';
import Register from './Components/RegisterUser/Register';
import RegisterBusOperator from './Components/RegisterBusOperator/RegisterBusOperator';
import RegisterAdmin from './Components/RegisterAdmin/RegisterAdmin';

function App() {
  return (
    <div className="App">
            {/* <Login/> */}
            {/* <Register/> */}
            {/* <RegisterBusOperator/> */}
            <RegisterAdmin/>
    </div>
  );
}

export default App;
