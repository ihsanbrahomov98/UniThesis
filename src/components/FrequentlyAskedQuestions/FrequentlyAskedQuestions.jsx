import React from "react";
import Item from "./Item/Item";

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="fs-3 fw-bolder mb-2">Доверете се в нас</div>
        <div className="d-flex justify-content-between w-75">
          <Item
            title={"Пълна застраховка"}
            text={
              "Ние предлагаме пълна застраховка, която защитава вас, дома Ви и вашите домашни любимци от опасности."
            }
            image={"https://cdn-icons-png.flaticon.com/512/4599/4599163.png"}
          />
          <Item
            title={"Ветеринари с опит"}
            text={
              "Ние работим само с най - добрите ветеринари в страната с дългогодишен опит в сферата."
            }
            image={"https://cdn-icons-png.flaticon.com/512/2295/2295086.png"}
          />
          <Item
            title={"Нашите гледачи"}
            text={
              "Нашите гледачи са преминали през дълго обучение и са изключително клалифицирани."
            }
            image={
              "https://cdn.w600.comps.canstockphoto.com/man-walking-dog-icon-outline-style-eps-vector_csp73451140.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default FrequentlyAskedQuestions;
