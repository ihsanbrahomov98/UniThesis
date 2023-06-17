import React, { useState, useEffect } from "react";
import "../../Admins/Body/body.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomNavbar = () => {
  const [selected, setSelected] = useState("sitters");
  const searchDataRedux = useSelector((state) => state.user);
  let location = useLocation();
  useEffect(() => {
    setSelected(location.pathname.split("/")[2]);
  }, [location]);

  return (
    <>
      <div className="me-5 ms-5">
        <div className="me-5 ms-5">
          <div className="me-2 ms-2">
            <div className="me-1 ms-1">
              <div className="row  d-flex ">
                <Link
                  style={{
                    textDecoration: "none",
                    color: selected === "sitters" ? "black" : "white",
                  }}
                  to={`/admindashboard/sitters/:${searchDataRedux.id}`}
                  className={"fs-5 col-4 pe-0 "}
                >
                  <div
                    className={
                      selected === "sitters"
                        ? "adminDashBoardMainBodyBlackOrange ps-2   pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3 "
                    }
                  >
                    Гледачи
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 pe-0"}
                  style={{
                    textDecoration: "none",
                    color: selected === "users" ? "black" : "white",
                  }}
                  to={`/admindashboard/users/:${searchDataRedux.id}`}
                >
                  <div
                    className={
                      selected === "users"
                        ? "adminDashBoardMainBodyBlackOrange  pb-3 pt-3 ps-2 "
                        : "adminDashBoardMainBodyBlackColor pb-3 pt-3   ps-2 "
                    }
                  >
                    Потребители
                  </div>
                </Link>
                <Link
                  className={"fs-5 col-4 ps-0 "}
                  style={{
                    textDecoration: "none",
                    color: selected === "admins" ? "black" : "white",
                  }}
                  to={`/admindashboard/admins/:${searchDataRedux.id}`}
                >
                  <div
                    className={
                      selected === "admins"
                        ? "adminDashBoardMainBodyBlackOrange ps-2  pb-3 pt-3 "
                        : "adminDashBoardMainBodyBlackColor ps-2  pb-3 pt-3  "
                    }
                  >
                    Админи
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
