import React from "react";

const SitterHomeAndPets = () => {
  return (
    <>
      <div className="container d-flex w-50 mt-3 flex-column">
        <div className="fw-bolder fs-4">Домашните любимци на Ихсан</div>
        <div className="d-flex flex-column">
          <div className="d-flex bg-black">
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
          </div>
          <div className="ms-2">Немска овчарка</div>
        </div>
      </div>
    </>
  );
};

export default SitterHomeAndPets;
