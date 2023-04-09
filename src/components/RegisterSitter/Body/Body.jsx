import React, { useState } from "react";
import "./body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate form data
    let errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    // set errors or submit form
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});
    } else {
      setErrors(errors);
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
        <div className="d-flex flex-row">
          <div className="col-6">
            {" "}
            <div className=" d-flex justify-content-start align-items-center flex-column p-4">
              <form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`form-control ${
                      errors.confirmPassword ? "is-invalid" : ""
                    }`}
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
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
          <div className="RegisterSitterBodyButton d-flex  w-75 py-3  fw-bold justify-content-center align-items-center">
            Регистрирай се
          </div>
        </div>
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
