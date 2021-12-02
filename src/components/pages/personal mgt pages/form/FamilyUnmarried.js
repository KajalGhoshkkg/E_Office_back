import React from 'react'
import './familyUnmarried.css'

const FamilyUnmarried = () => {
    return (
        <div className='familyUnmarried_container flex justify_spc_btn'>
            <div className="familyUnmarriedInfo_text-field">
        <input type="text" required />
        <label>Father's Name</label>
      </div>
      <div className="familyUnmarriedInfo_text-field">
        <input type="text" required />
        <label>Mother's Name</label>
      </div>
      <div className="familyUnmarriedInfo_text-field">
        <input type="text" required />
        <label>Name of the Next Kin</label>
      </div>
      <div className="familyUnmarriedInfo_text-field">
        <input type="text" required />
        <label>Contact of the Next Kin</label>
      </div>
        </div>
    )
}

export default FamilyUnmarried
