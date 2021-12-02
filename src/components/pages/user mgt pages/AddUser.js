import React from "react";
import "./addUser.css";
import { ReactComponent as CloseBtn } from "../../../img/closeBtnIcon.svg";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="addUserPage_container">
      <div className='flex justify_spc_btn align_center'>
        <div>
          <p>Add user</p>
        </div>
        <div>
          <CloseBtn className='addUserPage_container_clsBtn' fill='#333333'/>
        </div>
      </div>
      <div className='addUser_userID_part'>
        <p>user: kkg101010</p>
      </div>
      <div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>User name</label>
        </div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>Password</label>
        </div>
        <div class="adduser_text-field">
          <input type="text" required />
          <label>Confirm Password</label>
        </div>
      </div>
      <div className='addUserPage_container_BtnField flex justify_center'>
          <button className='addUserPage_container_BtnField_cancelBtn'>Cancel</button>
          <Link to='/admin/usermgt'><button className='addUserPage_container_BtnField_creatBtn'>Create</button> </Link>
          
      </div>
    </div>
  );
};

export default AddUser;
