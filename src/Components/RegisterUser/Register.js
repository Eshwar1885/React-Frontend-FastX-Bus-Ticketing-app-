import { useState } from "react";
import axios from 'axios'; // Import Axios
import './Register.css';

function Register() {
    var [username, setUsername] = useState("");
    var [password, setPassword] = useState("");
    var [role] = useState("user");
    var [name, setName] = useState("");
    var [contactNumber, setContactNumber] = useState("");
    var [gender, setGender] = useState("");
    var [address, setAddress] = useState("");

    var user = {};

    var register = (e) => {
        e.preventDefault();
        user.Username = username;
        user.Password = password;
        user.Role = role;
        user.Name = name;
        user.ContactNumber = contactNumber;
        user.Gender = gender;
        user.Address = address;

        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(user)
        };
        console.log(requestOptions)

        axios.post("http://localhost:5263/api/AllUser/Register", requestOptions.data, requestOptions)
    .then(res => {
        // Handle successful registration
        console.log("Registration successful"); // For debugging
        // Implement logic for successful registration, e.g., redirecting to login page
    })
    .catch(err => {
        // Handle registration failure
        console.error("Registration failed:", err); // For debugging
        // Implement logic for handling registration failure, e.g., displaying error message
    });
            
    };
    return (
        <div className="container">
            <section className="myform-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="form-area register-form">
                                <div className="form-content">
                                    <h2>Register</h2>
                                    {/* Additional content for registration page */}
                                </div>
                                <div className="form-input">
                                    <h2>Enter Details</h2>
                                    <form>
                                        <div className="form-group">
                                            <input className="registerInfo" type="text" name="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            <label>Username</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="password" name="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}  required />
                                            <label>Password</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="text" name="role" autoComplete="off" value={role} required />
                                            <label>Role</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="text" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} required />
                                            <label>Name</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="phone" name="contactNumber" autoComplete="off" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}  required/>
                                            <label>Contact Number</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="text" name="gender" autoComplete="off" value={gender} onChange={(e) => setGender(e.target.value)} required />
                                            <label>Gender</label>
                                        </div>
                                        <div className="form-group">
                                            <input className="registerInfo" type="text" name="address" autoComplete="off" value={address} onChange={(e) => setAddress(e.target.value)} required />
                                            <label>Address</label>
                                        </div>
                                        <div className="myform-button">
                                            <button onClick={register} type="submit" className="myform-btn">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Register;
