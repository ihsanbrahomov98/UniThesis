import React from "react";
import "./userReviews.css";

const UserReviews = ({ isSitter }) => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://nypost.com/wp-content/uploads/sites/2/2018/07/180723-women-prefer-hanging-with-dogs-than-lover-feature.jpg?quality=75&strip=all"
              className={`d-block w-100 ${
                isSitter
                  ? "UserReviewsImageSitterPage"
                  : "UserReviewsImageHomePage"
              }`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block UserReviews">
              <h2>Мария за Елена</h2>
              <p className="fw-bolder fs-5">
                Елена е прекрасна.За първи път използвах нейните услуги и двама
                с моето куче бяхме притеснени. Всички протече идеално и моето
                куче се върна удома щастливо. Благодаря ти Ели!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/back-view-young-man-with-dog-seaside_23-2148885061.jpg"
              className={`d-block w-100 ${
                isSitter
                  ? "UserReviewsImageSitterPage"
                  : "UserReviewsImageHomePage"
              }`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block UserReviews">
              <h2>Стефан за Иван</h2>
              <p className="fw-bolder fs-5">
                Иван е чудесен.За първи път използвах неговите услуги и двама с
                моето куче бяхме притеснени. Всички протече идеално и моето куче
                се върна удома щастливо. Благодаря ти Ванка!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
              className={`d-block w-100 ${
                isSitter
                  ? "UserReviewsImageSitterPage"
                  : "UserReviewsImageHomePage"
              }`}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block UserReviews">
              <h2>Теодор за Георги</h2>
              <p className="fw-bolder fs-5">
                Георги е чудесен.За първи път използвах неговите услуги и двама
                с моето куче бяхме притеснени. Всички протече идеално и моето
                куче се върна удома щастливо. Благодаря ти Гоше!
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default UserReviews;
