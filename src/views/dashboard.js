import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import './dashboard.css'
import { useFunctions } from '../functions/app'

const Dashboard = (props) => {

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Dashboard - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="dashboard-container01">
        <MenuSidebar menu={1} rootClassName="menu-sidebar-root-class-name"></MenuSidebar>
        <div className="dashboard-container02">
          <div className="dashboard-container03 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="dashboard-container04">
              <NotificationButton></NotificationButton>
              <ProfileButton></ProfileButton>
            </div>
          </div>
          <div className="dashboard-container05 border-B">
            <div className="dashboard-container06">
              <span className="dashboard-text opacity-90">Dashboard</span>
              <span className="dashboard-text01 opacity-70">Overview</span>
            </div>
          </div>
          <div className="dashboard-container07">
            <span className="dashboard-text02 opacity-90">
              Welcome to Up2Data
            </span>
            <div className="dashboard-container08">
              <div className="dashboard-container09 shadow-box1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="dashboard-icon opacity-40"
                >
                  <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
                </svg>
                <div className="dashboard-container10">
                  <div className="dashboard-container11">
                    <span className="opacity-40 font-size-10">
                      Your uploaded
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="dashboard-text04 opacity-90">
                      Companies
                    </span>
                  </div>
                  <span className="dashboard-text05 opacity-90">1300</span>
                </div>
              </div>
              <div className="dashboard-container12 shadow-box1">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="dashboard-icon02 opacity-40"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
                <div className="dashboard-container13">
                  <div className="dashboard-container14">
                    <span className="opacity-40 font-size-10">Total found</span>
                    <span className="dashboard-text07 opacity-90">
                      {' '}
                      Contacts
                    </span>
                  </div>
                  <span className="dashboard-text08 opacity-90">1300</span>
                </div>
              </div>
              <div className="dashboard-container15 shadow-box1">
                <svg
                  viewBox="0 0 1024 1024"
                  className="dashboard-icon04 opacity-40"
                >
                  <path d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"></path>
                </svg>
                <div className="dashboard-container16">
                  <div className="dashboard-container17">
                    <span className="opacity-40 font-size-10">
                      Total tracked
                    </span>
                    <span className="dashboard-text10 opacity-90">
                      {' '}
                      Contacts
                    </span>
                  </div>
                  <span className="dashboard-text11 opacity-90">1300</span>
                </div>
              </div>
              <div className="dashboard-container18 shadow-box1">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="dashboard-icon06 opacity-40"
                >
                  <path d="M877.714 475.429v73.143c0 233.143-184.571 402.286-438.857 402.286s-438.857-169.143-438.857-402.286v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v73.143c0 104.571 121.714 109.714 146.286 109.714s146.286-5.143 146.286-109.714v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM877.714 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
                <div className="dashboard-container19">
                  <div className="dashboard-container20">
                    <span className="opacity-40 font-size-10">
                      Newly acquired
                    </span>
                    <span className="dashboard-text13 opacity-90"> Leads</span>
                  </div>
                  <span className="dashboard-text14 opacity-90">1300</span>
                </div>
              </div>
            </div>
            <div className="dashboard-container21">
              <div className="dashboard-container22 gradient">
                <div className="dashboard-container23">
                  <div className="dashboard-container24">
                    <span className="dashboard-text15">
                      <span className="dashboard-text16">Increase your</span>
                      <br className="dashboard-text17"></br>
                      <span className="dashboard-text18">Monitors!</span>
                    </span>
                    <span>
                      <span>
                        A single monitor can scan a maximum of 400 contacts per
                        month.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <br></br>
                      <span>
                        Add more monitors to speed up the monthly scanning
                        process.
                      </span>
                    </span>
                    <div className="button-white">
                      <svg viewBox="0 0 1024 1024" className="dashboard-icon08">
                        <path d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                      </svg>
                      <span className="dashboard-text23">Scan now</span>
                    </div>
                  </div>
                  <div className="dashboard-container26">
                    <Player
                      src="https://assets9.lottiefiles.com/packages/lf20_r4yxAr.json"
                      loop
                      speed="1"
                      autoplay
                      background="transparent"
                      className="dashboard-lottie-node"
                    ></Player>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-container27">
            <Player
              src="https://assets3.lottiefiles.com/private_files/lf30_vnbcd4ev.json"
              loop
              speed="1"
              autoplay
              background="transparent"
              className="dashboard-lottie-node1"
            ></Player>
            <div className="dashboard-container28">
              <div className="dashboard-container29">
                <div className="dashboard-container30">
                  <span className="dashboard-text24">
                    Under
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="dashboard-text25">Construction</span>
                </div>
                <span className="dashboard-text26">
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
              <div className="dashboard-container31">
                <div className="dashboard-container32 gradient">
                  <span className="dashboard-text34">60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
