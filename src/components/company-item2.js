import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './company-item2.css'

const CompanyItem2 = (props) => {
  const [status, setStatus] = useState(props.status)
  const [select, setSelect] = useState(false)
  const [image, setImage] = useState(false)
  return (
    <div className="company-item2-company-item2 border-B">
      <div className="company-item2-container border-R">
        <div
          onClick={() => setSelect(!select)}
          className="company-item2-container01"
        >
          {select && (
            <div className="company-item2-container02">
              <svg viewBox="0 0 1024 1024" className="company-item2-icon">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="company-item2-container03 border-R">
        <div className="company-item2-container04">
          {!image && (
            <svg viewBox="0 0 1024 1024" className="company-item2-icon2">
              <path d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"></path>
            </svg>
          )}
          {image && (
            <img
              alt="image"
              src={props.image_src}
              loading="lazy"
              className="company-item2-image"
            />
          )}
        </div>
        <div className="company-item2-container05">
          <div className="company-item2-container06">
            <span className="company-item2-text opacity-90 text-overflow">
              {props.name}
            </span>
            {status === 0 && (
              <div className="company-item2-container07">
                <span className="opacity-90 font-size-10">Pending</span>
              </div>
            )}
            {status === 2 && (
              <div className="company-item2-container08">
                <span className="opacity-90 font-size-10">Failed</span>
              </div>
            )}
            {status === 1 && (
              <div className="company-item2-container09">
                <span className="opacity-90 font-size-10">Scanned</span>
              </div>
            )}
          </div>
          <span className="opacity-70 text-overflow font-size-10">
            {props.industry}
          </span>
        </div>
      </div>
      <div className="company-item2-container10 border-R">
        <span className="company-item2-text05 opacity-90 font-size-10">
          {props.size}
        </span>
        <span className="company-item2-text06 opacity-70 font-size-10">
          Employees
        </span>
      </div>
      <div className="company-item2-container11 border-R">
        <span className="company-item2-text07 opacity-90 font-size-10">
          {props.Monitors}
        </span>
        <span className="company-item2-text08 opacity-70 font-size-10">
          Contacts
        </span>
      </div>
      <div className="company-item2-container12 border-R">
        <div className="company-item2-container13">
          <span className="opacity-90 text-overflow font-size-10">
            {props.folder}
          </span>
        </div>
      </div>
      <div className="company-item2-container14 border-R">
        <span className="company-item2-text10 opacity-90 font-size-10">
          {props.date}
        </span>
        <div className="company-item2-container15">
          <span className="opacity-70 font-size-10">{props.time}</span>
          <span className="company-item2-text12 opacity-90 font-size-10">
            {props.period}
          </span>
        </div>
      </div>
      <div className="company-item2-container16">
        <div className="company-item2-container17 button-gradient">
          <svg viewBox="0 0 1024 1024" className="company-item2-icon4">
            <path d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"></path>
          </svg>
          <span>Profile</span>
        </div>
      </div>
    </div>
  )
}

CompanyItem2.defaultProps = {
  folder: 'Folder name',
  industry: 'Industry',
  name: 'Company name',
  period: 'AM',
  time: '10:00',
  Monitors: '01',
  rootClassName: '',
  image_src: '/image_placeholder-200h.jpeg',
  size: '01',
  date: '01.01.2023',
}

CompanyItem2.propTypes = {
  folder: PropTypes.string,
  industry: PropTypes.string,
  name: PropTypes.string,
  period: PropTypes.string,
  time: PropTypes.string,
  Monitors: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  size: PropTypes.string,
  date: PropTypes.string,
}

export default CompanyItem2
