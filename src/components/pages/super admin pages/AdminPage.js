import React from "react";
import "./adminPage.css";
import { useHistory } from "react-router-dom";

const AdminPage = () => {
  const history = useHistory();
  return (
    <div className='superAdminPage_Positioner flex justify_center align_center' >
    <div className="superAdmin_partContainer flex justify_center align_center">
      <div className="superAdmin_partContainer_btnPart">
        <button onClick={() => history.push("/superadmin/createbase")}>
          Create Base
        </button>
        <button onClick={() => history.push("/superadmin/createwing")}>
          Create Wing
        </button>
        <button onClick={() => history.push("/superadmin/createadmin")}>
          Create Admin
        </button>
      </div>
      <div className="baseTable_part">
        <div className="baseTable_part_title">Bases</div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>base name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>base name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>base name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="wingTable_part">
        <div className="baseTable_part_title">Wings</div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>wing name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>wing name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="baseTable_part_details flex align_center justify_spc_btn">
          <div className="pDiv">
            <p>wing name</p>
          </div>
          <div className="baseTable_part_details_btn part flex">
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 9.50035V12H2.99965L10.372 4.62769L7.87231 2.12804L0.5 9.50035ZM12.305 2.69463C12.565 2.43466 12.565 2.01472 12.305 1.75476L10.7452 0.194973C10.4853 -0.064991 10.0653 -0.064991 9.80537 0.194973L8.58554 1.4148L11.0852 3.91446L12.305 2.69463Z"
                  fill="#ffffff"
                />
              </svg>
            </button>
            <p>|</p>
            <button>
              <svg
                width="13"
                height="12"
                viewBox="0 0 9 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642857 10.6667C0.642857 11.4 1.22143 12 1.92857 12H7.07143C7.77857 12 8.35714 11.4 8.35714 10.6667V2.66667H0.642857V10.6667ZM9 0.666667H6.75L6.10714 0H2.89286L2.25 0.666667H0V2H9V0.666667Z"
                  fill="red"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminPage;
