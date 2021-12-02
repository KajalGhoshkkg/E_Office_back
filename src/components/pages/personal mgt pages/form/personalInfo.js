import React from "react";
import "./personalInfo.css";

const personalInfo = ({setPersonalSaveBtnValue}) => {
  return (
    <div className='personalInfo_PagePositioner'>
      <div className="personalInfo_container flex">
      <p>Please fill up all the fields.</p>
      <div className="personalPage_form flex justify_spc_btn">
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>NID No</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Passport No</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Driving License No</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Blood Group</label>
        </div>
      </div>
      <p>Contact Information</p>
      <div className="personalPage_form flex justify_spc_btn">
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Mobile (Work)</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Mobile (pers)</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Email (BAF Web Mail)</label>
        </div>
        <div className="personalInfo_text-field">
          <input type="text" required />
          <label>Email (Pers)</label>
        </div>
      </div>
      <p>Addresses</p>
      <div className="personalPage_form flex justify_spc_btn">
        <div className="personalInfo_textarea-field">
          <textarea
            id="personalInfo_ID"
            name="personalInfo_ID"
            rows="5"
            cols="30"
            required
          />
          <label>Present Address</label>
        </div>
        <div className="personalInfo_textarea-field">
          <textarea
            id="personalInfo_ID"
            name="personalInfo_ID"
            rows="5"
            cols="30"
            required
          />
          <label>Permanent Address</label>
        </div>
      </div>
      <div>
        <button
          onClick={() => setPersonalSaveBtnValue(true)}
          className="formPage_saveBtn"
        >
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default personalInfo;
