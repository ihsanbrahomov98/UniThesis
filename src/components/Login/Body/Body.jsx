import React from "react";
import "./body.css";

const Body = () => {
  return (
    <>
      <div className="loginBody d-flex justify-content-start align-items-center flex-column p-4">
        <div className="fw-bold fs-5">title</div>
        <div
          style={{ textAlign: "center" }}
          className="mt-1 mb-4 d-flex justify-content-center align-items-center"
        >
          hey enter your name here plase i ettitletitletitletitletitlec
        </div>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          aria-label="Username"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
        />

        <div className="loginBodyButton d-flex w-100 py-2 mt-4 fw-bold justify-content-center align-items-center">
          Влез
        </div>
        <div
          style={{ textAlign: "center" }}
          className="mt-3 d-flex flex-column"
        >
          <div className="">Нямате профил?</div>
          <div className="fw-bold mt-1">Регистрайте се тук</div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Body;
