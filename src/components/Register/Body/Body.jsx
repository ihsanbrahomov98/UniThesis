import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  AUTH_USER,
  BACK_END_BASE_URL,
  USER_REGISTER,
} from "../../../utils/Utils";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    username: "",
    email: "",
    telephone: "",
    confirmPassword: "",
  });
  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };

  const registerUser = () => {
    console.log(data);
    const register = async () => {
      console.log();
      await axios
        .post(BACK_END_BASE_URL + AUTH_USER + USER_REGISTER, {
          password: data.password,
          username: data.username,
          email: data.email,
          telephone: data.telephone,
        })
        .then((response) => {
          if (response.data === "User registered successfully!") {
            navigate("/");
          }
        });
    };
    register();
  };

  return (
    <>
      <div className="RegisterBody d-flex justify-content-start align-items-center flex-column p-4">
        <div className="fw-bold fs-5">title</div>
        <div
          style={{ textAlign: "center" }}
          className="mt-1 mb-3 d-flex justify-content-center align-items-center"
        >
          hey enter your name here plase i ettitletitletitletitletitlec
        </div>
        <input
          onChange={(e) => validate(e.target.value, "username")}
          type="text"
          className="form-control mb-2"
          placeholder="Потребителско име"
          aria-label="Потребителс"
        />
        <input
          onChange={(e) => validate(e.target.value, "password")}
          type="password"
          className="form-control mb-2"
          placeholder="Парола"
          aria-label="Парола"
        />
        <input
          onChange={(e) => validate(e.target.value, "confirmPassword")}
          type="password"
          className="form-control mb-2"
          placeholder="Потвърди парола"
          aria-label="Потвърди парола"
        />{" "}
        <input
          onChange={(e) => validate(e.target.value, "email")}
          type="email"
          className="form-control mb-2"
          placeholder="Емайл"
          aria-label="Емайл"
        />{" "}
        <input
          onChange={(e) => validate(e.target.value, "telephone")}
          type="text"
          className="form-control mb-2"
          placeholder="Телефон"
          aria-label="Телефон"
        />
        <div
          onClick={() => registerUser()}
          className="RegisterBodyButton d-flex w-100 py-2 mt-2 fw-bold justify-content-center align-items-center"
        >
          Регистрирай се
        </div>
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
