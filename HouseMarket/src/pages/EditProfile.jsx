import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, updateProfile } from "../redux/productSlice";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { profile } = useSelector((state) => state.profile);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    role: "",
    profile_image: null,
    street_address: "",
    city: "",
    postal_code: "",
    house_holding_number: "",
    contact_number: "",
  });

  // Load profile data when component mounts
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  // Update form state when profile data changes
  useEffect(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        gender: profile.gender || "",
        role: profile.role || "customer",
        street_address: profile.street_address || "",
        city: profile.city || "",
        postal_code: profile.postal_code || "",
        house_holding_number: profile.house_holding_number || "",
        contact_number: profile.contact_number || "",
      });
    }
  }, [profile]);



  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file change for profile image
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_image: e.target.files[0],
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = new FormData();
    for (const key in formData) {
      updatedProfile.append(key, formData[key]);
    }

    dispatch(updateProfile(updatedProfile)); // Update profile action
    navigate("/customer/dashboard"); // Navigate back to profile page after updating
  };

  return (
    <>
      <div className="container w-50">
        <div className="container mt-5">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option >Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="customer">Customer</option>
              </select>
            </div>

            <div className="form-group">
              <label>Street Address</label>
              <input
                type="text"
                className="form-control"
                name="street_address"
                value={formData.street_address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="text"
                className="form-control"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>House Holding Number</label>
              <input
                type="text"
                className="form-control"
                name="house_holding_number"
                value={formData.house_holding_number}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input
                type="text"
                className="form-control"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
