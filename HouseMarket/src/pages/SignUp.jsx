import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    profileImage: null,
    address: '',
    gender: '',
    role: 'customer',
    password: '',
    confirmPassword: ''
  });

  const { email, firstName, lastName, profileImage, address, gender, role, password, confirmPassword } = formData;

  const handleChange = (e) => {
    if (e.target.name === 'profileImage') {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const signUpData = new FormData();
    signUpData.append('email', email);
    signUpData.append('first_name', firstName);
    signUpData.append('last_name', lastName);
    signUpData.append('gender', gender);
    signUpData.append('role', role);
    signUpData.append('password', password);
    signUpData.append('re_password', password);

    try {
      const response = await axios.post('/api/auth/users/', signUpData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('User registered:', response.data);
      window.location.href = '/activate/:uidb64/:token';
    } catch (error) {
      console.error('Error during registration:', error.response.data);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mb-5 mt-3">
      <div className="signup-page col-sm-8 col-md-6 col-lg-4">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group mb-3">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Gender:</label>
            <select name="gender" className="form-control" value={gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Role:</label>
            <select name="role" className="form-control" value={role} onChange={handleChange}>
              <option value="customer">Customer</option>
              <option value="restraurant">Restraurant</option>
              
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
