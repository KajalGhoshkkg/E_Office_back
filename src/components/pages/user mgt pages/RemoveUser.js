import React from 'react'
import './removeUser.css'

const RemoveUser = () => {
    return (
        <div className='removeUserPage_container'>
            <div className='removeUserPage_tile'>
                <p>Remove User</p>
            </div>
            <div className='removeUserPage_body flex justify_center align_center'>
                <p>Are you sure you want to remove this user?</p>
            </div>
            <div className='removeUserPage_body_btnFeilds flex justify_center align_center'>
                <button className='removeUserPage_body_btnFeilds_cancelbtn'>Cancel</button>
                <button className='removeUserPage_body_btnFeilds_removebtn'>Remove</button>
            </div>
        </div>
    )
}

export default RemoveUser
