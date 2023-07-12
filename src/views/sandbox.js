import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import CompanyProfileOverview from '../components/company-profile-overview'
import './sandbox.css'

const Sandbox = (props) => {
  return (
    <div className="sandbox-container">
      <Helmet>
        <title>sandbox - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="sandbox - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="sandbox-container01">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name7"></MenuSidebar>
        <div className="sandbox-container02">
          <div className="sandbox-container03 border-B shadow-bottom">
            <div className="sandbox-container04">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="sandbox-icon"
              >
                <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
              </svg>
              <input
                type="text"
                placeholder="Quick Search..."
                className="input"
              />
            </div>
            <div className="sandbox-container05">
              <div className="sandbox-container06">
                <svg viewBox="0 0 1024 1024" className="sandbox-icon2">
                  <path d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"></path>
                </svg>
              </div>
              <div className="sandbox-container07">
                <div className="sandbox-container08">
                  <span>Daniel D.</span>
                </div>
                <div className="sandbox-container09 border-L">
                  <div className="sandbox-container10">
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg4NTkyODg3fDA&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="sandbox-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CompanyProfileOverview></CompanyProfileOverview>
        </div>
      </div>
    </div>
  )
}

export default Sandbox
