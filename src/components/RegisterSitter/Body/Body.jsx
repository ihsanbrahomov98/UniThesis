import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";
import { ChevronDown } from "react-bootstrap-icons";
import { CityArray } from "../../../Enums/CityEnum/CityEnum";

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
    console.log(name);
    console.log(value);
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = (dataInfo, dataType) => {
    console.log(formState);
    setFormState((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
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
                <div className="mb-1 w-100">
                  <input
                    type="text"
                    className={`form-control ${
                      validationState.name ? "is-invalid" : ""
                    }`}
                    placeholder="Име"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1 w-100">
                  <input
                    placeholder="Фамилия"
                    type="text"
                    className={`form-control ${
                      validationState.surName ? "is-invalid" : ""
                    }`}
                    id="surName"
                    name="surName"
                    value={formState.surName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1 w-100">
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
                <div className="mb-1 w-100">
                  <input
                    type="email"
                    className={`form-control ${
                      validationState.email ? "is-invalid" : ""
                    }`}
                    placeholder="Емайл"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1 w-100">
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
                <div className="mb-1 w-100">
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
            </div>
            <div className="col-6">
              {" "}
              <div className="d-flex justify-content-start align-items-center flex-column p-4">
                <div className="mb-1 w-100">
                  <input
                    type="text"
                    className={`form-control ${
                      validationState.name ? "is-invalid" : ""
                    }`}
                    placeholder="Име"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1 w-100">
                  <input
                    type="text"
                    className={`form-control ${
                      validationState.name ? "is-invalid" : ""
                    }`}
                    placeholder="Име"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex flex-row dropdown mt-1 w-100 ">
                  <button
                    type="button"
                    className="d-flex justify-content-between btn border w-100 "
                    data-bs-toggle="dropdown"
                    value={formState.city}
                  >
                    {formState.city}
                    <div className="d-flex flew-row"></div>
                    <div className="">
                      <ChevronDown />
                    </div>
                  </button>

                  <ul className="dropdown-menu CardFilterItemWidth">
                    <li
                      className="dropdown-item w-100 d-flex CardFilterItemCursor"
                      onClick={() => handleClick(CityArray.SOFIA, "city")}
                    >
                      {CityArray.SOFIA}
                    </li>
                    <li
                      className="dropdown-item w-100 d-flex CardFilterItemCursor"
                      onClick={() => handleClick(CityArray.PLOVDIV, "city")}
                    >
                      {CityArray.PLOVDIV}
                    </li>
                    <li
                      className="dropdown-item w-100 d-flex CardFilterItemCursor"
                      onClick={() => handleClick(CityArray.BURGAS, "city")}
                    >
                      {CityArray.BURGAS}
                    </li>

                    <li
                      className="dropdown-item w-100 d-flex CardFilterItemCursor"
                      onClick={() => handleClick(CityArray.VARNA, "city")}
                    >
                      {CityArray.VARNA}
                    </li>
                    <li
                      className="dropdown-item w-100 d-flex CardFilterItemCursor"
                      onClick={() => handleClick(CityArray.SMOLYAN, "city")}
                    >
                      {CityArray.SMOLYAN}
                    </li>
                  </ul>
                </div>
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
