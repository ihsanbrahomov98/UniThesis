import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarCheck } from "react-bootstrap-icons";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import bg from "../../../../assets/i18n/bg.json";
import "./body.css";
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

  const onSubmitCreate = (data) => {
    console.log(data);
    const create = async () => {
      await axios.post(BACK_END_BASE_URL + SITTERS_URL + `/create`, {
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
    create();
  };

  const validate = (dataInfo, dataType) => {
    setData((prevState) => ({
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

  // [addDays(new Date(), 1),
  // addDays(new Date(), 5),
  // addDays(new Date(), 2),
  // addDays(new Date(), 4]
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
          <div className="col-2 ms-1">23</div>
          <div className="col-2 ms-1">Info</div>
          <div className="col-2 ms-1">Email</div>
          <div className="col-2 ms-1">Price</div>
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
                    Modal title
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
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.name}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "name")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.name}
                          aria-label={bg.adminDashBoard.name}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.surName}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "surName")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.surName}
                          aria-label={bg.adminDashBoard.surName}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.image}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "image")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.image}
                          aria-label={bg.adminDashBoard.image}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.description}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) =>
                            validate(e.target.value, "description")
                          }
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.description}
                          aria-label={bg.adminDashBoard.description}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.email}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "email")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.email}
                          aria-label={bg.adminDashBoard.email}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.telephone}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) =>
                            validate(e.target.value, "telephone")
                          }
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.telephone}
                          aria-label={bg.adminDashBoard.telephone}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.price}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "price")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.price}
                          aria-label={bg.adminDashBoard.price}
                        />
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div className="col-3 d-flex justify-content-start align-items-center">
                        {bg.adminDashBoard.address}
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "address")}
                          type="text"
                          class="form-control"
                          placeholder={bg.adminDashBoard.address}
                          aria-label={bg.adminDashBoard.address}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => onSubmitCreate(data)}
                        type="button"
                        className="btn btn-primary px-5"
                      >
                        Създай
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container border ">
        <div className=" container">
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
                      <div className=" d-flex align-items- justify-content-start flex-row">
                        <img
                          src={
                            e.img
                              ? e.img
                              : "https://carducci.bg/wp-content/uploads/2021/06/2004090138_1web.jpg"
                          }
                          alt="tree"
                          style={{ width: "12%", height: "7%" }}
                        />
                        <span className="ps-3">{e.name} </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-2">placeholder</div>
                  <div className="col-2 " style={{ color: "green" }}></div>
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
                              <div className="modal-body adminDashBoardMainBodyBlackColorAndWhiteBg">
                                <div class="input-group mb-3">
                                  <div className="col-3 d-flex justify-content-start align-items-center">
                                    Username
                                  </div>
                                  <div className="col-9">
                                    <input
                                      onChange={(e) =>
                                        validate(e.target.value, "username")
                                      }
                                      type="text"
                                      class="form-control"
                                      placeholder="Username"
                                      aria-label="Username"
                                    />
                                  </div>
                                </div>
                                <div class="input-group mb-3">
                                  <div className="col-3 d-flex justify-content-start align-items-center">
                                    Username
                                  </div>
                                  <div className="col-9">
                                    <input
                                      onChange={(e) =>
                                        validate(e.target.value, "email")
                                      }
                                      type="text"
                                      className="form-control"
                                      placeholder="Username"
                                      aria-label="Username"
                                    />
                                  </div>
                                </div>
                                <div
                                  onClick={() => setToggleCalendar(true)}
                                  className="d-flex flex-row position-relative dropdown mt-1"
                                >
                                  <div
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    <div className="">
                                      <CalendarCheck />
                                    </div>
                                  </div>
                                </div>

                                <span
                                  onMouseLeave={() => setToggleCalendar(false)}
                                  className="position-absolute "
                                >
                                  {toggleCalendar ? (
                                    <div className="d-flex justify-content-center mt-4">
                                      <div className="mt-3">
                                        <DatePicker
                                          selected={startDate}
                                          onChange={(update) => {
                                            console.log(update);
                                            validate(update[0], "startingDate");
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
                                  <button
                                    onClick={() => onSubmit(e.id)}
                                    type="button"
                                    className="btn btn-primary px-5"
                                  >
                                    Промени
                                  </button>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
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
                        Delete{" "}
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
