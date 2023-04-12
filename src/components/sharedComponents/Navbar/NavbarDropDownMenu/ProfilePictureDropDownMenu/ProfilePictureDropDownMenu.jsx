import React from "react";
import "./ProfilePictureDropDownMenu.css";
const ProfilePictureDropDownMenu = (props) => {
  return (
    <>
      {props.name ? (
        <div className="ProfilePictureDropDownMenu_ProfilePicture">
          <span>
            <img
              src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
              alt="Italian Trulli"
            />
            <span className="ProfilePictureDropDownMenu_Name">
              {props.name}
            </span>
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfilePictureDropDownMenu;
