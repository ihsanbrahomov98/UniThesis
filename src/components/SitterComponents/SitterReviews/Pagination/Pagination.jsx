import React from "react";

const Pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example ">
        <ul className="pagination pagination-lg justify-content-center mt-4">
          <li className="page-item disabled">
            <a className="page-link " href="#" tabindex="-1">
              {"<"}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              7
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {">"}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
