import React, { useState } from "react";
import "./formPage.css";
import { ReactComponent as InfoIcon } from "../../../../img/infoIcon.svg";
import ServiceInfo from "./ServiceInfo";
import PersonalInfo from "./personalInfo";
import FamilyInfo from "./FamilyInfo";
import UploadPhoto from "./UploadPhoto";
import { ReactComponent as BlueTickIcon } from "../../../../img/blueTickIcon.svg";

const FormPage = () => {
  const [saveServiceBtnValue, setServiceSaveBtnValue] = useState(false);
  const [savePersonalBtnValue, setPersonalSaveBtnValue] = useState(false);
  const [saveFamilyBtnValue, setFamilySaveBtnValue] = useState(false);
  const [savePhotoBtnValue, setPhotoSaveBtnValue] = useState(false);
  const [page, setPage] = useState(0);
  const FormTitle = [
    "serviceInfo",
    "personalInfo",
    "familyInfo",
    "uploadPhoto",
  ];
  const DisplayPage = () => {
    if (page === 0) {
      return <ServiceInfo setServiceSaveBtnValue={setServiceSaveBtnValue} />;
    } else if (page === 1) {
      return <PersonalInfo setPersonalSaveBtnValue={setPersonalSaveBtnValue} />;
    } else if (page === 2) {
      return <FamilyInfo setFamilySaveBtnValue={setFamilySaveBtnValue} />;
    } else if (page === 3) {
      return <UploadPhoto setPhotoSaveBtnValue={setPhotoSaveBtnValue} />;
    } else {
      return null;
    }
  };
  return (
    <div className="multiStepForm_page_potioner flex justify_center">
      <div className="multiStepForm_container  ">
      <div className="multiStepForm_title">
        <p>Data Entry Form</p>
      </div>
      <div className="multiStepForm_mainBody flex">
        <div className="multiStepForm_mainBody_leftPart">
          <div className="multiStepForm_mainBody_leftPart_header">
            <p>Follew the simple 04 steps to complete the form</p>
          </div>
          <div className="multiStepForm_mainBody_leftPart_stepsCount flex ">
            <p
              className={
                page === 0
                  ? "activeSpanColor flex align_center"
                  : "default  flex align_center"
              }
            >
              {saveServiceBtnValue ? (
                <BlueTickIcon />
              ) : (
                <span className="activeSpanborder">1</span>
              )}
              <span className={saveServiceBtnValue ? "savedPTagCss" : null}>
                Service Information
              </span>
            </p>
            <p
              className={
                page === 1
                  ? "activeSpanColor flex align_center"
                  : "default  flex align_center"
              }
            >
              {savePersonalBtnValue ? (
                <BlueTickIcon />
              ) : (
                <span className="activeSpanborder">2</span>
              )}
              <span className={savePersonalBtnValue ? "savedPTagCss" : null}>
                Personal Information
              </span>
            </p>
            <p
              className={
                page === 2
                  ? "activeSpanColor flex align_center"
                  : "default  flex align_center"
              }
            >
              {saveFamilyBtnValue ? (
                <BlueTickIcon />
              ) : (
                <span className="activeSpanborder">3</span>
              )}
              <span className={saveFamilyBtnValue ? "savedPTagCss" : null}>
                Family Information
              </span>
            </p>
            <p
              className={
                page === 3
                  ? "activeSpanColor flex align_center"
                  : "default  flex align_center"
              }
            >
              {savePhotoBtnValue ? (
                <BlueTickIcon />
              ) : (
                <span className="activeSpanborder">4</span>
              )}
              <span className={savePhotoBtnValue ? "savedPTagCss" : null}>
                Upload a Photo
              </span>
            </p>
          </div>
          <div className="multiStepForm_mainBody_leftPart_footer flex ">
            <InfoIcon fill="#595959" />
            <p>For more info click here</p>
          </div>
        </div>
        <div className="multiStepForm_mainBody_rightpart ">
          <div className="multiStepForm_mainBody_rightpart_formDisplay flex">
            {DisplayPage()}
          </div>
          <div className="multiStepForm_mainBody_rightpart_buttonPart flex justify_spc_btn align_center">
            <div>
              <button
                className="formPage_prevBtn"
                disabled={page === 0}
                onClick={() => {
                  setPage((currentPage) => currentPage - 1);
                }}
              >
                Prev
              </button>
              <button
                className="formPage_nextBtn"
                onClick={() => {
                  if (page === FormTitle.length - 1) {
                    alert("form submitted");
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                {page === FormTitle.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormPage;
