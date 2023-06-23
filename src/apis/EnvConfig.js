const EnvConfig = {
  CLIENTID: process.env.REACT_APP_CLIENT_ID,
  CLIENTSECRET: process.env.REACT_APP_CLIENT_SECRET,
  REDIRECTURL: process.env.REACT_APP_REDIRECT_URI,
  TOKENPOSTURL: process.env.REACT_APP_TOKEN_POST_URL,

  GMUIKISERVERURL: process.env.REACT_APP_GMUWIKI_SERVER_URL,

  CODEPOSTURL: process.env.REACT_APP_URL_CODE_POST_URL,
  WRITEPOSTURL: process.env.REACT_APP_WRITE_POST_URL,
  IMGPOSTURL: process.env.REACT_APP_IMG_POST_URL,
  REFRESHTOKENPATCHURL: process.env.REACT_APP_REFRESH_TOKEN_PATCH_URL,
  LOGOUTURL: process.env.REACT_APP_LOGOUT_URL,


};

export default EnvConfig;
