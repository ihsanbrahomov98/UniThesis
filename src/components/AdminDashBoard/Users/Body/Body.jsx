import React, { useState, useEffect } from "react";
import "./body.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Body = ({ table }) => {
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("products");
  let location = useLocation();

  useEffect(() => {
    setSelected(location.pathname.split("/")[2]);
  }, [location]);

  const deleteProduct = (e) => {
    console.log(e.id);
    axios.delete(
      `http://localhost:8082/products/delete`,

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
  };
  const CheckInfo = (e) => {
    if (e.userId) {
      return e.userId;
    }
    if (e.adminId) {
      return e.adminId;
    }
    if (e.price) {
      return e.price;
    }
  };

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get(`http://localhost:8082/products/all`);
      console.log(data);
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
    <>
      <div className="container border ">
        <div className=" container">
          <div className="">
            <div className="TABLE-INFO ">
              {products.map((e) => (
                <div className="row border-bottom pb-3 pt-3 d-flex align-items-center">
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

                  <div className="col-2">
                    {table === "products" ? e.category : e.email}
                  </div>
                  <div className="col-2 " style={{ color: "green" }}>
                    {CheckInfo(e)}
                  </div>
                  <div className="col-3">
                    <div className=" d-flex align-items- justify-content-start flex-row">
                      <span className="adminDashBoardMainBody ps-2 pe-2 me-3">
                        <div onClick={() => setModalShow(true)}>
                          <div className=" modalCursor ">view</div>
                        </div>
                      </span>
                      <span
                        className="adminDashBoardRedButton ps-2 pe-2 "
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
