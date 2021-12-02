import React from "react";
import "./serviceInfo.css";

const ServiceInfo = ({setServiceSaveBtnValue}) => {
  return (
    <div className="servicePage_container flex">
      <p>Please fill up all the fields.</p>
      <div className="servicePage_form flex justify_spc_btn">
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Rank</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Subs Rank</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Name</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Inter svc sr</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>BD</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Appt</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Branch</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Section/Unit</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Gradation</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Wing</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Course</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Base</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>D O C</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Posting Date</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>T O C</label>
        </div>
        <div className="serviceInfo_text-field">
          <input type="text" required />
          <label>Posting Auth</label>
        </div>
      </div>
      <div>
        <button
          onClick={() => setServiceSaveBtnValue(true)}
          className="formPage_saveBtn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ServiceInfo;
