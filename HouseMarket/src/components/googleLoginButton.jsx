import GoogleButton from "react-google-button";


const onGoogleLoginSuccess = () => {
  const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
  const REDIRECT_URI = 'auth/api/login/google/';

  const scope = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ].join(' ');

  const params = {
    response_type: 'code',
    client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,  // Corrected
    redirect_uri: `${process.env.REACT_APP_BASE_API_URL}/${REDIRECT_URI}`,  // Corrected
    prompt: 'select_account',
    access_type: 'offline',
    scope
  };
  
  const urlParams = new URLSearchParams(params).toString();
  window.location = `${GOOGLE_AUTH_URL}?${urlParams}`;
};

const GoogleLoginButton = () => {
  return (
    <div className="google-button-container">
      <GoogleButton onClick={onGoogleLoginSuccess} label="Sign in with Google"/>
    </div>
  );
};

export default GoogleLoginButton;
