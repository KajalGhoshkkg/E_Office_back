import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div className="AdminCreation_container flex">
      <div className='AdminCreation_container_title'>
        <p>Create Admin</p>
      </div>
      <div className='AdminCreation_container_body flex justify_center'>
          <p>Admin Name</p>
          <input type='text' placeholder='Admin Name..'/>
          <p>Base</p>
          <select id="base" name="Admin">
                  <option value="">Select your base</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
          <div className='AdminCreation_container_body_btnPart flex justify_spc_around'>
          <button>Cancle</button>
          <button>Create</button>
          </div>
      </div>
    </div>
  );
};

export default Admin;
