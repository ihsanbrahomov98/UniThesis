import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearchParams } from "../../../redux/SearchSlice/SearchSlice";
import { setSitters } from "../../../redux/SitterSlice/SitterSlice";
import { TRAINING } from "../../../Enums/OfferedServicesEnum/OfferedServicesEnum";
import dogTraining from "../../../assets/Images/dogTraining.png";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataRedux = useSelector((state) => state.user);
  const checkIfUserExist = () => {
    console.log(userDataRedux.email);
    console.log(userDataRedux.username);
    dispatch(
      addSearchParams({
        offeredServices: TRAINING,
        selectedIcon: dogTraining,
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
          className="DogTrainingSittingImage"
          src="https://www.hartz.com/wp-content/uploads/2021/10/Dog-Training-Basics-2.jpg"
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogTrainingInformationContainer">
          <div className="fw-bolder fs-2">Намери подходящия</div>
          <div className="fw-bolder fs-2">трениъор за теб</div>
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
