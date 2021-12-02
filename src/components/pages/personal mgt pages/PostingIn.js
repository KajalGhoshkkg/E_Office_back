import React from "react";
import "./postingIn.css";
import { ReactComponent as CloseBtn } from "../../../img/closeBtnIcon.svg";

const PostingIn = () => {
  return (
    <div className="addUserPage_container">
      <div className="flex justify_spc_btn align_center">
        <div>
          <p>Posting In</p>
        </div>
        <div>
          <CloseBtn className="addUserPage_container_clsBtn" fill="#333333" />
        </div>
      </div>
      <div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>BD</label>
        </div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>Unit</label>
        </div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>Wing</label>
        </div>
      </div>
      <div class="adduser_text-field">
        <select required>
          <option value="" disabled selected hidden>
            Select your Base
          </option>
          <option value="Base1">Base1</option>
          <option value="Base2">Base2</option>
        </select>
      </div>
      <div class="adduser_text-field">
        <input type="text" required />
        <label>Date of Posting</label>
      </div>
      <div class="adduser_text-field">
        <input type="text" required />
        <label>Auth of Posting</label>
      </div>
      <div className="addUserPage_container_BtnField flex justify_center">
        <button className="addUserPage_container_BtnField_cancelBtn">
          Cancel
        </button>
        <button className="addUserPage_container_BtnField_creatBtn">
          Create
        </button>
      </div>
    </div>
  );
};

export default PostingIn;
