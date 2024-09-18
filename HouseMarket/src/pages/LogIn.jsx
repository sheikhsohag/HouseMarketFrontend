import axios from "axios";
import { useState } from "react";

// Define the Login function.
const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create the submit method.
  const submit = async e => {
    e.preventDefault();
    const user = {
      username: username,
      password: password
    };

    try {
      // Create the POST request to login
      const { data } = await axios.post('/api/token/', user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      // Initialize the access & refresh token in localStorage
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);

      // Set Authorization header for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;

      // Redirect to home after successful login
      window.location.href = '/';
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed, please check your credentials.");
    }
  };

  return (
    <div className="login-container mt-5">
        <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              className="form-control mt-1"
              placeholder="Enter Username"
              name="username"
              type="text"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
            />

          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    </div>


  );
};

export default LogIn;
