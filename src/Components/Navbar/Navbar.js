import './Navbar.css';
function Navbar(){

    return(
       <div>
         <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Logo</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="bookinghistory.html">Booking History</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="userprofile.html">Profile</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="login.html">Login/Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
       </div>
    );
}

export default Navbar;