import React from 'react'

import { Helmet } from 'react-helmet'

import MenuSidebar from '../components/menu-sidebar'
import CompanyOverview from '../components/company-overview'
import './companies.css'

const Companies = (props) => {
  return (
    <div className="companies-container">
      <Helmet>
        <title>Companies - Up2Data-Dashboard-V3</title>
        <meta property="og:title" content="Companies - Up2Data-Dashboard-V3" />
      </Helmet>
      <div className="companies-container1">
        <MenuSidebar rootClassName="menu-sidebar-root-class-name1"></MenuSidebar>
        <CompanyOverview></CompanyOverview>
      </div>
    </div>
  )
}

export default Companies
