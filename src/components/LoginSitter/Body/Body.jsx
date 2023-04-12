import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AUTH_SITTER,
  AUTH_USER,
  BACK_END_BASE_URL,
  LOGIN,
  USER_LOGIN,
  USER_REGISTER,
} from "../../../utils/Utils";
import { setUser } from "../../../redux/UserSlice/UserSlice";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const searchDataRedux = useSelector((state) => state.user);
  let navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };

  const loginUser = () => {
    console.log(data);
    const login = async () => {
      await axios
        .post(BACK_END_BASE_URL + AUTH_SITTER + LOGIN, {
          password: data.password,

          email: data.email,
        })
        .then((response) => {
          console.log(response.data);
          dispatch(setUser(response.data));
          if (response.data.email) {
            navigate("/");
          }
        });
    };
    login();
  };

  return (
    <>
      <div className="loginBody d-flex justify-content-start align-items-center flex-column p-4">
        <div className="fw-bold fs-5 mt-2">Логин</div>
        <div
          style={{ textAlign: "center" }}
          className="mt-1 mb-4 mt-2 d-flex justify-content-center align-items-center loginTextFs"
        >
          Моля въдете вашето потребителско име или телефонен номер и парола
        </div>

        <input
          onChange={(e) => validate(e.target.value, "email")}
          type="email"
          className="form-control mb-3 mt-2"
          placeholder="Емайл"
          aria-label="Емайл"
        />
        <input
          onChange={(e) => validate(e.target.value, "password")}
          type="password"
          className="form-control"
          placeholder="Парола"
          aria-label="Парола"
        />

        <div
          onClick={() => loginUser()}
          className="loginBodyButton  d-flex w-100 py-2 mt-4 fw-bold justify-content-center align-items-center"
        >
          Влез
        </div>
        <div
          style={{ textAlign: "center" }}
          className="mt-3 d-flex flex-column"
        >
          <div className="">Нямате профил?</div>

          <Link className="loginTextDecorationNone" to={"/register"}>
            <div className="loginTextDecorationNone d-flex w-100 py-2 fw-bold justify-content-center align-items-center">
              Регистрирай се
            </div>
          </Link>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Body;
