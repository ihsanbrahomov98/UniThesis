import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AUTH_ADMIN,
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
  let navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [validationState, setValidationState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const loginUser = () => {
    const login = async () => {
      await axios
        .post(BACK_END_BASE_URL + AUTH_ADMIN + LOGIN, {
          password: formState.password,

          email: formState.email,
        })
        .then((response) => {
          console.log(response.data);
          dispatch(setUser(response.data));
          if (response.data.email) {
            navigate("/");
          }
        })
        .catch((error) => {
          if (error) {
            alert("Грешно потребителско име или парола");
          }
        });
    };
    login();
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formState;
    const errors = {};

    if (!email || email.length < 3) {
      errors.email = "Email is required and must be longer than 4 characters";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password || password.length < 3) {
      errors.password =
        "Password is required and must be longer than 4 characters";
    }

    setValidationState(errors);
    if (Object.keys(errors).length === 0) {
      loginUser();
    }
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

        <form onSubmit={handleSubmit} className="w-100">
          <input
            type="text"
            className={`form-control mb-2 ${
              validationState.email ? "is-invalid" : ""
            }`}
            placeholder="Емайл"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className={`form-control ${
              validationState.password ? "is-invalid" : ""
            }`}
            placeholder="Парола"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="loginBodyButton  d-flex w-100 py-2 px-4 mt-4 fw-bold justify-content-center align-items-center"
          >
            Влез
          </button>
        </form>
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
