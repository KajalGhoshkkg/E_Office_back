import React, { useState } from "react";
import "./familyInfo.css";
import FamilyMarried from "./FamilyMarried";
import FamilyUnmarried from "./FamilyUnmarried";

const FamilyInfo = ({setFamilySaveBtnValue}) => {
  const [familyPage, setFamilyPage] = useState("married");
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setFamilyPage(value);
    setIsChecked(!isChecked);
  };

  return (
    <div className="familyInfo_container">
      <p>Please fill up all the fields</p>
      <div className="maritual_status flex align_center">
        <p>Maritual Status:</p>
        <div className="flex align_center">
          <input
            checked={isChecked}
            type="radio"
            name="marital_status"
            value="married"
            onChange={handleChange}
          />
          <label>Married</label>
          <input
            checked={!isChecked}
            type="radio"
            name="marital_status"
            value="unmarried"
            onChange={handleChange}
          />
          <label>Unmarried</label>
        </div>
      </div>
      <div>
        {familyPage === "married" ? <FamilyMarried /> : <FamilyUnmarried />}
      </div>
      <div>
              <button
                onClick={() => setFamilySaveBtnValue(true)}
                className="formPage_saveBtn"
              >
                Save
              </button>
            </div>
    </div>
  );
};

export default FamilyInfo;
