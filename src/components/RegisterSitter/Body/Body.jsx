import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [formState, setFormState] = useState({
    name: "",
    surName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    description: "",
    telephone: "",
    city: "",
    address: "",
    housing: "",
    price: "",
  });
  const [validationState, setValidationState] = useState({
    name: "",
    surName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    description: "",
    telephone: "",
    city: "",
    address: "",
    housing: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      surName,
      confirmPassword,
      image,
      description,
      telephone,
      price,
      address,
      housing,
      city,
    } = formState;
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    // Update validation state
    setValidationState(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Submit the form
    }
  };
  return (
    <>
      <div className="RegisterSitterBody d-flex flex-column">
        <div className="fw-bold fs-5 d-flex justify-content-center align-items-center mt-3">
          Стани куче гледач
        </div>
        <div
          style={{ textAlign: "center" }}
          className="mt-1  w-100 d-flex justify-content-center align-items-center"
        >
          <div className="w-75">
            Моля попълнете всички полета, ако въпроси винаги може да се свържете
            с нас 0893234212
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
            <div className="col-6">
              {" "}
              <div className=" d-flex justify-content-start align-items-center flex-column p-4">
                <div className="mb-1">
                  <input
                    type="text"
                    className={`form-control ${
                      validationState.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <input
                    type="email"
                    className={`form-control ${
                      validationState.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1">
                  <input
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
              </div>
            </div>
            <div className="col-6">
              {" "}
              <div className="d-flex justify-content-start align-items-center flex-column p-4">
                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder="Потребителско име"
                  aria-label="Потребителс"
                />
                <input
                  type="password"
                  className="form-control mb-1"
                  placeholder="Парола"
                  aria-label="Парола"
                />
                <input
                  type="password"
                  className="form-control mb-1"
                  placeholder="Потвърди парола"
                  aria-label="Потвърди парола"
                />{" "}
                <input
                  type="email"
                  className="form-control mb-1"
                  placeholder="Емайл"
                  aria-label="Емайл"
                />{" "}
                <input
                  type="text"
                  className="form-control mb-1"
                  placeholder="Телефон"
                  aria-label="Телефон"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Телефон"
                  aria-label="Телефон"
                />
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button
              type="submit"
              className="RegisterSitterBodyButton d-flex  w-75 py-3  fw-bold justify-content-center align-items-center"
            >
              Регистрирай се
            </button>
          </div>
        </form>
        <div
          style={{ textAlign: "center" }}
          className="mt-1 d-flex flex-column"
        >
          <div className="">Имате профил?</div>
          <Link className="RegisterSitterTextDecorationNone" to={"/login"}>
            <div className="fw-bold mt-1 RegisterSitterTextDecorationNone">
              Може да влезте от тук
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Body;
