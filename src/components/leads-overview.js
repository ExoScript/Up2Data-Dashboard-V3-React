import React from 'react'

import PropTypes from 'prop-types'

import LeadItem from './lead-item'
import './leads-overview.css'
import { useFunctions } from '../functions/app'

const LeadsOverview = (props) => {
  const {
    list
  } = useFunctions();
  const itemsArray = Object.values(list({ _type: 'contact' })).map(item => {
    if (item.priority) {
      return (
        <LeadItem  key={item.od} rootClassName="lead-item-root-class-name2"
        name={item.name}
        new_company={item.change.to.company}
        new_position={item.change.to.position}
        old_company={item.change.from.company}
        old_position={item.change.from.position}
        >
        </LeadItem>)
    }
    
  });

  const array = [
    <LeadItem name="Dave" key="1" rootClassName="lead-item-root-class-name2"></LeadItem>,
    <LeadItem name="Dave" key="2" rootClassName="lead-item-root-class-name2"></LeadItem>
  ]

  return (
    <div className="leads-overview-leads-overview">
      <div className="leads-overview-container">
        <div className="leads-overview-container01 border-B shadow-bottom">
          <div className="leads-overview-container02">
            <span className="leads-overview-text opacity-90">Leads</span>
            <span className="leads-overview-text01 opacity-70">Overview</span>
          </div>
          <div className="leads-overview-container03">
            <div className="button-gradient">
              <svg viewBox="0 0 1024 1024" className="leads-overview-icon">
                <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
              </svg>
              <span>Download as CSV</span>
            </div>
          </div>
        </div>
        <div className="leads-overview-container05 border-B shadow-bottom">
          <div className="leads-overview-container06">
            <div className="leads-overview-container07">
              <div className="leads-overview-container08 border-R">
                <span className="leads-overview-text03">Sort by:</span>
                <span className="leads-overview-text04">Date</span>
              </div>
              <div className="leads-overview-container09">
                <svg
                  viewBox="0 0 329.1428571428571 1024"
                  className="leads-overview-icon02"
                >
                  <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
                </svg>
              </div>
            </div>
            <div className="leads-overview-container10">
              <div className="leads-overview-container11 border-R">
                <span className="leads-overview-text05">Position:</span>
                <span className="leads-overview-text06">All</span>
              </div>
              <div className="leads-overview-container12">
                <svg
                  viewBox="0 0 329.1428571428571 1024"
                  className="leads-overview-icon04"
                >
                  <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
                </svg>
              </div>
            </div>
            <div className="leads-overview-container13">
              <div className="leads-overview-container14 border-R">
                <span className="leads-overview-text07">Level:</span>
                <span className="leads-overview-text08">All</span>
              </div>
              <div className="leads-overview-container15">
                <svg
                  viewBox="0 0 329.1428571428571 1024"
                  className="leads-overview-icon06"
                >
                  <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
                </svg>
              </div>
            </div>
            <div className="leads-overview-container16">
              <div className="leads-overview-container17 border-R">
                <span className="leads-overview-text09">Folder:</span>
                <span className="leads-overview-text10">Important</span>
              </div>
              <div className="leads-overview-container18">
                <svg
                  viewBox="0 0 329.1428571428571 1024"
                  className="leads-overview-icon08"
                >
                  <path d="M329.143 512c0 9.714-4 18.857-10.857 25.714l-256 256c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-512c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l256 256c6.857 6.857 10.857 16 10.857 25.714z"></path>
                </svg>
              </div>
            </div>
          </div>
          <span className="leads-overview-text11 opacity-70">Reset filter</span>
        </div>
        <div className="leads-overview-container19">
          {itemsArray}
        </div>
        <div className="leads-overview-container20 border-T">
          <div className="leads-overview-container21">
            <div className="leads-overview-container22">
              <span className="leads-overview-text12 opacity-70 font-size-10">
                Display
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="leads-overview-text13">25</span>
              <span className="leads-overview-text14 opacity-70 font-size-10">
                from
              </span>
              <span className="leads-overview-text15">1300</span>
            </div>
          </div>
          <div className="leads-overview-container23">
            <div className="leads-overview-container24">
              <div className="leads-overview-container25">
                <svg viewBox="0 0 1024 1024" className="leads-overview-icon10">
                  <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                </svg>
              </div>
              <span className="leads-overview-text16 opacity-90">1</span>
              <span className="opacity-40 font-size-10">2</span>
              <span className="opacity-40 font-size-10">3</span>
              <div className="leads-overview-container26">
                <svg viewBox="0 0 1024 1024" className="leads-overview-icon12">
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LeadsOverview.defaultProps = {
  text: 'Text',
}

LeadsOverview.propTypes = {
  text: PropTypes.string,
}

export default LeadsOverview
