import React from "react";
import StarPicker from "react-star-picker";
const Header = ({ item }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="d-flex justify-content-between w-75 ps-2 fs-4 fw-bolder ">
        <div className="d-flex">
          <div className="">
            {item && item.review.length ? item.review.length : "0"}
          </div>
          <div className="ms-2">Мнения</div>
        </div>
        <div className="d-flex">
          <div className="ms-2">
            {" "}
            <StarPicker size={25} halfStars value={item.rating} />
          </div>
          {/* TODO Да се добяват звезди */}
        </div>
      </div>
    </div>
  );
};

export default Header;
