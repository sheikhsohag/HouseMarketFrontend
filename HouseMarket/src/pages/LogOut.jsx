import axios from 'axios';

const logout = async () => {
  
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');

  window.location.href = '/login'
   

};

export default logout;
