import React, { useState } from "react";
import "./adminMenu.css";
import { Link, Route } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../img/Logo.svg";
import { ReactComponent as DropDownIcon } from "../../img/DropDownIcon.svg";
import { ReactComponent as HomeIcon } from "../../img/homeIcon.svg";
import { ReactComponent as BellIcon } from "../../img/bellIcon.svg";
import { ReactComponent as UserIcon } from "../../img/userIcon.svg";
import { ReactComponent as SettingIcon } from "../../img/settingIcon.svg";
import { ReactComponent as LockIcon } from "../../img/lockIcon.svg";
import { ReactComponent as LogOutIcon } from "../../img/logoutIcon.svg";

import AdminPage from "../pages/super admin pages/AdminPage";
import UserMgt from "../pages/user mgt pages/UserMgt";
import AddUser from "../pages/user mgt pages/AddUser";
import PersonalMgtPage from "../pages/personal mgt pages/PersonalMgtPage";
import FormPage from "../pages/personal mgt pages/form/FormPage";

const AdminMenu = () => {
  const [activeUser, setActiveUser] = useState(false);
  const [activePers, setActivePers] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  return (
    <>
      <div className="adminpage flex ">
        <div className="sideNav flex">
          <div className="sideNav_logo">
            <LogoIcon fill="#fff" />
          </div>
          <Link to="/admin">
            <div className="sideNav_adminPanel flex">
              <HomeIcon fill="#fff" />
              <p>Admin Panel</p>
            </div>
          </Link>
          <div className="menu">
            <div
              className="menu_row flex"
              onClick={() => setActiveUser(!activeUser)}
            >
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex justify_spc_btn align_center">
                <div>
                  <p>User Mgt</p>
                </div>
                <div>
                  <DropDownIcon fill="#FFF" />
                </div>
              </div>
            </div>
            {activeUser ? (
              <>
                <Link to="/admin/usermgt">
                  <div className="menu_row flex submenu_margin">
                    <div className="menu_row_2 flex align_center">
                      <div>
                        <p>User</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="menu_row flex submenu_margin">
                  <div className="menu_row_2 flex align_center">
                    <div>
                      <p>Role</p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <div
              className="menu_row flex"
              onClick={() => setActivePers(!activePers)}
            >
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>Personal Mgt</p>
                </div>
                <div>
                  <DropDownIcon fill="#FFF" />
                </div>
              </div>
            </div>
            {activePers ? (
              <>
                <Link to="/admin/personalmgt">
                  <div className="menu_row flex submenu_margin">
                    <div className="menu_row_2 flex align_center">
                      <div>
                        <p>Officers</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="menu_row flex submenu_margin">
                  <div className="menu_row_2 flex align_center">
                    <div>
                      <p>Airmen</p>
                    </div>
                  </div>
                </div>
                <div className="menu_row flex submenu_margin">
                  <div className="menu_row_2 flex align_center">
                    <div>
                      <p>MODC (Air)</p>
                    </div>
                  </div>
                </div>
                <div className="menu_row flex submenu_margin">
                  <div className="menu_row_2 flex align_center">
                    <div>
                      <p>Civilians</p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <div className="menu_row flex">
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>Flag Mgt</p>
                </div>
              </div>
            </div>
            <div className="menu_row flex">
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>Inventory</p>
                </div>
              </div>
            </div>
            <div className="menu_row flex">
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>State</p>
                </div>
              </div>
            </div>
            <div className="menu_row flex">
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>Schedule</p>
                </div>
              </div>
            </div>
            <div className="menu_row flex">
              <HomeIcon fill="#fff" />
              <div className="menu_row_2 flex align_center">
                <div>
                  <p>Complain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_body">
          <div className="top_nav flex">
            <div className="top_nav_user">
              <p>admin panel</p>
            </div>
            <div className="icons_section flex align_center">
              <BellIcon fill="#2B2F33" />
              <p className="icons_section__Tag">|</p>
              <UserIcon fill="#2B2F33" />
              <p>user name</p>
              <DropDownIcon
                fill="#2B2F33"
                onClick={() => setActiveSubMenu(!activeSubMenu)}
              />
              {activeSubMenu ? (
                <>
                  <div className="topNav_subMenu">
                    <div className="topNav_subMenu_option align_center flex">
                      <SettingIcon fill="#2B2F33" />
                      <p>Settings</p>
                    </div>
                    <div className="topNav_subMenu_option align_center flex">
                      <LockIcon fill="#2B2F33" />
                      <p>Change Password</p>
                    </div>
                    <div className="topNav_subMenu_option_forLogout align_center flex">
                      <LogOutIcon fill="#EF5DA8" />
                      <p>Log Out</p>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div>
            <Route path="/admin" component={AdminMenu}>
              <Route exact path="/admin" component={AdminPage} />
              <Route path="/admin/usermgt" component={UserMgt} />
              <Route path="/admin/adduser" component={AddUser} />
              <Route path="/admin/personalmgt" component={PersonalMgtPage} />
              <Route path="/admin/dataentry" component={FormPage} />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
