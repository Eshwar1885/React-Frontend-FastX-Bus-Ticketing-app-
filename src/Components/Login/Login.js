import { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Navbar/Navbar';

function Login(){
var [username, setUsername] = useState("");
var [password, setPassword] = useState("");
var [loggedin, setLoggedin] = useState(false);
const navigate = useNavigate(); // Initialize useNavigate


var user = {};

var login = (e) => {
    e.preventDefault();
    user.username = username;
    user.password = password;

    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify(user) // Use 'data' instead of 'body' for Axios
    };

    axios.post("http://localhost:5263/api/AllUser/Login", requestOptions.data, requestOptions) // Use axios.post instead of fetch
        .then(res => {
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("username", res.data.username);
            sessionStorage.setItem("userId",res.data.userId);
            alert("Login success - " + res.data.username);
            setLoggedin(true);
            console.log({loggedin});


            // Redirect to details page
            navigate("/details");


            console.log(res.data);
            
        })
        .catch(err => {
            console.log(err);
            setLoggedin(false);
        });
};

    return(

        <div className="container">
                        {/* <Navbar loggedin={loggedin} /> */}
            <section className="myform-area">
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="form-area login-form">
                                <div className="form-content">
                                    <h2>Login</h2>
                                    <p>You choose the right option</p>
                                </div>
                                <div className="form-input">
                                    <h2>Enter Credentials</h2>
                                    <form >
                                        <div className="form-group">
                                            <input className="loginInfo" type="text" name="name" autoComplete="off" value={username} 
            onChange={(e)=>setUsername(e.target.value)} required />
                                            <label>Username</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="loginInfo" type="password" name="password" autoComplete="off" value={password} 
            onChange={(e)=>setPassword(e.target.value)} required />
                                            <label>Password</label>
                                        </div>
                                        <div className="myform-button">
                                            {/* <Link to="/details"> */}
                                            <button onClick={login} type="submit" className="myform-btn">Login</button >
                                            {/* </Link> */}
                                        </div>
                                        <div>
                                            <small className="form-text text-muted signup-text">Don't have an Account?
                                            </small>
                                            {/* <span className="signUPtext"><a href="/#" onClick={(e) => getToSignUp(e)}>Sign-Up</a></span> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >


    );
}
export default Login;
