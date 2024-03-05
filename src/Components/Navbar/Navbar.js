import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook
import './Navbar.css';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('token')); // Initialize login state based on token presence

    const handleLogout = () => {
        // Handle logout logic here
        sessionStorage.removeItem('token');
        setIsLoggedIn(false); // Update login state
        // Redirect user to login page or any other desired page
    };

    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/* <a className="navbar-brand" href="">FastX</a> */}
                    <li className="navbar-brand">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item booking-history">
                            <Link to="/bookinghistory" className="nav-link">Booking History</Link>
                        </li>
                        <li className="nav-item">
                            {isLoggedIn ? (
                                <button className="nav-link active logout-btn" onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link className="nav-link active" to="/login">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;