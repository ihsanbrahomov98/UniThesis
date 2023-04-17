import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACK_END_BASE_URL } from "../../../utils/Utils";

const SitterWriteReview = () => {
  const [validationState, setValidationState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });
  const [formStateUpdate, setFormStateUpdate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });

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
        "Telephone is required and must be longer than 4 characters";
    }

    console.log(errors);
    setValidationState(errors);

    if (Object.keys(errors).length === 0) {
      const create = async () => {
        await axios
          .post(BACK_END_BASE_URL + USERS_URL + `/create`, {
            password: formState.password,
            username: formState.username,
            email: formState.email,
            telephone: formState.telephone,
          })
          .then((response) => {
            if (response.data.email) {
              fetchItems();
              alert("Създаден потребител");
            }
          })
          .catch((error) => {
            if (error) {
              alert("Грешни данни");
            }
          });
      };
      create();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center ">
        <div className="w-75 bg-primary ">
          <form onSubmit={(event) => handleSubmit(event, e)}>
            {" "}
            <div className=" d-flex justify-content-start align-items-center flex-column p-4">
              <div className="mb-1 w-100">
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
            </div>
            <div className="d-flex justify-content-center">
              <div className="w-100 d-flex justify-content-center">
                <button
                  type="submit"
                  className="RegisterSitterBodyButton d-flex  mt-3 w-75 py-2  fw-bold justify-content-center align-items-center"
                >
                  Промени
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SitterWriteReview;
