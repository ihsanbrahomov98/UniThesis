import React from "react";
import "./header.css";
import { Building } from "react-bootstrap-icons";
import kuche from "../../../../assets/Images/kuche.png";
const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-around align-items-center NavbarHeader">
        <div className="d-flex col-3 justify-content-around ">
          <span className="d-flex">
            <span className="pe-2"><Building/></span>
            <span>kompleks </span>
          </span>
          <span className="d-flex">
            <span className="pe-2"><Building/></span>
            <span>kompleks </span>
          </span>  
          <span className="d-flex">
            <span className="pe-2"><Building/></span>
            <span>kompleks </span>
          </span>
         </div>
         <div className="d-flex col-1 justify-content-around">
          <span>
  
                <img
                  className="NavbarBodyImage"
                  style={{ width: "5.5rem", height: "4rem" }}
                  alt="logo"
                  src={kuche}
                />
    
          </span>

         </div>   <div className="d-flex col-3 justify-content-around">
          <span>Telefonen nomer</span>
          <span>facebook</span>
      
         </div>
        {/* TODO */}
      </div>
    </>
  );
};

export default Header;
