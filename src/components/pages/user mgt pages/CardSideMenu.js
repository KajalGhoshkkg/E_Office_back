import React from "react";
import "./cardSideMenu.css";
import { ReactComponent as Edit } from "../../../img/editIcon.svg";
import { ReactComponent as Lock } from "../../../img/lockIcon.svg";
import { ReactComponent as Delete } from "../../../img/deleteIcon.svg";


const CardSideMenu = () => {
  return (
    <div className="cardSideMenu align_center">
      <div className="cardSideMenu_options flex">
        <Edit fill="#333" />
        <p>Edit UserName</p>
      </div>
      <div className="cardSideMenu_options flex">
        <Lock fill="#333" />
        <p>Reset Password</p>
      </div>
      <div className="cardSideMenu_options_delete flex">
        <Delete fill="#EF5DA8" />
        <p>Remove User</p>
      </div>
    </div>
  );
};

export default CardSideMenu;
