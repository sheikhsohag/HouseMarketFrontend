import axios from 'axios';

const logout = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    
    // Make sure the refresh token exists in localStorage
    if (!refreshToken) {
      console.log('No refresh token found');
      return;
    }

    // Send the logout request
    const response = await axios.post('/api/logout/', {
      refresh_token: refreshToken
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Send the access token in the header
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    if (response.status === 205) {
      console.log('Logout successful');
      // Remove tokens from localStorage after successful logout
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      window.location.href = '/login';
    }

  } catch (error) {
    console.log('logout not working', error);
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized: Check if access token is still valid');
    }
  }
};

export default logout;
