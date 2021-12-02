import React from "react";
import { Link } from "react-router-dom";
import "./personalMgtPage.css";

const PersonalMgtPage = () => {
  return (
    <div className="personalMgtPage_container_potioner flex justify_center">
      <div className="personalMgtPage_container">
        <div className="personalMgtPage_container_btns flex ">
          <div>
            <Link to="/admin/dataentry">
              <button>Data Entry</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Posting In</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Posting Out</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>List of Officers</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Posting Records</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Course Records</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Leave Records</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Mov Records</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Medical Records</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Pet</button>
            </Link>
          </div>
          <div>
            <Link >
              <button>Update Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalMgtPage;
