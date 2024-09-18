import axios from "axios";

let refresh = false;

axios.interceptors.response.use(
  (response) => response, // If the response is successful, return it.
  async (error) => {
    // Check if the error status is 401 and the refresh process is not already in progress
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      try {
        // Fetch the refresh token from local storage
        const refreshToken = localStorage.getItem('refresh_token');

        if (!refreshToken) {
          refresh = false;
          return Promise.reject(error);
        }

        // Send request to refresh the access token
        const response = await axios.post('/api/token/refresh/', {
          refresh: refreshToken
        }, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });

        // If token refresh is successful, update the tokens in local storage
        if (response.status === 200) {
          const { access, refresh: newRefreshToken } = response.data;

          // Update axios defaults with the new access token
          axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

          // Save new access and refresh tokens
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', newRefreshToken);

          // Retry the original request with the updated access token
          error.config.headers['Authorization'] = `Bearer ${access}`;
          return axios(error.config);
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Handle failed refresh (e.g., redirect to login page)
      } finally {
        refresh = false; // Reset the refresh state
      }
    }

    return Promise.reject(error);
  }
);
