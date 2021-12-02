import React, { useState, useCallback,useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { ReactComponent as DradDropIcon } from "../../../../img/dragDropIcon.svg";
import { ReactComponent as UploadIcon } from "../../../../img/UploadIcon.svg";
import "./uploadPhoto.css";
// import cuid from "cuid";

export const UploadPhoto = ({ setPhotoSaveBtnValue }) => {
  const [files, setFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpeg",
  });
  const Image = files.map(file => (
    <div className='Image' key={file.name}>
      <div className='ImageInner'>
        <img
          src={file.preview}
          className='img'
          alt=''
        />
      </div>
    </div>
  ));
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="drag_drop_container flex justify_center algin_center">
      <p>Please upload your Image</p>
      <div
        className={
          "drag_drop_area flex justify_center align_center " +
          (isDragReject === true ? "borderColorWrong" : "") +
          (isDragAccept === true ? "borderColorRight" : "")
        }
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <DradDropIcon />
        {isDragReject ? (
          <p className="dragDrop_warning">Accepts Only .JPG files !!</p>
        ) : (
          <div className="conditional_drag_drop_area flex justify_center align_center">
            <p> Drag & Drop here an image</p>
            <h3>or</h3>
            <p className="uploadImageSection">
              <UploadIcon />
              Upload an Image
            </p>
          </div>
        )}
      </div>
      <aside className='ImageContainer'>
        {Image}
      </aside>
      <div>
        <button
          onClick={() => setPhotoSaveBtnValue(true)}
          className="formPage_saveBtn"
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default UploadPhoto;
