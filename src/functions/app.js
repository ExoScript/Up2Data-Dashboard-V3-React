import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { authStatus } from '../database/app'

export function useFunctions() {
  const location = useLocation();

  const [clientID, setClientID] = useState(
    localStorage.getItem("clientID") || ""
  );
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );

  const eventChange = (event) => {
    const id = event.target.id;
    switch (id) {
      case 'clientID':
        setClientID(event.target.value);
        console.log(clientID);
        break;
      case 'secretKey':
        setSecretKey(event.target.value);
        break;
      default:
    }
  };

  const userAuth = async () => {
    if (clientID && secretKey) {
      const status = await authStatus();
      alert(status);
    }
  };

  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
  }, [clientID, secretKey]);

  // Weitere Funktionen und Zustände hier hinzufügen...

  return {
    clientID,
    setClientID,
    secretKey,
    setSecretKey,
    location,
    eventChange,
    userAuth,
  };
}
