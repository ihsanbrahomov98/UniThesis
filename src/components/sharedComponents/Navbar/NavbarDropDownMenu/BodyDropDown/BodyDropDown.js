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
import { Link, redirect } from "react-router-dom";
import { logout } from "../../../../../redux/UserSlice/UserSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const BodyDropDown = (props) => {
  const userDataRedux = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();
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
      text: "Настройки",
    },
    {
      leftIcon: <FaRegMoon fontSize={"1rem"} />,
      rightIcon: <FaAngleRight fontSize={"1rem"} />,
      text: "Нощен режим",
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

  const handleLogin = () => {
    console.log("here");

    if (userDataRedux.username) {
      dispatch(logout(""));
      setUser(userDataRedux);
    }
    if (!userDataRedux.username) {
      navigate("/login");
    }
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <>
      {props.open ? (
        <div className="BodyDropDown_container">
          <ProfilePictureDropDownMenu
            name={userDataRedux.username ? userDataRedux.username : ""}
          />

          {userDataRedux.role === "SITTER" ? (
            <Link
              className="BodyDropDown_TextDecorationNone"
              to={`/sitterdashboard/pending/:${userDataRedux.id}`}
            >
              <DropDownItem
                className="BodyDropDown_TextDecorationNone"
                leftIcon={<FaAtom fontSize={"1rem"} />}
                rightIcon={<FaAngleRight fontSize={"1rem"} />}
              >
                {"Контролен панел"}
              </DropDownItem>
            </Link>
          ) : (
            ""
          )}
          {userDataRedux.role === "ADMIN" ? (
            <Link
              className="BodyDropDown_TextDecorationNone"
              to={`/admindashboard/sitters/:${userDataRedux.id}`}
            >
              <DropDownItem
                className="BodyDropDown_TextDecorationNone"
                leftIcon={<FaAtom fontSize={"1rem"} />}
                rightIcon={<FaAngleRight fontSize={"1rem"} />}
              >
                {"Контролен панел"}
              </DropDownItem>
            </Link>
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
          {userDataRedux.username ? (
            ""
          ) : (
            <div onClick={() => handleRegister()} className="">
              <DropDownItem
                leftIcon={<FaMailBulk fontSize={"1rem"} />}
                rightIcon={""}
                linkToComponent={"/register"}
              >
                {userDataRedux.username ? "" : "Регистрирай се"}
              </DropDownItem>
            </div>
          )}

          <div onClick={() => handleLogin()} className="">
            <DropDownItem
              leftIcon={<FaDoorOpen fontSize={"1rem"} />}
              rightIcon={""}
              linkToComponent={"/login"}
            >
              {userDataRedux.username ? "Изход" : "Влез"}
            </DropDownItem>
          </div>
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
