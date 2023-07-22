import React, { useState } from 'react'

import PropTypes from 'prop-types'

import SearchBar from './search-bar'
import NotificationButton from './notification-button'
import ProfileButton from './profile-button'
import ContactItem from './contact-item'
import './contact-overview.css'
import { useFunctions } from '../functions/app'

const ContactOverview = (props) => {
  const [viewFilter, setViewFilter] = useState(false)
  const [itemsFrom, setItemsFrom] = useState(0);
  const [itemsTo, setItemsTo] = useState(25);
  const {
    list
  } = useFunctions();
  const itemsArray = Object.values(list({ _type: 'contact' })).map(item => {
    return (
      <li key={item.id} className="list-item">
        <ContactItem
          name={item.name}
          company={item.company}
          rootClassName="contact-item-root-class-name6"
          status={1}
          className=""
        ></ContactItem>
      </li>)
  });
  const nextItems = () => {
    let from = itemsFrom + 25
    let to = itemsTo + 25
    setItemsFrom(from);
    setItemsTo(to);
  };

  return (
    <div
      className={`contact-overview-company-overview ${props.rootClassName} `}
    >
      <div className="contact-overview-container gradient2 border-B shadow-bottom">
        <SearchBar className=""></SearchBar>
        <div className="contact-overview-container01">
          <NotificationButton className=""></NotificationButton>
          <ProfileButton className=""></ProfileButton>
        </div>
      </div>
      <div className="contact-overview-container02 border-B">
        <div className="contact-overview-container03">
          <span className="contact-overview-text opacity-90">Contact</span>
          <span className="contact-overview-text01 opacity-70">List</span>
        </div>
        <div className="contact-overview-container04">
          <div className="button-gradient">
            <svg viewBox="0 0 1024 1024" className="contact-overview-icon">
              <path
                d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"
                className=""
              ></path>
            </svg>
            <span className="">Add Contacts</span>
          </div>
          <div
            onClick={() => setViewFilter(!viewFilter)}
            className="button-white"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="contact-overview-icon2 opacity-90"
            >
              <path
                d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"
                className=""
              ></path>
            </svg>
            <span className="opacity-90">Edit Filter</span>
          </div>
        </div>
      </div>
      {viewFilter && <div className="contact-overview-container07"></div>}
      <div className="contact-overview-container08">
        <div className="contact-overview-container09 border-B shadow-bottom font-size-10">
          <div className="contact-overview-container10 border-R">
            <span className="opacity-70">Name:</span>
          </div>
          <div className="contact-overview-container11 border-R">
            <span className="opacity-70">Department:</span>
          </div>
          <div className="contact-overview-container12 border-R">
            <span className="opacity-70">Folder:</span>
          </div>
          <div className="contact-overview-container13 border-R">
            <span className="opacity-70">Status:</span>
          </div>
          <div className="contact-overview-container14 border-R">
            <span className="opacity-70">Last scan:</span>
          </div>
          <div className="contact-overview-container15">
            <span className="opacity-70">Actions:</span>
          </div>
        </div>
        <div className="contact-overview-container16">
          <ul className="list">
            {itemsArray.splice(itemsFrom, itemsTo)}
          </ul>
        </div>
        <div className="contact-overview-container17 border-T">
          <div className="contact-overview-container18">
            <div className="contact-overview-container19">
              <span className="contact-overview-text10 opacity-70 font-size-10">
                Display
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="contact-overview-text11 opacity-90">25</span>
              <span className="contact-overview-text12 opacity-70 font-size-10">
                from
              </span>
              <span className="contact-overview-text13 opacity-90">
                {props.total}
              </span>
            </div>
          </div>
          <div className="contact-overview-container20">
            <div className="contact-overview-container21">
              <div className="contact-overview-container22 opacity-40">
                <svg viewBox="0 0 1024 1024" className="contact-overview-icon4">
                  <path
                    d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                    className=""
                  ></path>
                </svg>
              </div>
              <span className="contact-overview-text14 opacity-90">1</span>
              <span className="opacity-40 font-size-10">2</span>
              <span className="opacity-40 font-size-10">3</span>
              <div onClick={nextItems} className="contact-overview-container23">
                <svg viewBox="0 0 1024 1024" className="contact-overview-icon6">
                  <path
                    d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactOverview.defaultProps = {
  rootClassName: '',
  total: '1300',
}

ContactOverview.propTypes = {
  rootClassName: PropTypes.string,
  total: PropTypes.string,
}

export default ContactOverview
