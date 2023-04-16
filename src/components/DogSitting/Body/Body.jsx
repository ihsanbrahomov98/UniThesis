import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearchParams } from "../../../redux/SearchSlice/SearchSlice";
import { SITTING_AT_YOUR_HOME } from "../../../Enums/OfferedServicesEnum/OfferedServicesEnum";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataRedux = useSelector((state) => state.user);
  const checkIfUserExist = () => {
    console.log(userDataRedux.email);
    console.log(userDataRedux.username);
    dispatch(
      addSearchParams({
        offeredServices: SITTING_AT_YOUR_HOME,
        selectedIcon:
          "https://cdn.w600.comps.canstockphoto.com/male-sitting-with-domestic-animal-dog-clipart-vector_csp63831651.jpg",
      })
    );
    if (userDataRedux.email || userDataRedux.username) {
      navigate("/");
    } else {
      navigate("/register");
    }
  };
  return (
    <>
      <div className="">
        <img
          className="DogSittingImage"
          src="https://images.prismic.io/trustedhousesitters/5ece3c2ca1540b6c1784b7dacf63c5a63d9d77b8_about-in-home-pet-sitters.jpg?auto=compress,format"
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogWalkingInformationContainer">
          <div className="fw-bolder fs-2">Намери подходящия</div>
          <div className="fw-bolder fs-2">гледач за теб</div>
          <div className="fw-bold fs-5">Професионалисти с много опит!</div>
          <div className="fw-bold fs-5">Без почивни дни!</div>
          <div onClick={() => checkIfUserExist()} className="">
            <Button text={"Търси"} containerDisabled="true" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
