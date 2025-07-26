import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="157401225400-5al4habd7us9b4bf0ebgmceu7ma2lh4a.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);


