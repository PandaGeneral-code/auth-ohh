import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const App = () => {
  const {
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await getAccessTokenSilently({});
      console.log(accessToken);
    };

    getAccessToken();
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <pre>{JSON.stringify({ user }, null, 2)}</pre>
    </div>
  );
};

export default App;
