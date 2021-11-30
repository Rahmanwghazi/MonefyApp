import {
    authDomain,
    authClientId
  } from '../utils/constants';
  
  export const AUTH_CONFIG = {
    domain: authDomain,
    clientId: authClientId,
    callbackUrl: 'http://localhost:3000/callback'
    // callbackUrl: 'https://monefy-app.netlify.app/callback'
  };
  