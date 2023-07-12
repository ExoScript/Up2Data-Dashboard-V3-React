import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import './sandbox1.css'

const Sandbox1 = (props) => {
  return (
    <div className="sandbox1-container">
      <Helmet>
        <title>sandbox1 - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="sandbox1 - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="sandbox1-container01">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name9"></MenuSidebar>
        <div className="sandbox1-container02 shadow-box">
          <div className="sandbox1-container03 gradient2 border-B shadow-bottom">
            <div className="sandbox1-container04 shadow-box">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxvZ298ZW58MHx8fHwxNjg5MTI5MzYwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="sandbox1-image"
              />
              <div className="sandbox1-container05"></div>
            </div>
            <div className="sandbox1-container06">
              <div className="sandbox1-container07 border-B">
                <div className="sandbox1-container08">
                  <span className="sandbox1-text opacity-90">Company Name</span>
                  <div className="sandbox1-container09">
                    <span className="opacity-90 font-size-10">Text</span>
                    <div className="sandbox1-container10"></div>
                    <span className="opacity-90 font-size-10">Text</span>
                    <div className="sandbox1-container11"></div>
                    <span className="opacity-90 font-size-10">Text</span>
                  </div>
                </div>
                <div className="sandbox1-container12">
                  <div className="button-gradient">
                    <span className="sandbox1-text04">Message</span>
                  </div>
                  <div className="button-white">
                    <span className="sandbox1-text05 opacity-90">
                      Remove Tracking
                    </span>
                  </div>
                </div>
              </div>
              <div className="sandbox1-container15">
                <div className="sandbox1-container16">
                  <span className="sandbox1-text06 opacity-70 font-size-10">
                    Position
                  </span>
                  <span className="sandbox1-text07 opacity-90">
                    Current position
                  </span>
                </div>
                <div className="sandbox1-container17">
                  <span className="sandbox1-text08 opacity-70 font-size-10">
                    Status
                  </span>
                  <span className="sandbox1-text09 opacity-90">Employed</span>
                </div>
                <div className="sandbox1-container18">
                  <span className="sandbox1-text10 opacity-70 font-size-10">
                    Level
                  </span>
                  <span className="sandbox1-text11 opacity-90">Employee</span>
                </div>
                <div className="sandbox1-container19">
                  <span className="sandbox1-text12 opacity-70 font-size-10">
                    Last scan
                  </span>
                  <span className="sandbox1-text13 opacity-90">21.02.2023</span>
                </div>
                <div className="sandbox1-container20">
                  <span className="sandbox1-text14 opacity-70 font-size-10">
                    Next scan
                  </span>
                  <span className="sandbox1-text15 opacity-90">28.02.2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sandbox1-container21">
            <div className="sandbox1-container22">
              <div className="sandbox1-container23">
                <div className="sandbox1-container24">
                  <span className="sandbox1-text16 font-size-10">Text</span>
                </div>
                <div className="sandbox1-container25 opacity-90"></div>
              </div>
              <div className="sandbox1-container26">
                <div className="sandbox1-container27">
                  <span className="sandbox1-text17 opacity-40 font-size-10">
                    Text
                  </span>
                </div>
              </div>
            </div>
            <div className="sandbox1-container28">
              <div className="sandbox1-container29">
                <div className="sandbox1-container30">
                  <span className="sandbox1-text18 font-size-10">Text</span>
                </div>
                <div className="sandbox1-container31 opacity-90"></div>
              </div>
              <div className="sandbox1-container32">
                <div className="sandbox1-container33">
                  <span className="sandbox1-text19 opacity-40 font-size-10">
                    Text
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sandbox1
