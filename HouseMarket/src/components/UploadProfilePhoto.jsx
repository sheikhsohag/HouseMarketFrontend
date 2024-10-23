import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateProfile } from "../redux/productSlice";

function UploadProfilePhoto({ profileUploadedHandle }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to store the selected file
  const [selectFile, setSelectFile] = useState(null);
  const[upload, setUpload] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setSelectFile(e.target.files[0]); // Store the selected file
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    if (!selectFile) {
      alert("Please select a file");
      return;
    }

    // Dispatch the updateProfile action with the selected file
    try {
      await dispatch(updateProfile({ profile_image: selectFile })).unwrap(); // Use unwrap to handle errors
      profileUploadedHandle(true);
      navigate("/user/profile"); // Navigate after successful upload
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      alert("Failed to upload photo, please try again.");
    }
  };

  return (
    <div>
      <form className="mt-3" onSubmit={handleSubmit}>
        <input
          type="file"
          name="profile_image"
          id="profilePhoto"
          accept="image/*"
          required
          onChange={handleFileChange} // Set file on change
        />
        <button type="submit" className="btn btn-primary mt-2">
          Save
        </button>
      </form>
    </div>
  );
}

export default UploadProfilePhoto;
