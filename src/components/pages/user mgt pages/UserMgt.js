import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../../img/searchIcon.svg";
import { ReactComponent as PlusIcon } from "../../../img/plusIcon.svg";

import UserCard from "./UserCard";
import "./userMgt.css";

const UserMgt = () => {
  return (
    <div className='usermgt_potioner flex justify_center align_center'>
      <div className="userMgt_container">
        <div className="userMgt_container_nav flex justify_spc_btn align_center">
          <div className="userMgt_container_nav_pTag">
            <p>All users</p>
          </div>
          <div className="userMgt_container_nav_searchber flex">
            <SearchIcon fill='#333'/>
            <input type="text" placeholder="Search.." />
          </div>
          <Link to="/admin/adduser">
            <div className="userMgt_container_nav_addPart flex align_center">
              <PlusIcon fill='#0091EA'/>
              <p>New</p>
            </div>
          </Link>
        </div>
        <div className="userMgt_container_body flex">
          <div className="userMgt_container_cardContainer flex">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            {/* <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMgt;
