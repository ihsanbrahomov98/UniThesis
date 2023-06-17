import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarCheck } from "react-bootstrap-icons";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import bg from "../../../../assets/i18n/bg.json";
import "./body.css";
import { ChevronDown } from "react-bootstrap-icons";
import { CityArray } from "../../../../Enums/CityEnum/CityEnum";
import axios from "axios";
import { BACK_END_BASE_URL } from "../../../../utils/Utils";
import { SITTERS_URL } from "../../../../utils/Utils";
const Body = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    surName: "",
    image: "",
    description: "",
    price: "",
    email: "",
    telephone: "",
    startingDate: "",
    endingDate: "",
    address: "",
  });
  const [toggleCalendar, setToggleCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const fetchItems = async () => {
    const { data } = await axios.get(BACK_END_BASE_URL + SITTERS_URL + `/all`);
    setProducts(data);
    console.log(products);
  };

  const deleteProduct = (e) => {
    const deleteItem = async () => {
      await axios.delete(
        BACK_END_BASE_URL + SITTERS_URL + `/delete`,
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

  const onSubmit = (idOfSitter) => {
    console.log("data.end:", data.endingDate);
    const update = async () => {
      await axios.put(BACK_END_BASE_URL + SITTERS_URL + `/update`, {
        id: idOfSitter,
        name: data.name,
        surName: data.surName,
        image: data.image,
        description: data.description,
        price: data.price,
        email: data.email,
        telephone: data.telephone,
        startingDate: data.startingDate,
        endingDate: data.endingDate,
        address: data.address,
      });

      fetchItems();
    };
    update();
    calculateTakenDates();
    setData({});
  };

  const validate = (dataInfo, dataType) => {
    setFormStateUpdate((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const calculateTakenDates = (takenDates) => {
    let arrayOfTakenDate = [];
    let firstTakenDate;
    let lastTakenDate;

    let endDatCasted;
    let dateCasted;
    let firstIndex = takenDates && takenDates.split("|");
    if (firstIndex) {
      for (let index = 1; index < firstIndex.length; index++) {
        firstTakenDate = firstIndex[index].split(";")[0];
        lastTakenDate = firstIndex[index].split(";")[1];

        dateCasted = new Date(firstTakenDate);
        endDatCasted = new Date(lastTakenDate);
        while (dateCasted <= endDatCasted) {
          console.log("date:", dateCasted);
          arrayOfTakenDate.push(new Date(dateCasted));
          dateCasted.setDate(dateCasted.getDate() + 1);
        }
      }
    }

    return arrayOfTakenDate;
  };

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
  const [formStateUpdate, setFormStateUpdate] = useState({
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
  const [validationStateUpdate, setValidationStateUpdate] = useState({
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
  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setFormStateUpdate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = (dataInfo, dataType) => {
    console.log(formState);
    setFormState((prevState) => ({
      ...prevState,
      [dataType]: dataInfo,
    }));
  };
  const handleClickUpdate = (dataInfo, dataType) => {
    console.log(formState);
    setFormStateUpdate((prevState) => ({
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

    if (!name || name.length < 4) {
      errors.name = "Name is required and must be longer than 4 characters";
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
    if (!surName || name.surName < 4) {
      errors.surName =
        "surName is required and must be longer than 4 characters";
    }
    if (!image) {
      errors.image = "There must be a image";
    }
    if (!description || description.length < 4) {
      errors.description =
        "description is required and must be longer than 4 characters";
    }
    if (!telephone || telephone.length < 4) {
      errors.telephone =
        "telephone is required and must be longer than 4 characters";
    }
    if (!price) {
      errors.price = "price is required and must be longer than 4 characters";
    }
    if (!address || address.length < 4) {
      errors.address =
        "address is required and must be longer than 4 characters";
    }
    if (!housing) {
      errors.housing =
        "housing is required and must be longer than 4 characters";
    }

    if (!city) {
      errors.city = "city is required";
    }
    if (city === "Населено място") {
      errors.city = "city is required";
    }
    console.log(errors);
    setValidationState(errors);

    if (Object.keys(errors).length === 0) {
      const register = async () => {
        await axios
          .post(BACK_END_BASE_URL + SITTERS_URL + `/create`, {
            password: formState.password,
            email: formState.email,
            telephone: formState.telephone,
            name: formState.name,
            surName: formState.surName,
            confirmPassword: formState.confirmPassword,
            image: formState.image,
            description: formState.description,
            price: formState.price,
            address: formState.address,
            housing: formState.housing,
            city: formState.city,
            role: "SITTER",
          })
          .then((response) => {
            if (response.data.email) {
              fetchItems();
              alert("Създаден гледач");
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
  const handleSubmitUpdate = (event, idOfSitter) => {
    event.preventDefault();

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
    } = formStateUpdate;
    const errors = {};

    if (!name || name.length < 4) {
      errors.name = "Name is required and must be longer than 4 characters";
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
    if (!surName || name.surName < 4) {
      errors.surName =
        "surName is required and must be longer than 4 characters";
    }
    if (!image) {
      errors.image = "There must be a image";
    }
    if (!description || description.length < 4) {
      errors.description =
        "description is required and must be longer than 4 characters";
    }
    if (!telephone || telephone.length < 4) {
      errors.telephone =
        "telephone is required and must be longer than 4 characters";
    }
    if (!price) {
      errors.price = "price is required and must be longer than 4 characters";
    }
    if (!address || address.length < 4) {
      errors.address =
        "address is required and must be longer than 4 characters";
    }
    if (!housing) {
      errors.housing =
        "housing is required and must be longer than 4 characters";
    }

    if (!city) {
      errors.city = "city is required";
    }
    if (city === "Населено място") {
      errors.city = "city is required";
    }
    console.log(errors);
    setValidationStateUpdate(errors);

    if (Object.keys(errors).length === 0) {
      console.log("data.end:", data.endingDate);
      const update = async () => {
        await axios
          .put(BACK_END_BASE_URL + SITTERS_URL + `/update`, {
            id: idOfSitter.id,
            name: formStateUpdate.name,
            surName: formStateUpdate.surName,
            image: formStateUpdate.image,
            description: formStateUpdate.description,
            price: formStateUpdate.price,
            email: formStateUpdate.email,
            telephone: formStateUpdate.telephone,
            startingDate: formStateUpdate.startingDate,
            endingDate: formStateUpdate.endingDate,
            address: formStateUpdate.address,
            password: formStateUpdate.password,
          })
          .then((response) => {
            if (response.data.email) {
              fetchItems();
              alert("Създаден гледач");
            }
          })
          .catch((error) => {
            if (error) {
              alert("Грешни данни");
            }
          });
      };
      update();
      calculateTakenDates();
      setData({});
    }
  };
  return (
    <>
      <div className="container border-start border-end border-top">
        <div className="row container pb-3 pt-3 d-flex align-items-center">
          <div className="col-1"></div>
          <div className="col-2 ">ID</div>
          <div className="col-2 ms-1">Потребителско име</div>
          <div className="col-2 ms-1">Емайл</div>
          <div className="col-2 ms-2">Телефонен номер</div>
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
                    Създай гледач
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
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
                      </div>
                      <div className="col-6">
                        {" "}
                        <div className="d-flex justify-content-start align-items-center flex-column p-4">
                          <div className="mb-1 w-100">
                            <input
                              placeholder="Снимка"
                              type="text"
                              className={`form-control ${
                                validationState.image ? "is-invalid" : ""
                              }`}
                              id="image"
                              name="image"
                              value={formState.image}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="mb-1 w-100">
                            <input
                              type="number"
                              className={`form-control ${
                                validationState.price ? "is-invalid" : ""
                              }`}
                              placeholder="Цена на час"
                              id="price"
                              name="price"
                              value={formState.price}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="d-flex flex-row dropdown w-100 mb-1 ">
                            <button
                              type="button"
                              className={`d-flex justify-content-between btn border w-100
                  form-control  ${
                    validationState.city
                      ? "is-invalid border border-danger"
                      : ""
                  }   `}
                              data-bs-toggle="dropdown"
                              value={formState.city}
                              style={{
                                color: formState.city ? "black" : "grey",
                              }}
                            >
                              {formState.city
                                ? formState.city
                                : "Населено място"}
                              <div className="d-flex flew-row"></div>
                              <div className="">
                                <ChevronDown />
                              </div>
                            </button>

                            <ul className="dropdown-menu CardFilterItemWidth">
                              <li
                                className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                onClick={() =>
                                  handleClick(CityArray.SOFIA, "city")
                                }
                              >
                                {CityArray.SOFIA}
                              </li>
                              <li
                                className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                onClick={() =>
                                  handleClick(CityArray.PLOVDIV, "city")
                                }
                              >
                                {CityArray.PLOVDIV}
                              </li>
                              <li
                                className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                onClick={() =>
                                  handleClick(CityArray.BURGAS, "city")
                                }
                              >
                                {CityArray.BURGAS}
                              </li>

                              <li
                                className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                onClick={() =>
                                  handleClick(CityArray.VARNA, "city")
                                }
                              >
                                {CityArray.VARNA}
                              </li>
                              <li
                                className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                onClick={() =>
                                  handleClick(CityArray.SMOLYAN, "city")
                                }
                              >
                                {CityArray.SMOLYAN}
                              </li>
                            </ul>
                          </div>
                          <div className="mb-1 w-100">
                            <input
                              type="text"
                              className={`form-control ${
                                validationState.address ? "is-invalid" : ""
                              }`}
                              placeholder="Пълен адрес"
                              id="address"
                              name="address"
                              value={formState.address}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-1 w-100">
                            <input
                              type="number"
                              className={`form-control ${
                                validationState.housing ? "is-invalid" : ""
                              }`}
                              placeholder="Квадратура на жилището"
                              id="housing"
                              name="housing"
                              value={formState.housing}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-100">
                            <input
                              type="text"
                              className={`form-control ${
                                validationState.description ? "is-invalid" : ""
                              }`}
                              placeholder="Кратко описание"
                              id="description"
                              name="description"
                              value={formState.description}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-100 d-flex justify-content-center">
                      <button
                        type="submit"
                        className="RegisterSitterBodyButton d-flex  w-75 py-2  fw-bold justify-content-center align-items-center"
                      >
                        Създай
                      </button>
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
                    <div className=" d-flex align-items-center justify-content-start flex-row">
                      <img
                        src={
                          e.image
                            ? e.image
                            : "https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                        }
                        alt="tree"
                        style={{
                          width: "12%",
                          height: "7%",
                        }}
                      />
                      <span className="ps-3 ">
                        {e.name} {e.surName}{" "}
                      </span>
                    </div>
                  </div>

                  <div className="col-2">{e.email}</div>
                  <div className="col-2 ">{e.telephone}</div>
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
                                  {e.id}
                                </h5>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              {/* Промени */}
                              <form
                                onSubmit={(event) =>
                                  handleSubmitUpdate(event, e)
                                }
                              >
                                <div className="modal-body adminDashBoardMainBodyBlackColorAndWhiteBg">
                                  <div className="d-flex flex-row">
                                    <div className="col-6">
                                      {" "}
                                      <div className=" d-flex justify-content-start align-items-center flex-column p-4">
                                        <div className="mb-1 w-100">
                                          <input
                                            type="text"
                                            className={`form-control ${
                                              validationStateUpdate.name
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            placeholder="Име"
                                            id="name"
                                            name="name"
                                            value={formStateUpdate.name}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>
                                        <div className="mb-1 w-100">
                                          <input
                                            placeholder="Фамилия"
                                            type="text"
                                            className={`form-control ${
                                              validationStateUpdate.surName
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            id="surName"
                                            name="surName"
                                            value={formStateUpdate.surName}
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
                                            value={
                                              formStateUpdate.confirmPassword
                                            }
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      {" "}
                                      <div className="d-flex justify-content-start align-items-center flex-column p-4">
                                        <div className="mb-1 w-100">
                                          <input
                                            placeholder="Снимка"
                                            type="text"
                                            className={`form-control ${
                                              validationStateUpdate.image
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            id="image"
                                            name="image"
                                            value={formStateUpdate.image}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>

                                        <div className="mb-1 w-100">
                                          <input
                                            type="number"
                                            className={`form-control ${
                                              validationStateUpdate.price
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            placeholder="Цена на час"
                                            id="price"
                                            name="price"
                                            value={formStateUpdate.price}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>

                                        <div className="d-flex flex-row dropdown w-100 mb-1 ">
                                          <button
                                            type="button"
                                            className={`d-flex justify-content-between btn border w-100
                  form-control  ${
                    validationStateUpdate.city
                      ? "is-invalid border border-danger"
                      : ""
                  }   `}
                                            data-bs-toggle="dropdown"
                                            value={formStateUpdate.city}
                                            style={{
                                              color: formStateUpdate.city
                                                ? "black"
                                                : "grey",
                                            }}
                                          >
                                            {formStateUpdate.city
                                              ? formStateUpdate.city
                                              : "Населено място"}
                                            <div className="d-flex flew-row"></div>
                                            <div className="">
                                              <ChevronDown />
                                            </div>
                                          </button>

                                          <ul className="dropdown-menu CardFilterItemWidth">
                                            <li
                                              className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                              onClick={() =>
                                                handleClickUpdate(
                                                  CityArray.SOFIA,
                                                  "city"
                                                )
                                              }
                                            >
                                              {CityArray.SOFIA}
                                            </li>
                                            <li
                                              className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                              onClick={() =>
                                                handleClickUpdate(
                                                  CityArray.PLOVDIV,
                                                  "city"
                                                )
                                              }
                                            >
                                              {CityArray.PLOVDIV}
                                            </li>
                                            <li
                                              className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                              onClick={() =>
                                                handleClickUpdate(
                                                  CityArray.BURGAS,
                                                  "city"
                                                )
                                              }
                                            >
                                              {CityArray.BURGAS}
                                            </li>

                                            <li
                                              className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                              onClick={() =>
                                                handleClickUpdate(
                                                  CityArray.VARNA,
                                                  "city"
                                                )
                                              }
                                            >
                                              {CityArray.VARNA}
                                            </li>
                                            <li
                                              className="dropdown-item w-100 d-flex CardFilterItemCursor"
                                              onClick={() =>
                                                handleClickUpdate(
                                                  CityArray.SMOLYAN,
                                                  "city"
                                                )
                                              }
                                            >
                                              {CityArray.SMOLYAN}
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="mb-1 w-100">
                                          <input
                                            type="text"
                                            className={`form-control ${
                                              validationStateUpdate.address
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            placeholder="Пълен адрес"
                                            id="address"
                                            name="address"
                                            value={formStateUpdate.address}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>
                                        <div className="mb-1 w-100">
                                          <input
                                            type="number"
                                            className={`form-control ${
                                              validationStateUpdate.housing
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            placeholder="Квадратура на жилището"
                                            id="housing"
                                            name="housing"
                                            value={formStateUpdate.housing}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>
                                        <div className="w-100">
                                          <input
                                            type="text"
                                            className={`form-control ${
                                              validationStateUpdate.description
                                                ? "is-invalid"
                                                : ""
                                            }`}
                                            placeholder="Кратко описание"
                                            id="description"
                                            name="description"
                                            value={formStateUpdate.description}
                                            onChange={handleChangeUpdate}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    onClick={() => setToggleCalendar(true)}
                                    className="d-flex flex-row position-relative dropdown"
                                  >
                                    <div
                                      className="input-group-text ms-4"
                                      id="basic-addon1"
                                    >
                                      <div className="">
                                        <CalendarCheck />
                                      </div>
                                    </div>
                                  </div>

                                  <span
                                    onMouseLeave={() =>
                                      setToggleCalendar(false)
                                    }
                                    className="position-absolute "
                                  >
                                    {toggleCalendar ? (
                                      <div className="d-flex justify-content-center mt-4">
                                        <div className="mt-3">
                                          <DatePicker
                                            selected={startDate}
                                            onChange={(update) => {
                                              console.log(update);
                                              validate(
                                                update[0],
                                                "startingDate"
                                              );
                                              validate(update[1], "endingDate");
                                              setDateRange(update);
                                            }}
                                            startDate={startDate}
                                            endDate={endDate}
                                            excludeDates={calculateTakenDates(
                                              e.takenDates
                                            )}
                                            selectsRange
                                            selectsDisabledDaysInRange
                                            inline
                                          />
                                        </div>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </span>
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
                                </div>
                              </form>
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
