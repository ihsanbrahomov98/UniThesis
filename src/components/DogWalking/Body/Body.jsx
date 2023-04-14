import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";
import dogWalking from "../../../assets/Images/dogWalking.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearchParams } from "../../../redux/SearchSlice/SearchSlice";
import { setSitters } from "../../../redux/SitterSlice/SitterSlice";
import { WALKING } from "../../../Enums/OfferedServicesEnum/OfferedServicesEnum";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataRedux = useSelector((state) => state.user);
  const checkIfUserExist = () => {
    console.log(userDataRedux.email);
    console.log(userDataRedux.username);
    dispatch(
      addSearchParams({
        offeredServices: WALKING,
        selectedIcon:
          "data:image/png;base64,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",
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
      <div className="border bg-black">
        <img
          className="DogWalkingImage"
          src={dogWalking}
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
