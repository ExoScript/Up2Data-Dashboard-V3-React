import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import SearchBar from '../components/search-bar'
import NotificationButton from '../components/notification-button'
import ProfileButton from '../components/profile-button'
import LeadsOverview from '../components/leads-overview'
import './leads.css'

const Leads = (props) => {
  return (
    <div className="leads-container">
      <Helmet>
        <title>Leads - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Leads - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="leads-container1">
        <MenuSidebar menu={4} rootClassName="menu-sidebar-root-class-name4"></MenuSidebar>
        <div className="leads-container2">
          <div className="leads-container3 gradient2 border-B shadow-bottom">
            <SearchBar></SearchBar>
            <div className="leads-container4">
              <NotificationButton></NotificationButton>
              <ProfileButton></ProfileButton>
            </div>
          </div>
          <LeadsOverview></LeadsOverview>
        </div>
      </div>
    </div>
  )
}

export default Leads
