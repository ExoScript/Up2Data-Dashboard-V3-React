import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './company-item.css'

const CompanyItem = (props) => {
  const [image, setImage] = useState(props.imageStatus)
  const [scan, setScan] = useState(false)
  const [status, setStatus] = useState(props.status)
  return (
    <div
      className={`company-item-company-item border-B ${props.rootClassName} `}
    >
      <div className="company-item-container">
        <div className="company-item-container01 border-R">
          <div className="company-item-container02">
            {!image && (
              <svg viewBox="0 0 1024 1024" className="company-item-icon">
                <path
                  d="M0 1024h512v-1024h-512v1024zM320 128h128v128h-128v-128zM320 384h128v128h-128v-128zM320 640h128v128h-128v-128zM64 128h128v128h-128v-128zM64 384h128v128h-128v-128zM64 640h128v128h-128v-128zM576 320h448v64h-448zM576 1024h128v-256h192v256h128v-576h-448z"
                  className=""
                ></path>
              </svg>
            )}
            {image && (
              <img
                alt="image"
                src={props.image_src}
                className="company-item-image"
              />
            )}
          </div>
          <div className="company-item-container03">
            <span className="company-item-text opacity-90">{props.name}</span>
            <div className="company-item-container04">
              <span className="company-item-text01 opacity-90 font-size-10">
                {props.size}
              </span>
              <span className="opacity-70 font-size-10">Employees</span>
            </div>
          </div>
        </div>
        <div className="company-item-container05 border-R">
          <div className="company-item-container06">
            <span className="opacity-90 font-size-10">{props.type}</span>
          </div>
        </div>
        <div className="company-item-container07 border-R">
          <div className="company-item-container08">
            <span className="opacity-90 font-size-10">{props.folder}</span>
          </div>
        </div>
        <div className="company-item-status border-R">
          {status === 0 && (
            <div className="status-item-pending">
              <svg
                viewBox="0 0 1024 1024"
                className="company-item-icon02 opacity-90"
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
            <div className="status-item-scanned">
              <svg viewBox="0 0 1024 1024" className="company-item-icon04">
                <path
                  d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                  className=""
                ></path>
              </svg>
              <span className="font-size-10">Scanned</span>
            </div>
          )}
          {status === 2 && (
            <div className="status-item-failed">
              <svg viewBox="0 0 1024 1024" className="company-item-icon06">
                <path
                  d="M512 96c-111.118 0-215.584 43.272-294.156 121.844s-121.844 183.038-121.844 294.156c0 111.118 43.272 215.584 121.844 294.156s183.038 121.844 294.156 121.844c111.118 0 215.584-43.272 294.156-121.844s121.844-183.038 121.844-294.156c0-111.118-43.272-215.584-121.844-294.156s-183.038-121.844-294.156-121.844zM512 0v0c282.77 0 512 229.23 512 512s-229.23 512-512 512c-282.77 0-512-229.23-512-512s229.23-512 512-512zM448 704h128v128h-128zM448 192h128v384h-128z"
                  className=""
                ></path>
              </svg>
              <span className="font-size-10">Failed</span>
            </div>
          )}
        </div>
        <div className="company-item-container09 opacity-90">
          <span className="company-item-text08 font-size-10">{props.Date}</span>
          <div className="company-item-container10 border-R">
            <span className="font-size-10">{props.time}</span>
            <span className="company-item-text10 font-size-10">
              {props.time_type}
            </span>
          </div>
        </div>
      </div>
      <div className="company-item-actions border-L">
        {status === 1 && (
          <div className="company-item-profile button-lila">
            <svg viewBox="0 0 1024 1024" className="company-item-icon08">
              <path
                d="M598 128h298v298h-86v-152l-418 418-60-60 418-418h-152v-86zM810 810v-298h86v298q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-596q0-36 25-61t61-25h298v86h-298v596h596z"
                className=""
              ></path>
            </svg>
            <span className="">Profile</span>
          </div>
        )}
        {status === 0 && (
          <div className="company-item-container11">
            {!scan && (
              <div
                onClick={() => setScan(true)}
                className="company-item-scan-now button-white"
              >
                <svg viewBox="0 0 1024 1024" className="company-item-icon10">
                  <path
                    d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                    className=""
                  ></path>
                </svg>
                <span className="">Scan now</span>
              </div>
            )}
            {scan && (
              <div
                onClick={() => setScan(false)}
                className="company-item-scanned2 button-orange"
              >
                <svg viewBox="0 0 1024 1024" className="company-item-icon12">
                  <path
                    d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                    className=""
                  ></path>
                </svg>
                <span className="">Scanning...</span>
              </div>
            )}
          </div>
        )}
        {status === 2 && (
          <div className="company-item-edit-company button-white">
            <svg viewBox="0 0 1024 1024" className="company-item-icon14">
              <path
                d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"
                className=""
              ></path>
            </svg>
            <span className="">Edit Company</span>
          </div>
        )}
        <div className="company-item-delete">
          <svg viewBox="0 0 1024 1024" className="company-item-icon16">
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

CompanyItem.defaultProps = {
  time_type: 'AM',
  Date: '21.02.2023',
  folder: 'New Contacts',
  type: 'Customer Office Management',
  time: '00:00',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  name: 'Company Name',
  size: '00',
  rootClassName: '',
}

CompanyItem.propTypes = {
  time_type: PropTypes.string,
  Date: PropTypes.string,
  folder: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.string,
  image_src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CompanyItem
