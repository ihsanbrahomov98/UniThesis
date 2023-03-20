import React from "react";
import "./ProfilePictureDropDownMenu.css";
const ProfilePictureDropDownMenu = (props) => {
  return (
    <>
      <div className="ProfilePictureDropDownMenu_ProfilePicture">
        <span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/N%27Tami%2C_Western_Gorilla.jpg/1200px-N%27Tami%2C_Western_Gorilla.jpg"
            alt="Italian Trulli"
          />
          <span className="ProfilePictureDropDownMenu_Name">{props.name}</span>
        </span>
      </div>

      <div className="ProfilePictureDropDownMenu_ViewAll">
        View all profiles
      </div>
    </>
  );
};

export default ProfilePictureDropDownMenu;
