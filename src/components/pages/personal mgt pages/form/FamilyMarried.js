import React from "react";
import './familyMarried.css'

const FamilyMarried = () => {
  return (
    <div className='familyMarried_container flex justify_spc_btn'>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Father's Name</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Mother's Name</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Name of the Next Kin</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Contact of the Next Kin</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Spouse Name</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Children 1</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Children 2</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Children 3</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Father-in-Law's Name</label>
      </div>
      <div className="familyMarriedInfo_text-field">
        <input type="text" required />
        <label>Mother-in-Law's Name</label>
      </div>
      
    </div>
  );
};

export default FamilyMarried;
