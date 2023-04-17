import React, { useState, useEffect } from "react";
import "./body.css";
import axios from "axios";
import { BACK_END_BASE_URL } from "../../../../utils/Utils";
import { USERS_URL } from "../../../../utils/Utils";
const Body = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
    category: "man",
    color: "",
    size: "",
    amount: "",
    season: "",
    user: 1,
    email: "",
    userId: "",
    adminId: "2",
  });
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });
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
  const [validationStateUpdate, setValidationStateUpdate] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormStateUpdate((prevState) => ({ ...prevState, [name]: value }));
  };

  const fetchItems = async () => {
    console.log("USERS_URL");
    const { data } = await axios.get(BACK_END_BASE_URL + USERS_URL + `/all`);
    setProducts(data);
  };

  const deleteProduct = (e) => {
    const deleteItem = async () => {
      await axios.delete(
        BACK_END_BASE_URL + USERS_URL + `/delete`,
        {
          data: {
            id: e.id,
          },
        },
        {
          headers: {
            Accept: "application/json; charset=utf-8",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      fetchItems();
    };
    deleteItem();
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

  const handleSubmitUpdate = (event, idOfUser) => {
    event.preventDefault();

    const { username, email, password, confirmPassword, telephone } =
      formStateUpdate;
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
    setValidationStateUpdate(errors);

    if (Object.keys(errors).length === 0) {
      const update = async () => {
        axios
          .put(BACK_END_BASE_URL + USERS_URL + `/update`, {
            password: formState.password,
            username: formState.username,
            email: formState.email,
            telephone: formState.telephone,
            id: idOfUser.id,
          })
          .then((response) => {
            if (response.data.email) {
              fetchItems();
              alert("Променен потребител");
            }
          })
          .catch((error) => {
            if (error) {
              alert("Грешни данни");
            }
          });
      };
      update();
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="container border-start border-end border-top">
        <div className="row container pb-3 pt-3 d-flex align-items-center">
          <div className="col-1">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
          </div>
          <div className="col-2 ">ID</div>
          <div className="col-2 ms-1">Потребителско име</div>
          <div className="col-2 ms-1">Телефонен номер</div>
          <div className="col-2 ms-1">Емайл</div>
          <div className="col-1 "></div>
          <div
            type="button"
            className="col-1 adminDashBoardMainBody pt-1 pb-1 ms-5 d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#adminNavbar"
          >
            Създай
          </div>
          <div
            className="modal fade"
            id="adminNavbar"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Създай потребител
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="modal-body">
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
                              validationState.confirmPassword
                                ? "is-invalid"
                                : ""
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
                          className="RegisterSitterBodyButton d-flex  mt-3 w-75 py-2  fw-bold justify-content-center align-items-center"
                        >
                          Създай
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Затвори
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border ">
        <div className="">
          <div className="">
            <div className="">
              {products.map((e) => (
                <div
                  key={e.id}
                  className="row border-bottom pb-3 pt-3 d-flex align-items-center"
                >
                  <div className="col-1">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      ></input>
                    </div>
                  </div>
                  <div className="col-2 ">{e.id}</div>
                  <div className="col-2">
                    <div className="">
                      <div className=" d-flex align-items-center justify-content-start flex-row">
                        <img
                          src={
                            e.img
                              ? e.img
                              : "https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                          }
                          alt="tree"
                          style={{ width: "12%", height: "7%" }}
                        />
                        <span className="ps-3">{e.username} </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-2">{e.telephone}</div>
                  <div className="col-2 ">{e.email}</div>
                  <div className="col-3">
                    <div className=" d-flex align-items- justify-content-start flex-row">
                      <span className="adminDashBoardMainBody ps-2 pe-2 me-3">
                        <div
                          type="button"
                          className="modalCursor p-1 "
                          data-bs-toggle="modal"
                          data-bs-target={`#adminBody${e.id}`}
                        >
                          Виж
                        </div>
                        <div
                          className="modal fade"
                          id={`adminBody${e.id}`}
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered ">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title adminDashBoardMainBodyBlackColorAndWhiteBg"
                                  id="exampleModalLabel"
                                >
                                  Промени
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              {/* Промени */}
                              <div className="modal-body adminDashBoardMainBodyBlackColorAndWhiteBg">
                                <form
                                  onSubmit={(event) =>
                                    handleSubmitUpdate(event, e)
                                  }
                                >
                                  {" "}
                                  <div className=" d-flex justify-content-start align-items-center flex-column p-4">
                                    <div className="mb-1 w-100">
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          validationStateUpdate.username
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        placeholder="Потребителско име"
                                        id="username"
                                        name="username"
                                        value={formStateUpdate.username}
                                        onChange={handleChangeUpdate}
                                      />
                                    </div>

                                    <div className="mb-1 w-100">
                                      <input
                                        placeholder="Телефонен номер"
                                        type="text"
                                        className={`form-control ${
                                          validationStateUpdate.telephone
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        id="telephone"
                                        name="telephone"
                                        value={formStateUpdate.telephone}
                                        onChange={handleChangeUpdate}
                                      />
                                    </div>
                                    <div className="mb-1 w-100">
                                      <input
                                        type="email"
                                        className={`form-control ${
                                          validationStateUpdate.email
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        placeholder="Емайл"
                                        id="email"
                                        name="email"
                                        value={formStateUpdate.email}
                                        onChange={handleChangeUpdate}
                                      />
                                    </div>
                                    <div className="mb-1 w-100">
                                      <input
                                        placeholder="Парола"
                                        type="password"
                                        className={`form-control ${
                                          validationStateUpdate.password
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        id="password"
                                        name="password"
                                        value={formStateUpdate.password}
                                        onChange={handleChangeUpdate}
                                      />
                                    </div>
                                    <div className="mb-1 w-100">
                                      <input
                                        placeholder="Потвърди паролата"
                                        type="password"
                                        className={`form-control ${
                                          validationStateUpdate.confirmPassword
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formStateUpdate.confirmPassword}
                                        onChange={handleChangeUpdate}
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
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Затвори
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span
                        className="adminDashBoardRedButton ps-2 pe-2 d-flex justify-content-center align-items-center "
                        onClick={() => deleteProduct(e)}
                      >
                        Изтрий{" "}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
