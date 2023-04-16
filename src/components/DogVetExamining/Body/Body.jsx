import React from "react";
import Button from "../../CardFilter/Button/Button";
import "./body.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addSearchParams } from "../../../redux/SearchSlice/SearchSlice";
import { setSitters } from "../../../redux/SitterSlice/SitterSlice";
import { VET_VISITING } from "../../../Enums/OfferedServicesEnum/OfferedServicesEnum";
const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDataRedux = useSelector((state) => state.user);
  const checkIfUserExist = () => {
    console.log(userDataRedux.email);
    console.log(userDataRedux.username);
    dispatch(
      addSearchParams({
        offeredServices: VET_VISITING,
        selectedIcon: "https://cdn-icons-png.flaticon.com/512/2295/2295137.png",
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
          className="DogVetExaminingSittingImage"
          src="https://www.gannett-cdn.com/media/2022/06/08/USATODAY/usatsports/veterinarian-treating-a-dog.jpg"
          alt="Snow"
          style={{ width: "100%", height: "85vh" }}
        />

        <div className="d-flex flex-column align DogVetExaminingInformationContainer">
          <div className="fw-bolder fs-2">Намери подходящия</div>
          <div className="fw-bolder fs-2">ветеринар за теб</div>
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
