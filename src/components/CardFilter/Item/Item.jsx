import React from "react";
import { ChevronDown } from "react-bootstrap-icons";

const Item = () => {
  return (
    <>
      <div className="">Търся услуга</div>
      <div className="dropdown mt-2">
        <button
          type="button"
          className="d-flex justify-content-between btn border w-100"
          data-bs-toggle="dropdown"
        >
          <div>text 1</div>
          <div>
            <ChevronDown />
          </div>
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-item" href="#">
              Link 1
            </div>
          </li>
          <li>
            <div className="dropdown-item" href="#">
              Link 2
            </div>
          </li>
          <li>
            <div className="dropdown-item" href="#">
              Link 3
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Item;
