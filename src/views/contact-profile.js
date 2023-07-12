import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import ContactProfileOverview from '../components/contact-profile-overview'
import './contact-profile.css'

const ContactProfile = (props) => {
  return (
    <div className="contact-profile-container">
      <Helmet>
        <title>Contact-Profile - Up2Data-Dashboard-V3</title>
        <meta
          property="og:title"
          content="Contact-Profile - Up2Data-Dashboard-V3"
        />
      </Helmet>
      <div className="contact-profile-container1">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name6"></MenuSidebar>
        <div className="contact-profile-container2">
          <div className="contact-profile-container3 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="contact-profile-container4">
              <NotificationButton></NotificationButton>
              <ProfileButton></ProfileButton>
            </div>
          </div>
          <ContactProfileOverview></ContactProfileOverview>
        </div>
      </div>
    </div>
  )
}

export default ContactProfile
