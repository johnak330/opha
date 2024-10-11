import "./Navbar.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#">Opha</a>
  <button className="nav-btn" type="button" >
    <span >Book Now</span>
  </button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Treatments</a>
      <a className="nav-item nav-link" href="#">Contact</a>
      <a className="nav-item nav-link" href="#">Shop</a>
      <a className="nav-item nav-link" href={''}><FaInstagram /></a>
      <a className="nav-item nav-link" href={''}><FaWhatsapp /></a>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
