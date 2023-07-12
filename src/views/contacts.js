import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import ContactOverview from '../components/contact-overview'
import './contacts.css'

const Contacts = (props) => {
  return (
    <div className="contacts-container">
      <Helmet>
        <title>Contacts - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Contacts - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="contacts-container1">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name2"></MenuSidebar>
        <ContactOverview rootClassName="contact-overview-root-class-name"></ContactOverview>
      </div>
    </div>
  )
}

export default Contacts
