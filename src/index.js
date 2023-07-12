import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ContactProfile from './views/contact-profile'
import Companies from './views/companies'
import Monitor from './views/monitor'
import ImportExports from './views/import-exports'
import Leads from './views/leads'
import Login from './views/login'
import CompanyProfile from './views/company-profile'
import Contacts from './views/contacts'
import Sandbox from './views/sandbox'
import Dashboard from './views/dashboard'
import Sandbox1 from './views/sandbox1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ContactProfile} exact path="/contact-profile" />
        <Route component={Companies} exact path="/companies" />
        <Route component={Monitor} exact path="/monitor" />
        <Route component={ImportExports} exact path="/import-exports" />
        <Route component={Leads} exact path="/leads" />
        <Route component={Login} exact path="/" />
        <Route component={CompanyProfile} exact path="/company-profile" />
        <Route component={Contacts} exact path="/contacts" />
        <Route component={Sandbox} exact path="/sandbox" />
        <Route component={Dashboard} exact path="/dashboard" />
        <Route component={Sandbox1} exact path="/sandbox1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
