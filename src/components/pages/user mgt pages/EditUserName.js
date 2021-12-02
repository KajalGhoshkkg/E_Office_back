import React from 'react'
import { ReactComponent as CloseBtn } from "../../../img/closeBtnIcon.svg";
import './editUserName.css'

const EditUserName = () => {
    return (
        <div className="addUserPage_container">
        <div className='flex justify_spc_btn align_center'>
          <div>
            <p>Edit Username</p>
          </div>
          <div>
            <CloseBtn className='addUserPage_container_clsBtn' fill='#333333'/>
          </div>
        </div>
        <div>
          <div class="editUserName_text-field">
            <input type="text" required />
            <label>User name</label>
          </div>
        </div>
        <div className='editUserNamePage_container_BtnField flex justify_center'>
            <button className='editUserNamePage_container_BtnField_cancelBtn'>Cancel</button>
            <button className='editUserNamePage_container_BtnField_creatBtn'>Create</button>
        </div>
      </div>
    )
}

export default EditUserName
