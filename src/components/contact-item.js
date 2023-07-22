import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './contact-item.css'

const ContactItem = (props) => {
  const [image, setImage] = useState(false)
  const [tracking, setTracking] = useState(false)
  const [status, setStatus] = useState(0)
  return (
    <div
      className={`contact-item-company-item border-B ${props.rootClassName} `}
    >
      <div className="contact-item-item-content">
        <div className="contact-item-container border-R">
          <div className="contact-item-container01">
            {!image && (
              <svg
                viewBox="0 0 731.4285714285713 1024"
                className="contact-item-icon"
              >
                <path
                  d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                  className=""
                ></path>
              </svg>
            )}
            {image && (
              <img
                alt="image"
                src={props.image_src}
                className="contact-item-image"
              />
            )}
          </div>
          <div className="contact-item-container02">
            <span className="contact-item-text opacity-90">{props.name}</span>
            <div className="contact-item-container03">
              <span className="contact-item-text01 opacity-90 font-size-10">
                {props.level}
              </span>
              <span className="contact-item-text02 font-size-10">-</span>
              <span className="contact-item-text03 opacity-70 font-size-10">
                {props.company}
              </span>
            </div>
          </div>
        </div>
        <div className="contact-item-container04 border-R">
          <div className="contact-item-container05">
            <span className="opacity-90 font-size-10">{props.type}</span>
          </div>
        </div>
        <div className="contact-item-container06 border-R">
          <div className="contact-item-container07">
            <span className="opacity-90 font-size-10">{props.folder}</span>
          </div>
        </div>
        <div className="contact-item-status border-R">
          {status === 0 && (
            <div className="contact-item-pending">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-item-icon02 opacity-90"
              >
                <path
                  d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM469.333 256v256c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072s2.005-46.72-19.072-57.259l-147.115-73.515v-229.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"
                  className=""
                ></path>
              </svg>
              <span className="opacity-90 font-size-10">Pending</span>
            </div>
          )}
          {status === 1 && (
            <div className="contact-item-scanned">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-item-icon04 opacity-90"
              >
                <path
                  d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                  className=""
                ></path>
              </svg>
              <span className="opacity-90 font-size-10">Scanned</span>
            </div>
          )}
          {status === 2 && (
            <div className="contact-item-scanned1">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-item-icon06 opacity-90"
              >
                <path
                  d="M512 96c-111.118 0-215.584 43.272-294.156 121.844s-121.844 183.038-121.844 294.156c0 111.118 43.272 215.584 121.844 294.156s183.038 121.844 294.156 121.844c111.118 0 215.584-43.272 294.156-121.844s121.844-183.038 121.844-294.156c0-111.118-43.272-215.584-121.844-294.156s-183.038-121.844-294.156-121.844zM512 0v0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM448 704h128v128h-128zM448 192h128v384h-128z"
                  className=""
                ></path>
              </svg>
              <span className="contact-item-text08 opacity-90">Failed</span>
            </div>
          )}
        </div>
        <div className="contact-item-container08 opacity-90">
          <span className="contact-item-text09 font-size-10">{props.Date}</span>
          <div className="contact-item-container09 border-R">
            <span className="font-size-10">{props.time}</span>
            <span className="contact-item-text11 font-size-10">
              {props.time_type}
            </span>
          </div>
        </div>
      </div>
      <div className="contact-item-actions border-L">
        {status === 0 && (
          <div className="contact-item-container10">
            {!tracking && (
              <div
                onClick={() => setTracking(true)}
                className="contact-item-add-tracking button-white"
              >
                <svg viewBox="0 0 1024 1024" className="contact-item-icon08">
                  <path
                    d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"
                    className=""
                  ></path>
                </svg>
                <span className="">Add to tracking</span>
              </div>
            )}
            {tracking && (
              <div
                onClick={() => setTracking(false)}
                className="contact-item-add-tracking1 button-lila"
              >
                <svg viewBox="0 0 1024 1024" className="contact-item-icon10">
                  <path
                    d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"
                    className=""
                  ></path>
                </svg>
                <span className="">Remove tracking</span>
              </div>
            )}
          </div>
        )}
        {status === 1 && (
          <div className="contact-item-container11">
            {!tracking && (
              <div
                onClick={() => setTracking(true)}
                className="contact-item-add-tracking2 button-white"
              >
                <svg viewBox="0 0 1024 1024" className="contact-item-icon12">
                  <path
                    d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"
                    className=""
                  ></path>
                </svg>
                <span className="">Add to tracking</span>
              </div>
            )}
            {tracking && (
              <div
                onClick={() => setTracking(false)}
                className="contact-item-add-tracking3 button-lila"
              >
                <svg viewBox="0 0 1024 1024" className="contact-item-icon14">
                  <path
                    d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"
                    className=""
                  ></path>
                </svg>
                <span className="">Remove tracking</span>
              </div>
            )}
          </div>
        )}
        {status === 2 && (
          <div className="button-white">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-item-icon16 opacity-90"
            >
              <path
                d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"
                className=""
              ></path>
            </svg>
            <span className="">Edit contact</span>
          </div>
        )}
        <div className="contact-item-delete">
          <svg viewBox="0 0 1024 1024" className="contact-item-icon18">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

ContactItem.defaultProps = {
  Date: '21.02.2023',
  time: '00:00',
  rootClassName: '',
  company: 'Company Name',
  level: 'Level',
  name: 'Employee Name',
  time_type: 'AM',
  folder: 'New Contacts',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  type: 'Customer Office Management',
}

ContactItem.propTypes = {
  Date: PropTypes.string,
  time: PropTypes.string,
  rootClassName: PropTypes.string,
  company: PropTypes.string,
  level: PropTypes.string,
  name: PropTypes.string,
  time_type: PropTypes.string,
  folder: PropTypes.string,
  image_src: PropTypes.string,
  type: PropTypes.string,
}

export default ContactItem
