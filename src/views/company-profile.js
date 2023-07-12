import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import ContactProfileOverview from '../components/contact-profile-overview'
import './company-profile.css'

const CompanyProfile = (props) => {
  return (
    <div className="company-profile-container">
      <Helmet>
        <title>Company-Profile - Up2Data-Dashboard-V3</title>
        <meta
          property="og:title"
          content="Company-Profile - Up2Data-Dashboard-V3"
        />
      </Helmet>
      <div className="company-profile-container1">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name8"></MenuSidebar>
        <div className="company-profile-container2">
          <div className="company-profile-container3 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="company-profile-container4">
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

export default CompanyProfile
