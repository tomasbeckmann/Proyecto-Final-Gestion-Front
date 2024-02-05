import React, { useState } from 'react';
import '/workspaces/Proyecto-Final-Gestion-Front/src/css/fileupload.css';

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setIsActive(true);
    viewFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsActive(true);
    dragTextRef.current.textContent = 'Release to Upload File';
  };

  const handleDragLeave = () => {
    setIsActive(false);
    dragTextRef.current.textContent = 'Drag & Drop to Upload File';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    viewFile(droppedFile);
  };

  const viewFile = (file) => {
    const fileType = file.type;
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

    if (validExtensions.includes(fileType)) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileURL = fileReader.result;
        const imgTag = <img src={fileURL} alt="image" />;
        setFile(null);
        setIsActive(false);
        dragTextRef.current.textContent = 'Drag & Drop to Upload File';
        dropAreaRef.current.innerHTML = imgTag;
      };
      fileReader.readAsDataURL(file);
    } else {
      alert('This is not an Image File!');
      setIsActive(false);
      dragTextRef.current.textContent = 'Drag & Drop to Upload File';
    }
  };

  const dropAreaRef = React.createRef();
  const dragTextRef = React.createRef();
  const inputRef = React.createRef();

  return (
    <div
      className={filebody `drag-image ${isActive ? 'active' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      ref={dropAreaRef}
    >
      <div className="icon">
      <i className="fa-solid fa-cloud-arrow-up" />
      </div>
      <h6 ref={dragTextRef}>Drag & Drop File Here</h6>
      <span>OR</span>
      <button onClick={handleButtonClick}>Browse File</button>
    </div>
  );
};