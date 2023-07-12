import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import './import-exports.css'

const ImportExports = (props) => {
  return (
    <div className="import-exports-container">
      <Helmet>
        <title>ImportExports - Up2Data-Dashboard-V3</title>
        <meta
          property="og:title"
          content="ImportExports - Up2Data-Dashboard-V3"
        />
      </Helmet>
      <div className="import-exports-container01">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name3"></MenuSidebar>
        <div className="import-exports-container02">
          <div className="import-exports-container03 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="import-exports-container04">
              <NotificationButton></NotificationButton>
              <ProfileButton></ProfileButton>
            </div>
          </div>
          <div className="import-exports-container05 border-B">
            <div className="import-exports-container06">
              <span className="import-exports-text">Import &amp; Exports</span>
              <span className="import-exports-text01">Overview</span>
            </div>
          </div>
          <div className="import-exports-container07">
            <Player
              src="https://assets3.lottiefiles.com/private_files/lf30_vnbcd4ev.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="import-exports-lottie-node"
            ></Player>
            <div className="import-exports-container08">
              <div className="import-exports-container09">
                <div className="import-exports-container10">
                  <span className="import-exports-text02">
                    Under
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="import-exports-text03">Construction</span>
                </div>
                <span className="import-exports-text04">
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
              <div className="import-exports-container11">
                <div className="import-exports-container12 gradient">
                  <span className="import-exports-text12">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImportExports
