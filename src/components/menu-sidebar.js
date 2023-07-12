import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './menu-sidebar.css'

const MenuSidebar = (props) => {
  const [menu, setMenu] = useState(1)
  return (
    <div
      className={`menu-sidebar-menu-sidebar border-R ${props.rootClassName} `}
    >
      <div className="menu-sidebar-container gradient">
        <div className="menu-sidebar-container1">
          <img
            alt="image"
            src="/up2datalogo%20%5B1%5D-200h-200h.png"
            className="menu-sidebar-image"
          />
        </div>
        <div className="menu-sidebar-container2">
          <span className="menu-sidebar-text">Up2Data</span>
          <span className="font-300-v6">Dashboard</span>
        </div>
      </div>
      <div className="menu-sidebar-container3 border-B shadow-bottom">
        <span className="menu-sidebar-text02 font-700-v9">Menu</span>
      </div>
      <div className="menu-sidebar-container4">
        <div className="menu-sidebar-menu1">
          {menu === 1 && (
            <div className="menu-sidebar-menu-enable gradient">
              <svg viewBox="0 0 1024 1024" className="menu-sidebar-icon">
                <path
                  d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_1}</span>
            </div>
          )}
          <Link to="/dashboard" className="menu-sidebar-navlink">
            <div className="menu-sidebar-menu-disable">
              <svg viewBox="0 0 1024 1024" className="menu-sidebar-icon02">
                <path
                  d="M554 128h342v256h-342v-256zM554 896v-426h342v426h-342zM128 896v-256h342v256h-342zM128 554v-426h342v426h-342z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_1}</span>
            </div>
          </Link>
        </div>
        <div className="menu-sidebar-menu2">
          {menu === 2 && (
            <div className="menu-sidebar-menu-enable1 gradient">
              <svg viewBox="0 0 1024 1024" className="menu-sidebar-icon04">
                <path
                  d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_2}</span>
            </div>
          )}
          <Link to="/companies" className="menu-sidebar-navlink1">
            <div className="menu-sidebar-menu-disable1">
              <svg viewBox="0 0 1024 1024" className="menu-sidebar-icon06">
                <path
                  d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_2}</span>
            </div>
          </Link>
        </div>
        <div className="menu-sidebar-menu3">
          {menu === 3 && (
            <div className="menu-sidebar-menu-enable2 gradient">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="menu-sidebar-icon08"
              >
                <path
                  d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_3}</span>
            </div>
          )}
          <Link to="/contacts" className="menu-sidebar-navlink2">
            <div className="menu-sidebar-menu-disable2">
              <svg
                viewBox="0 0 1097.142857142857 1024"
                className="menu-sidebar-icon10"
              >
                <path
                  d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_3}</span>
            </div>
          </Link>
        </div>
        <div className="menu-sidebar-menu4">
          {menu === 4 && (
            <div className="menu-sidebar-menu-enable3 gradient">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="menu-sidebar-icon12"
              >
                <path
                  d="M877.714 475.429v73.143c0 233.143-184.571 402.286-438.857 402.286s-438.857-169.143-438.857-402.286v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v73.143c0 104.571 121.714 109.714 146.286 109.714s146.286-5.143 146.286-109.714v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM877.714 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_4}</span>
            </div>
          )}
          <Link to="/leads" className="menu-sidebar-navlink3">
            <div className="menu-sidebar-menu-disable3">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="menu-sidebar-icon14"
              >
                <path
                  d="M877.714 475.429v73.143c0 233.143-184.571 402.286-438.857 402.286s-438.857-169.143-438.857-402.286v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571v73.143c0 104.571 121.714 109.714 146.286 109.714s146.286-5.143 146.286-109.714v-73.143c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM292.571 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571zM877.714 109.714v219.429c0 20-16.571 36.571-36.571 36.571h-219.429c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h219.429c20 0 36.571 16.571 36.571 36.571z"
                  className=""
                ></path>
              </svg>
              <span className="">{props.menu_4}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="menu-sidebar-container5 border-T">
        <svg viewBox="0 0 1024 1024" className="menu-sidebar-icon16">
          <path
            d="M170 214v596h342v86h-342q-34 0-59-26t-25-60v-596q0-34 25-60t59-26h342v86h-342zM726 298l212 214-212 214-60-62 110-110h-434v-84h434l-110-112z"
            className=""
          ></path>
        </svg>
        <span className="">Logout</span>
      </div>
    </div>
  )
}

MenuSidebar.defaultProps = {
  menu_4: 'Leads',
  rootClassName: '',
  menu_2: 'Companies',
  menu_1: 'Dashboard',
  menu_3: 'Contacts',
}

MenuSidebar.propTypes = {
  menu_4: PropTypes.string,
  rootClassName: PropTypes.string,
  menu_2: PropTypes.string,
  menu_1: PropTypes.string,
  menu_3: PropTypes.string,
}

export default MenuSidebar
