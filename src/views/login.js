import React from 'react'

import { Helmet } from 'react-helmet'

import LoginBox from '../components/login-box'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="login-container01">
        <div className="login-container02 gradient">
          <div className="login-container03 border-B">
            <div className="login-container04">
              <img
                alt="image"
                src="/up2datalogo%20%5B1%5D-200h-200h.png"
                className="login-image"
              />
            </div>
            <span className="login-text">Up2Data.io</span>
          </div>
          <div className="login-container05">
            <div className="login-container06">
              <div className="login-container07">
                <span className="login-text1">Customer</span>
                <span className="login-text2">Dashboard</span>
              </div>
              <div className="login-container08">
                <span className="login-text3">
                  Comprehensive data management and system control are vital for
                  businesses to optimize processes, make informed decisions, and
                  ensure regulatory compliance. Robust solutions enable
                  efficient handling, storage, and analysis of data, empowering
                  organizations to enhance productivity, mitigate risks, and
                  achieve sustainable growth in the digital era.
                </span>
              </div>
            </div>
          </div>
          <div className="login-container09 border-T"></div>
        </div>
        <div className="login-container10">
          <div className="login-container11"></div>
          <div className="login-container12">
            <LoginBox></LoginBox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
