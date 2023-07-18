import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { authStatus } from '../database/app'


export function useFunctions() {
  const location = useLocation();
  const history = useHistory();

  const [remeber, setRemeber] = useState(false)
  const [loading, setLoading] = useState(false)
  const [login_error, setLogin_error] = useState(false)

  const [clientID, setClientID] = useState(
    localStorage.getItem("clientID") || ""
  );
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") || false
  );
  const [userContacts, setUserContacts] = useState(
    localStorage.getItem("userContacts") || ""
  );


  const eventChange = (event) => {
    const id = event.target.id;
    switch (id) {
      case 'clientID':
        setLogin_error(false);
        setClientID(event.target.value);
        break;
      case 'secretKey':
        setLogin_error(false);
        setSecretKey(event.target.value);
        break;
      default:
    }
  };

  const userAuth = async () => {
    if (clientID && secretKey) {
      setLoading(true);
      const status = await authStatus();
      setLoading(false);
      if (status) {
        setIsAuth(true);
        history.push('/dashboard');
      } else {
        history.push('/');
        setIsAuth(false);
        setLogin_error(true);
      }
    } else {
      setLogin_error(true);
    }
  };

  const checkAuth = async (login = false) => {
    const status = localStorage.getItem("isAuth")
    
    if (status == "true") {
      if(login){
        history.push('/dashboard');
      }
    } else {
      history.push('/');
    }
  };

  const logout = async () => {
    localStorage.clear();
    localStorage.setItem("isAuth", false);
    history.push('/');
  };

  const getList =  () => {
    const list = JSON.parse(userContacts)
    return list
  };


  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
  }, [clientID, secretKey]);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);


  // Weitere Funktionen und Zustände hier hinzufügen...

  return {
    remeber,
    setRemeber,
    loading,
    setLoading,
    login_error,
    setLogin_error,
    clientID,
    setClientID,
    secretKey,
    setSecretKey,
    location,
    eventChange,
    userAuth,
    checkAuth,
    logout,
    setIsAuth,
    getList
  };
}
