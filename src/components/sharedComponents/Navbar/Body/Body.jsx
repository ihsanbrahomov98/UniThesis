import React, { useEffect, useState } from "react";
import Item from "./item/Item";
import { ChevronDown } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Person } from "react-bootstrap-icons";
import { Telephone } from "react-bootstrap-icons";
import "./body.css";
import ButtonDropDown from "./../NavbarDropDownMenu/ButtonDropDown/ButtonDropDown";
import { Link } from "react-router-dom";
import kuche from "../../../../assets/Images/kuche.png";
import dogTraining from "../../../../assets/Images/dogTraining.png";

import { useSelector, useDispatch } from "react-redux";
const Body = () => {
  const userDataRedux = useSelector((state) => state.user);
  const [hoveredNavBarItem, sethoveredNavBarItemNavBarItem] = useState("");
  const [hoveredAccount, setHoveredAccount] = useState("");
  const [user, setUser] = useState({ username: "няма2" });
  const handleMouseOverForNavbarItem = () => {
    sethoveredNavBarItemNavBarItem(true);
  };

  const handleMouseOutForNavbarItem = () => {
    sethoveredNavBarItemNavBarItem(false);
  };
  const handleMouseOverForAccount = () => {
    setHoveredAccount(true);
  };

  const handleMouseOutForAccount = () => {
    setHoveredAccount(false);
  };
  useEffect(() => {
    if (userDataRedux && userDataRedux.role === "USER") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
    if (userDataRedux && userDataRedux.role === "SITTER") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
    if (userDataRedux && userDataRedux.role === "ADMIN") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
  }, [userDataRedux]);
  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center BodyHeader">
          <span className="pe-4 ps-4">kompleks </span>
          <span className="pe-4 ps-4">kompleks </span>
          <span className="pe-4 ps-4">kompleks </span>
          <span className="pe-4 ps-4">kompleks </span>
          <span className="pe-4 ps-4">kompleks </span>
          <span className="pe-4 ps-4">kompleks </span>
          {/* TODO */}
        </div>
      </div>
    </>
  );
};
export default Body;
// <div className="d-flex justify-content-center ">
//           <div className="container p-2 col-4 d-flex flex-row justify-content-start NavbarBodyAliceblue ">
//             <div className="mx-5 d-flex flex-row align-items-center">
//               <div className="mx-1 mb-2 mt-2 pb-2 pt-2">
//                 {" "}
//                 <Item text={"Предлагани услуги"} icon={"nqma"} />{" "}
//               </div>
//               <div className="mx-1 mb-2 mt-2 pb-2 pt-2">
//                 <ChevronDown />
//               </div>
//             </div>
//           </div>
//           <div className="container col-4 d-flex  flex-row align-items-center justify-content-center NavbarBodyAliceblue">

//           </div>
//           <div className="container col-4 d-flex flex-row justify-content-around align-items-center NavbarBodyAliceblue">
//             <div className="d-flex flex-row justify-content-center align-items-center">
//               <div className="mx-1">
//                 {" "}
//                 <Telephone />{" "}
//               </div>
//               <div className="mb-2 mt-2 pb-2 pt-2">
//                 {" "}
//                 <Item text={"0892521212"} />{" "}
//               </div>
//             </div>

//             <div className="d-flex flex-row justify-content-center align-items-center">
//               <div className="mx-1">
//                 {" "}
//                 <Envelope />{" "}
//               </div>
//               <div className="mb-2 mt-2 pb-2 pt-2">
//                 {" "}
//                 <Item text={"dogwalkers@gmail.com"} />{" "}
//               </div>
//             </div>
//             <div className="d-flex  flex-row justify-content-center align-items-center">
//               <div className="me-5 d-flex align-items-center">
//                 <div className="d-flex  position-relative">
//                   <div className="mx-1">
//                     {" "}
//                     <Person />
//                   </div>
//                   <div className="">
//                     {" "}
//                     <Item
//                       text={
//                         userDataRedux.username && userDataRedux.username
//                           ? userDataRedux.username
//                           : ""
//                       }
//                       icon={"nqma"}
//                     />{" "}
//                   </div>

//                   <div className="mx-1">
//                     <ChevronDown />
//                   </div>
//                 </div>

//                 <div
//                   className={
//                     hoveredAccount
//                       ? "d-flex  position-absolute NavbarBodyPointer "
//                       : "d-none"
//                   }
//                 >
//                   <div className="">
//                     <ButtonDropDown />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className={
//             hoveredNavBarItem
//               ? "d-flex  justify-content-around position-absolute   w-100 mt-5 pt-2 pb-2 border-bottom border-start border-end "
//               : "d-none"
//           }
//         ></div>
