import React from "react";
import "./wing.css";

const Wing = () => {
  return (
    <div className="WingCreation_container flex">
      <div className='WingCreation_container_title'>
        <p>Create Wing</p>
      </div>
      <div className='WingCreation_container_body flex justify_center'>
          <p>Wing Name</p>
          <input type='text' placeholder='Wing Name..'/>
          <div className='WingCreation_container_body_btnPart flex justify_spc_around'>
          <button>Cancle</button>
          <button>Create</button>
          </div>
      </div>
    </div>
  );
};

export default Wing;
