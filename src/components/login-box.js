import React, { useState, useEffect } from 'react'
import { authStatus } from '../database/app'

import { Player } from '@lottiefiles/react-lottie-player'

import './login-box.css'

const LoginBox = (props) => {
  const [remeber, setRemeber] = useState(false)
  const [loading, setLoading] = useState(false)
  const [clientID, setClientID] = useState(
    localStorage.getItem("clientID") || ""
  );
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );

  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
  }, [clientID, secretKey]);


  const eventChange = (event) => {
    const id = event.target.id
    switch (id) {
      case 'clientID':
        setClientID(event.target.value);
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
      alert(status)
    };

  }



  return (
    <div className="login-box-login-box">
      <div className="login-box-container border-B shadow-bottom">
        <div className="login-box-container01 gradient">
          <span className="login-box-text">Login</span>
          <span className="login-box-text01">Now</span>
        </div>
        <span className="login-box-text02">
          <span>
            Welcome to
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="login-box-text04">Up2Data</span>
          <span>! Please login </span>
          <span>to</span>
          <br></br>
          <span>your account.</span>
        </span>
      </div>
      <div className="login-box-container02">
        <div className="login-box-container03">
          <div className="login-box-container04">
            <div className="login-box-container05">
              <span className="opacity-70 font-size-10">Client-ID:</span>
            </div>
            <div className="login-box-container06">
              <input
                onChange={eventChange}
                id="clientID"
                type="text"
                placeholder="Enter your Client-ID"
                className="login-box-textinput input"
              />
            </div>
          </div>
          <div className="login-box-container07">
            <div className="login-box-container08">
              <span className="opacity-70 font-size-10">Secret-Key:</span>
            </div>
            <div className="login-box-container09">
              <input
                onChange={eventChange}
                id="secretKey"
                value={secretKey}
                type="text"
                placeholder="Enter your Secret-Key"
                className="login-box-textinput1 input"
              />
            </div>
          </div>
        </div>
        <div className="login-box-container10">
          <div className="login-box-container11">
            <div
              onClick={() => setRemeber(!remeber)}
              className="login-box-container12"
            >
              {!remeber && (
                <svg viewBox="0 0 1024 1024" className="login-box-icon">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
              )}
              {remeber && (
                <div className="login-box-container13">
                  <svg viewBox="0 0 1024 1024" className="login-box-icon2">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                </div>
              )}
            </div>
            <span className="login-box-text11 opacity-90 font-size-10">
              Remember Me
            </span>
          </div>
          <span className="login-box-text12 opacity-70 font-size-10">
            Forget Secret-Key?
          </span>
        </div>
      </div>
      <div className="login-box-container14 border-T">
        <div onClick={userAuth} className="login-box-container15 button-gradient">
          {!loading && <span>Login</span>}
          {loading && (
            <div className="login-box-container16">
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_fyye8szy.json"
                loop
                speed="1"
                autoplay
                background="transparent"
                className="login-box-lottie-node"
              ></Player>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginBox
