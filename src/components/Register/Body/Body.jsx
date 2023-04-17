import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AUTH_USER,
  BACK_END_BASE_URL,
  USER_REGISTER,
} from "../../../utils/Utils";
import { setUser } from "../../../redux/UserSlice/UserSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    password: "",
    username: "",
    email: "",
    telephone: "",
    confirmPassword: "",
  });
  const [validationState, setValidationState] = useState({
    password: "",
    username: "",
    email: "",
    telephone: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword, telephone } = formState;
    const errors = {};

    if (!username || username.length < 4) {
      errors.username = "Name is required and must be longer than 4 characters";
    }
    if (!email || email.length < 4) {
      errors.email = "Email is required and must be longer than 4 characters";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password || password.length < 4) {
      errors.password =
        "Password is required and must be longer than 4 characters";
    }
    if (password !== confirmPassword) {
      errors.password = "Passwords doesn't match";
      errors.confirmPassword = "Passwords doesn't match";
    }

    if (!telephone || telephone.length < 4) {
      errors.telephone =
        "telephone is required and must be longer than 4 characters";
    }
    console.log(errors);
    // Update validation state
    setValidationState(errors);

    console.log(errors);
    if (Object.keys(errors).length === 0) {
      const register = async () => {
        console.log();
        await axios
          .post(BACK_END_BASE_URL + AUTH_USER + USER_REGISTER, {
            password: formState.password,
            username: formState.username,
            email: formState.email,
            telephone: formState.telephone,
          })
          .then((response) => {
            if (response.data.username) {
              dispatch(setUser(response.data));
              navigate("/");
            }
          })
          .catch((error) => {
            if (error) {
              alert("Грешни данни");
            }
          });
      };
      register();
    }
  };

  return (
    <>
      <div className="RegisterBody d-flex justify-content-start align-items-center flex-column p-4">
        <div className="fw-bold fs-5">title</div>
        <div
          style={{ textAlign: "center" }}
          className="mt-1 mb-3  d-flex justify-content-center align-items-center"
        >
          hey enter your name here plase i ettitletitletitletitletitlec
        </div>
        <form onSubmit={handleSubmit} className="w-100">
          {" "}
          <div className=" d-flex justify-content-start align-items-center w-100  flex-column ">
            <div className="mb-1 mt-1 w-100">
              <input
                type="text"
                className={`form-control ${
                  validationState.username ? "is-invalid" : ""
                }`}
                placeholder="Потребителско име"
                id="username"
                name="username"
                value={formState.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 mt-1 w-100">
              <input
                placeholder="Емайл"
                type="text"
                className={`form-control ${
                  validationState.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 mt-1 w-100">
              <input
                placeholder="Телефонен номер"
                type="text"
                className={`form-control ${
                  validationState.telephone ? "is-invalid" : ""
                }`}
                id="telephone"
                name="telephone"
                value={formState.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 mt-1 w-100">
              <input
                placeholder="Парола"
                type="password"
                className={`form-control ${
                  validationState.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-1 mt-1 w-100">
              <input
                placeholder="Потвърди паролата"
                type="password"
                className={`form-control ${
                  validationState.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-100  d-flex justify-content-center">
            <button
              type="submit"
              className="RegisterSitterBodyButton d-flex  mt-3 w-100 py-2  fw-bold justify-content-center align-items-center"
            >
              Регистрирай се
            </button>
          </div>
        </form>
        <div
          style={{ textAlign: "center" }}
          className="mt-3 d-flex flex-column"
        >
          <div className="">Имате профил?</div>
          <Link className="RegisterTextDecorationNone" to={"/login"}>
            <div className="fw-bold mt-1 RegisterTextDecorationNone">
              Може да влезте от тук
            </div>
          </Link>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Body;
