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

  const onSubmit = (e) => {
    const update = async () => {
      await axios.put(BACK_END_BASE_URL + USERS_URL + `/update`, {
        name: data.name,
        email: data.email,
        id: e,
      });
      fetchItems();
    };
    update();
  };

  const onSubmitCreate = (data) => {
    const create = async () => {
      await axios.post(BACK_END_BASE_URL + USERS_URL + `/create`, {
        name: data.name,
        email: data.email,
        adminId: data.adminId,
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
                        Username
                      </div>
                      <div className="col-9">
                        <input
                          onChange={(e) => validate(e.target.value, "name")}
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
                          onChange={(e) => validate(e.target.value, "email")}
                          type="text"
                          class="form-control"
                          placeholder="Username"
                          aria-label="Username"
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
