import React, { useState, useEffect } from 'react'
import { useFunctions } from '../functions/app';

import PropTypes from 'prop-types'

import SearchBar from './search-bar'
import NotificationButton from './notification-button'
import ProfileButton from './profile-button'
import CompanyItem from './company-item'
import './company-overview.css'

const CompanyOverview = (props) => {
  const [viewFilter, setViewFilter] = useState(false)

  const {
    getList
  } = useFunctions();

  const items = getList()
  const itemsArray = Object.keys(items).map(key => {
    let monitor;
    let time;
    let timeStatus;
    let imageStatus;
    let imageSrc;
    let status;
    let size = 0

    if (items[key].monitor && items[key].monitor.status) {
      status = 1
      if(items[key].employees){
        size = items[key].employees.length
      }
    } else {
      status = 2
    }

    if (items[key].imageSrc && items[key].imageSrc != '-') {
      imageStatus = true
      imageSrc = items[key].imageSrc
    }

    return (
       <li key={items[key].company_name} className="list-item">
        <CompanyItem
          name={items[key].company_name}
          time={time}
          timeStatus={timeStatus}
          imageStatus={imageStatus}
          image_src={imageSrc}
          userData={items[key]}
          status={status}
          size ={`${size}`}
          rootClassName="company-item-root-class-name"></CompanyItem>
      </li>)
  });


  return (
    <div className="company-overview-company-overview">
      <div className="company-overview-container gradient2 border-B shadow-bottom">
        <SearchBar></SearchBar>
        <div className="company-overview-container01">
          <NotificationButton></NotificationButton>
          <ProfileButton></ProfileButton>
        </div>
      </div>
      <div className="company-overview-container02 border-B">
        <div className="company-overview-container03">
          <span className="company-overview-text opacity-90">Company</span>
          <span className="company-overview-text01 opacity-70">List</span>
        </div>
        <div className="company-overview-container04">
          <div className="button-gradient">
            <svg viewBox="0 0 1024 1024" className="company-overview-icon">
              <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
            </svg>
            <span>Add Company</span>
          </div>
          <div
            onClick={() => setViewFilter(!viewFilter)}
            className="button-white"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="company-overview-icon2 opacity-90"
            >
              <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
            </svg>
            <span className="opacity-90">Edit Filter</span>
          </div>
        </div>
      </div>
      {viewFilter && <div className="company-overview-container07"></div>}
      <div className="company-overview-container08">
        <div className="company-overview-container09 border-B shadow-bottom font-size-10">
          <div className="company-overview-container10 border-R">
            <span className="opacity-70">Name:</span>
          </div>
          <div className="company-overview-container11 border-R">
            <span className="opacity-70">Industry:</span>
          </div>
          <div className="company-overview-container12 border-R">
            <span className="opacity-70">Folder:</span>
          </div>
          <div className="company-overview-container13 border-R">
            <span className="opacity-70">Status:</span>
          </div>
          <div className="company-overview-container14 border-R">
            <span className="opacity-70">Last scan:</span>
          </div>
          <div className="company-overview-container15">
            <span className="opacity-70">Actions:</span>
          </div>
        </div>
        <div className="company-overview-container16">
          <ul className="list">
            {itemsArray}
          </ul>
        </div>
        <div className="company-overview-container17 border-T">
          <div className="company-overview-container18">
            <div className="company-overview-container19">
              <span className="company-overview-text10 opacity-70 font-size-10">
                Display
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="company-overview-text11 opacity-90">25</span>
              <span className="company-overview-text12 opacity-70 font-size-10">
                from
              </span>
              <span className="company-overview-text13 opacity-90">
                {props.total}
              </span>
            </div>
          </div>
          <div className="company-overview-container20">
            <div className="company-overview-container21">
              <div className="company-overview-container22 opacity-40">
                <svg viewBox="0 0 1024 1024" className="company-overview-icon4">
                  <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                </svg>
              </div>
              <span className="company-overview-text14 opacity-90">1</span>
              <span className="opacity-40 font-size-10">2</span>
              <span className="opacity-40 font-size-10">3</span>
              <div className="company-overview-container23">
                <svg viewBox="0 0 1024 1024" className="company-overview-icon6">
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

CompanyOverview.defaultProps = {
  total: '1300',
}

CompanyOverview.propTypes = {
  total: PropTypes.string,
}

export default CompanyOverview
