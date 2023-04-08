import React from "react";
import "./body.css";
import { Link } from "react-router-dom";

const Body = () => {
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
          type="text"
          className="form-control mb-3 mt-2"
          placeholder="Потребителско име или телефон"
          aria-label="Потребителско име или телефон"
        />
        <input
          type="password"
          className="form-control"
          placeholder="Парола"
          aria-label="Парола"
        />

        <div className="loginBodyButton  d-flex w-100 py-2 mt-4 fw-bold justify-content-center align-items-center">
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
