import React, { useEffect } from "react";
import { useState } from "react";
import DropDownItem from "../DropDownItem/DropDownItem";
import "./BodyDropDown.css";
import ProfilePictureDropDownMenu from "../ProfilePictureDropDownMenu/ProfilePictureDropDownMenu";
import { FaAngleRight } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const BodyDropDown = (props) => {
  const userDataRedux = useSelector((state) => state.user);
  const [user, setUser] = useState({ username: "няма" });
  const [userState, setUserState] = useState({
    name: "NickName",
    user: true,
    isLoggedIn: true,
  });
  const arrayOfButtons = [
    {
      leftIcon: <FaRegQuestionCircle fontSize={"1rem"} />,
      rightIcon: <FaAngleRight fontSize={"1rem"} />,
      text: "Settings",
    },
    {
      leftIcon: <FaRegMoon fontSize={"1rem"} />,
      rightIcon: <FaAngleRight fontSize={"1rem"} />,
      text: "Night mode",
    },
  ];
  useEffect(() => {
    if (userDataRedux && userDataRedux.role === "USER") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
    if (userDataRedux && userDataRedux.role === "SITTER") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
    if (userDataRedux && userDataRedux.role === "ADMIN") {
      console.log(userDataRedux);
      setUser(userDataRedux);
    }
  }, [userDataRedux]);

  return (
    <>
      {props.open ? (
        <div className="BodyDropDown_container">
          <ProfilePictureDropDownMenu
            name={userState.name ? userState.name : "Toshko"}
          />
          {userDataRedux.role === "SITTER" ? (
            <DropDownItem
              leftIcon={<FaAtom fontSize={"1rem"} />}
              rightIcon={<FaAngleRight fontSize={"1rem"} />}
            >
              {"Контролен панел"}
            </DropDownItem>
          ) : (
            ""
          )}
          {userDataRedux.role === "ADMIN" ? (
            <DropDownItem
              leftIcon={<FaAtom fontSize={"1rem"} />}
              rightIcon={<FaAngleRight fontSize={"1rem"} />}
            >
              {"Контролен панел"}
            </DropDownItem>
          ) : (
            ""
          )}
          {arrayOfButtons.map((e) => {
            return (
              <DropDownItem leftIcon={e.leftIcon} rightIcon={e.rightIcon}>
                {e.text}
              </DropDownItem>
            );
          })}
          {userState.user ? (
            ""
          ) : (
            <DropDownItem
              leftIcon={<FaMailBulk fontSize={"1rem"} />}
              rightIcon={""}
              linkToComponent={"/register"}
            >
              {userState.user ? "" : "Register"}
            </DropDownItem>
          )}

          <DropDownItem
            leftIcon={<FaDoorOpen fontSize={"1rem"} />}
            rightIcon={""}
            linkToComponent={"/login"}
          >
            {userState.isLoggedIn ? "Log out" : "Log in"}
          </DropDownItem>
          <div className="BodyDropDown_Text">
            Поверителност · Условия · Избор за реклами · Бисквитки · Рекламиране
            · Условия · Избор за реклами · Условия · Възможност за работа
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BodyDropDown;
