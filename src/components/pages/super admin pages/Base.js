import React from "react";
import "./base.css";

const Base = () => {
  return (
    <div className="baseCreation_container flex">
      <div className='baseCreation_container_title'>
        <p>Create Base</p>
      </div>
      <div className='baseCreation_container_body flex justify_center'>
          <p>Base Name</p>
          <input type='text' placeholder='Base Name..'/>
          <div className='baseCreation_container_body_btnPart flex justify_spc_around'>
          <button>Cancle</button>
          <button>Create</button>
          </div>
      </div>
    </div>
  );
};

export default Base;
