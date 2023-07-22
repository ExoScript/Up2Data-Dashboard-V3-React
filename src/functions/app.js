import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { authStatus, client_profil, getList, secretKey_validation } from '../database/app'


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

  const list = ({ _type, _id, _filter }) => {
    // if (type == "company") {
    //   let items;
    //   if(id){
    //     items = getList('company');
    //   }
    //   const test = getList('company');
    //   return test
    // }
    // if (type == "contact") {
    //   const test = getList('contact');
    //   return test
    // }

    return getList({ type: _type, id: _id, filter: _filter });


  }

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

  const client_authentication = async () => {
    if (clientID && secretKey) {
      setLoading(true);
      const status = await secretKey_validation();
      if (status) {
        setIsAuth(true);
        await client_profil();
        setLoading(false);
        history.push('/dashboard');
      } else {
        history.push('/');
        setIsAuth(false);
        setLoading(false);
        setLogin_error(true);
      }
    } else {
      setLogin_error(true);
    }
  };



  const check_authentication = async (login = false) => {
    const status = localStorage.getItem("isAuth")
    if (status == "true") {
      if (login) {
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

  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
  }, [clientID, secretKey]);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

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
    client_authentication,
    check_authentication,
    logout,
    setIsAuth,
    list
  };
}
