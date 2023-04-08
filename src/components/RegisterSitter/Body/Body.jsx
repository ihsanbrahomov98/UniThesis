import React from "react";
import "./body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="RegisterSitterBody d-flex">
        <div className="col-6">
          {" "}
          <div className=" d-flex justify-content-start align-items-center flex-column p-4">
            <div className="fw-bold fs-5">title</div>
            <div
              style={{ textAlign: "center" }}
              className="mt-1 mb-3 d-flex justify-content-center align-items-center"
            >
              2hey enter your name here plase i ettitletitletitletitletitlec
            </div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Потребителско име"
              aria-label="Потребителс"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Парола"
              aria-label="Парола"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Потвърди парола"
              aria-label="Потвърди парола"
            />{" "}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Емайл"
              aria-label="Емайл"
            />{" "}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Телефон"
              aria-label="Телефон"
            />
            <div className="RegisterSitterBodyButton d-flex w-100 py-2 mt-2 fw-bold justify-content-center align-items-center">
              Регистрирай се
            </div>
            <div
              style={{ textAlign: "center" }}
              className="mt-3 d-flex flex-column"
            >
              <div className="">Имате профил?</div>
              <Link className="RegisterSitterTextDecorationNone" to={"/login"}>
                <div className="fw-bold mt-1 RegisterSitterTextDecorationNone">
                  Може да влезте от тук
                </div>
              </Link>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="col-6">
          {" "}
          <div className="d-flex justify-content-start align-items-center flex-column p-4">
            <div className="fw-bold fs-5">title</div>
            <div
              style={{ textAlign: "center" }}
              className="mt-1 mb-3 d-flex justify-content-center align-items-center"
            >
              3hey enter your name here plase i ettitletitletitletitletitlec
            </div>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Потребителско име"
              aria-label="Потребителс"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Парола"
              aria-label="Парола"
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Потвърди парола"
              aria-label="Потвърди парола"
            />{" "}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Емайл"
              aria-label="Емайл"
            />{" "}
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Телефон"
              aria-label="Телефон"
            />
            <div className="RegisterSitterBodyButton d-flex w-100 py-2 mt-2 fw-bold justify-content-center align-items-center">
              Регистрирай се
            </div>
            <div
              style={{ textAlign: "center" }}
              className="mt-3 d-flex flex-column"
            >
              <div className="">Имате профил?</div>
              <Link className="RegisterSitterTextDecorationNone" to={"/login"}>
                <div className="fw-bold mt-1 RegisterSitterTextDecorationNone">
                  Може да влезте от тук
                </div>
              </Link>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
