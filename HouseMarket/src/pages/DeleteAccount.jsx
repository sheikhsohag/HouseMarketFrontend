import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DeleteAccountFetch } from '../redux/productSlice';

function DeleteAccount() {
  const [confirmation, setConfirmation] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get loading and error states from Redux
  // const success  = useSelector((state) => state);
  const {error, isLoading, success}  = useSelector((state) => state.deleteAccount);


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    await dispatch(DeleteAccountFetch(currentPassword));
  };

  if(success)
  {
    localStorage.clear();
    window.location.reload();
    navigate('/'); 
  }

  

  return (
    <div className="container mt-5">
      <h2>Delete Account</h2>

      {error && <p className="alert alert-danger">{error}</p>}
      {success && <p className="alert alert-success">Account successfully deleted.</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="confirmation">Are you sure you want to delete your account?</label>
          <input
            type="checkbox"
            id="confirmation"
            className="form-check-input"
            onChange={(e) => setConfirmation(e.target.checked)}
            required
          />
          <label className="form-check-label" htmlFor="confirmation">
            Yes, I want to delete my account.
          </label>
        </div>

        {
          confirmation && (        
          <div className='my-4'>
            <label htmlFor="password">Enter your current password to confirm:</label>
              <input
                type="password"
                id="password"
                className="form-control w-25"
                required
                onChange={(e)=>setCurrentPassword(e.target.value)}
              />
            </div>
            )
        }

        <button type="submit" className="btn btn-danger">
          Delete Account
        </button>
      </form>
    </div>
  );
}

export default DeleteAccount;
