import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { render } from "react-dom";
import App from "./App";

render(
  <React.StrictMode>
    <Auth0Provider
      audience="https://dev-2mz9q2mk.au.auth0.com/api/v2/"
      cacheLocation="localstorage"
      domain="dev-2mz9q2mk.au.auth0.com"
      clientId="pZTzwN3yvZzFRscndcQFI3NSGiMu61e4"
      redirectUri={window.location.origin}
      scope="read:current_user update:current_user_metadata"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
