import "./Footer.css";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
function Footer() {


  return (
    <div className="footer">
      <div className="footer-column">
        <div className="icon-footer"><FaCreditCard /></div>
          <h3>We Accept</h3>
          <div className="cards">
          <RiVisaLine />
            <RiMastercardLine />
            </div>
      
         
          </div>

          <div className="footer-column">
          <div className="icon-footer"><FaPhone /></div>
          <h3>Have Questions?</h3>
          <ul>
           <div>Call us on +44770657326</div>
          
          </ul>
          </div>

          <div className="footer-column">
          <div className="icon-footer"><FaLocationDot /></div>
          <h3>Our Locations</h3>
          <div>London</div>
          </div>

          <div className="footer-column">
          <div className="icon-footer"><BsCalendar2DateFill /></div>
          <h3>Business Hours</h3>
          <div>Mon: 10am – 7pm</div>
          <div>Tue: 10am – 7pm</div>
          <div>Wed: 10am – 7pm</div>
          <div>Thu: 10am – 7pm</div>
          <div>Fri: 10am – 7pm</div>
          <div>Sat: 10am – 8pm</div>
          <div>Sun: 10am – 7pm</div>
          </div>
  
    </div>
    
  );
}

export default Footer;
