import React from "react";
import { HouseDoorFill } from "react-bootstrap-icons";
import Item from "./Item/Item";
import dogTraining from "../../../assets/Images/dogTraining.png";
import dogWalkingSitter from "../../../assets/Images/dogWalkingSitter.jpg";
import vet from "../../../assets/Images/vet.png";
import withUs from "../../../assets/Images/withUs.webp";
import boarding from "../../../assets/Images/boarding.webp";
const SitterAccommodation = ({ item }) => {
  return (
    <>
      <div className="container d-flex w-75 mt-5 flex-column">
        <div className="fs-4 fw-bold">Услугите на {item.name}</div>
        <div className="fs-5 ">Разходка</div>
        <Item
          title={"Разходка"}
          text={"Разходка за твоето куче цена до 2 часа"}
          price={item.price}
          image={dogWalkingSitter}
        />
        <Item
          title={"Разходка"}
          text={"Разходка за твоето куче цена за повече от 2 часа"}
          price={(item.price / 2).toFixed()}
          image={dogWalkingSitter}
        />
        <div className="fs-5 ">Ветеринар</div>
        <Item
          title={"Преглед при Ветеринар"}
          text={"Преглед при Ветеринар с покрити транспортни разходи"}
          price={(item.price * 1.5).toFixed()}
          image={vet}
        />
        <div className="fs-5 ">Тренировка</div>
        <Item
          title={"Тренировка"}
          text={"Тренировка за твоето куче цена до 2 часа"}
          price={(item.price * 1.85).toFixed()}
          image={dogTraining}
        />
        <Item
          title={"Тренировка"}
          text={"Тренировка за твоето куче цена за повече от 2 часа"}
          price={(item.price * 1.25).toFixed()}
          image={dogTraining}
        />
        <div className="fs-5 ">У вас</div>
        <Item
          title={"Наглеждане във вашият дом"}
          text={"Наглеждане във вашият дом цена до 2 часа"}
          price={(item.price * 0.75).toFixed()}
          image={boarding}
        />
        <Item
          title={"Тренировка"}
          text={"Наглеждане във вашият дом цена за повече от 2 часа"}
          price={(item.price * 0.5).toFixed()}
          image={boarding}
        />
        <div className="fs-5 ">При нас</div>
        <Item
          title={"Наглеждане във наш дом"}
          text={"Наглеждане във наш дом цена до 2 часа"}
          price={(item.price * 0.55).toFixed()}
          image={withUs}
        />
        <Item
          title={"Наглеждане във наш дом"}
          text={"Наглеждане във наш дом цена за повече от 2 часа"}
          price={(item.price * 0.3).toFixed()}
          image={withUs}
        />
      </div>
    </>
  );
};

export default SitterAccommodation;
