import React, { useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './login-box.css'

const LoginBox = (props) => {
  const [remeber, setRemeber] = useState(false)
  const [loading, setLoading] = useState(false)
  const [login_error, setLogin_error] = useState(false)
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
      {login_error && (
        <div className="login-box-container14 border-T">
          <svg viewBox="0 0 1024 1024" className="login-box-icon4 opacity-70">
            <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
          </svg>
          <div className="login-box-container15">
            <span className="login-box-text13 opacity-90">
              {props.error_title}
            </span>
            <span className="login-box-text14 opacity-90">
              {props.error_text}
            </span>
          </div>
        </div>
      )}
      <div className="login-box-container16 border-T">
        <div className="login-box-container17 button-gradient">
          {!loading && <span>Login</span>}
          {loading && (
            <Player
              src="https://lottie.host/74c249cd-4aee-4698-a570-06bb913d7f0d/aiteJNhVll.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="login-box-lottie-node"
            ></Player>
          )}
        </div>
      </div>
    </div>
  )
}

LoginBox.defaultProps = {
  error_text: 'Please check your Client-ID and Secret-Key.',
  error_title: 'Something has gone wrong!',
}

LoginBox.propTypes = {
  error_text: PropTypes.string,
  error_title: PropTypes.string,
}

export default LoginBox
