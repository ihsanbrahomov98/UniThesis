import React from "react";

const SitterHomeAndPets = () => {
  return (
    <>
      <div className="container d-flex w-50 mt-3 flex-column border">
        <div className="fw-bolder fs-4 mb-2">Домашните любимци на Ихсан</div>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <img
              src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
              alt=""
              style={{ height: "2rem" }}
            />
            <div className="ms-2">Немска овчарка</div>
          </div>

          <div className="d-flex">
            <img
              src="https://pupuphooray.com/wp-content/uploads/2019/03/dog-icon.png"
              alt=""
              style={{ height: "2rem" }}
            />
            <div className="ms-2">Немска овчарка</div>
          </div>
        </div>
        <div className="fw-bolder fs-4 mb-2 ">Дома на Ихсан</div>
        <div className="d-flex align-items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngBI_O3lUzlS6-S5Hy5Zx-Pu403WXFV-0Yl3YRGI&s"
            alt=""
            style={{ height: "2rem", width: "2rem" }}
          />
          <div className="ms-2">Апартамент 48 кв.м</div>
        </div>
      </div>
    </>
  );
};

export default SitterHomeAndPets;
