import React from "react";
import './resetPassword.css'
import { ReactComponent as CloseBtn } from "../../../img/closeBtnIcon.svg";

const ResetPassword = () => {
  return (
    <div className="addUserPage_container">
      <div className="flex justify_spc_btn align_center">
        <div>
          <p>Change Password</p>
        </div>
        <div>
          <CloseBtn className="addUserPage_container_clsBtn" fill="#333333" />
        </div>
      </div>
      <div className="addUser_userID_part">
        <p>user: kkg101010</p>
      </div>
      <div>
        <div class="resetPass_text-field">
          <input type="text" required />
          <label>Password</label>
        </div>
        <div class="resetPass_text-field">
          <input type="text" required />
          <label>Confirm Password</label>
        </div>
      </div>
      <div className="addUserPage_container_BtnField flex justify_center">
        <button className="resetPassword_UserPage_container_BtnField_cancelBtn">
          Cancel
        </button>
        <button className="addUserPage_container_BtnField_changeBtn">
          Change
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
