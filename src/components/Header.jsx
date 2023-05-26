import React from "react";
import { useState } from "react";
import "../App.css";
import Logo from "./../components/almabetter.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [mobileClicked, setMobileClicked] = useState(false);
  
  function handleClick() {
    setMobileClicked((value) => !value);
  }
   /*Header part of the template */
  return (
    <div className="header">    
      <div className="Mylogo">
          <img src= {Logo} />
          </div>
      <div className={`Links ${mobileClicked ? "active" : ""}`}>
        <Link className= "link"   to="/"  >
      
          Resume Templates
        </Link>
        <Link className="link"  to="/myresumes">
          My Resumes
        </Link>
        <Link className="link" to="/aboutus">
          About Us
        </Link>
      </div>
      <div id="mobile">
        <i
          onClick={handleClick}
          id="icon"
          className={mobileClicked ? "fa-solid fa-close" : "fa-solid fa-bars"}
        ></i>
      </div>
    </div>
  );
};
  /*Template Heading part end  */
export default Header;
