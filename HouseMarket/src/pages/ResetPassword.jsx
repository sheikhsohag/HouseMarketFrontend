import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ChangePassword } from "../redux/productSlice";
import Loader from "../components/Loader";

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [somethingWrong, setSomethingWrong] = useState(false);

  const [data, setData] = useState({
    current_password: "",
    new_password: "",
    re_new_password: "",
  });

  const { isLoading, error, success } = useSelector((state) => state.PasswordChange);

  // Handle input change
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Dispatch the change password action and wait for the result
      const result = await dispatch(ChangePassword(data));
  
      // Check if the change was successful
      if (ChangePassword.fulfilled.match(result)) {
        // Password change successful
        localStorage.clear();
        navigate("/login");
      } else if (ChangePassword.rejected.match(result)) {
        // Handle the error if the password change failed
        console.error("Password change failed:", result.payload);
        setSomethingWrong(true); // Show error message
      }
    } catch (error) {
      // Handle any other unexpected errors
      console.error("An error occurred:", error);
      setSomethingWrong(true);
    }
  };
  

  return (
    <div className="m-5">
      {
        isLoading && <Loader/>
      }  
      {somethingWrong && (
        <p className="alert alert-danger" role="alert">
          Something went wrong! Please try again with another password.
        </p>
      )}

      <div className="d-flex justify-content-center">
        <h2>Reset Password</h2>
      </div>

      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="current_password" className="form-label">
              Current Password
            </label>
            <input
              type="password"
              name="current_password"
              id="current_password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="new_password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="form-control"
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="re_new_password" className="form-label">
              Confirm New Password
            </label>
            <input
              type="password"
              name="re_new_password"
              id="re_new_password"
              className="form-control"
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
