import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import './monitor.css'

const Monitor = (props) => {
  return (
    <div className="monitor-container">
      <Helmet>
        <title>Monitor - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Monitor - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="monitor-container01">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name5"></MenuSidebar>
        <div className="monitor-container02">
          <div className="monitor-container03 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="monitor-container04">
              <NotificationButton></NotificationButton>
              <ProfileButton></ProfileButton>
            </div>
          </div>
          <div className="monitor-container05 border-B">
            <div className="monitor-container06">
              <span className="monitor-text">Monitor</span>
              <span className="monitor-text01">Overview</span>
            </div>
          </div>
          <div className="monitor-container07">
            <Player
              src="https://assets3.lottiefiles.com/private_files/lf30_vnbcd4ev.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="monitor-lottie-node"
            ></Player>
            <div className="monitor-container08">
              <div className="monitor-container09">
                <div className="monitor-container10">
                  <span className="monitor-text02">
                    Under
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="monitor-text03">Construction</span>
                </div>
                <span className="monitor-text04">
                  <span>
                    We are currently in the development phase of this section
                    and are working hard to optimize it for you.
                  </span>
                  <br></br>
                  <span>
                    Please be patient while we finish the final touches.
                  </span>
                  <br></br>
                  <span>
                    Once the design is complete, we will notify you immediately.
                  </span>
                  <br></br>
                  <span>Thank you for your understanding and support!</span>
                </span>
              </div>
              <div className="monitor-container11">
                <div className="monitor-container12 gradient">
                  <span className="monitor-text12">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Monitor
