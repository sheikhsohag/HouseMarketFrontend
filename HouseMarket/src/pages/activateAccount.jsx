import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Loader from '../components/Loader'; // Assuming you have a Loader component

function ActivateAccount() {
  const { uidb64, token } = useParams();

  // State to manage loading, error, and success messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    setLoading(true); // Start loading state
    setError(null); // Reset error state
    setMessage(null); // Reset success message state

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/users/activation/', {
        uid: uidb64,
        token: token,
      });

      console.log('Activation successful:', response.data);
      // Handle success (e.g., show success message)
      setMessage("Activation successful");

      setInterval(()=>{
          window.location.href = '/login';
      }, 1000)

    } catch (err) {
      // Check if error response exists
      if (err.response) {
        setError(err.response.data.detail || 'Activation failed');
      } else {
        setError('Network error or activation failed');
      }
      console.error('Error during activation:', err);
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="activationButton text-center">
          {loading ? (
            <Loader /> // Show loader if loading
          ) : (
            <>
              <h2 className='p-3'>Welcome! To Our Shopping Place!</h2>
              <div className='d-flex justify-content-center'>
                <button type='button' onClick={handleSubmit} className='btn btn-primary btn-lg'>
                  Activate Account
                </button>
              </div>
            </>
          )}
          {error && <p className="text-danger">{error}</p>} {/* Show error message if exists */}
          {message && <p className="text-success">{message}</p>} {/* Show success message if exists */}
        </div>
      </div>
    </div>
  );
}

export default ActivateAccount;
