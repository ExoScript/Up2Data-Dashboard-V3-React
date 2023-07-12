import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './lead-item.css'

const LeadItem = (props) => {
  const [hover, setHover] = useState(false)
  const [profile_image, setProfile_image] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`lead-item-lead-item shadow-box ${props.rootClassName} `}
    >
      <Link to="/contact-profile" className="lead-item-navlink">
        <div className="lead-item-container">
          {hover && (
            <div className="lead-item-container01 gradient border-B">
              <div className="lead-item-container02">
                <div className="lead-item-container03">
                  {profile_image && (
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4ODU5Mjg4N3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="lead-item-image"
                    />
                  )}
                  {!profile_image && (
                    <svg
                      viewBox="0 0 731.4285714285713 1024"
                      className="lead-item-icon"
                    >
                      <path
                        d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                        className=""
                      ></path>
                    </svg>
                  )}
                </div>
                <div className="lead-item-container04">
                  <span className="lead-item-text">Triggered</span>
                  <span className="lead-item-text01">12.Feb.2023</span>
                </div>
              </div>
              <div className="lead-item-container05">
                <div className="lead-item-container06">
                  <span className="lead-item-text02">{props.name}</span>
                </div>
                <span className="lead-item-text03">{props.new_position}</span>
              </div>
            </div>
          )}
          {!hover && (
            <div className="lead-item-container07 border-B">
              <div className="lead-item-container08">
                <div className="lead-item-container09 shadow-box">
                  {profile_image && (
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4ODU5Mjg4N3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                      className="lead-item-image1"
                    />
                  )}
                  {profile_image && (
                    <div className="lead-item-container10"></div>
                  )}
                  {!profile_image && (
                    <svg
                      viewBox="0 0 731.4285714285713 1024"
                      className="lead-item-icon2"
                    >
                      <path
                        d="M731.429 799.429c0 83.429-54.857 151.429-121.714 151.429h-488c-66.857 0-121.714-68-121.714-151.429 0-150.286 37.143-324 186.857-324 46.286 45.143 109.143 73.143 178.857 73.143s132.571-28 178.857-73.143c149.714 0 186.857 173.714 186.857 324zM585.143 292.571c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429z"
                        className=""
                      ></path>
                    </svg>
                  )}
                </div>
                <div className="lead-item-container11">
                  <span className="lead-item-text04 opacity-70 font-size-10">
                    Triggered
                  </span>
                  <span className="lead-item-text05 opacity-90 font-size-10">
                    {props.date}
                  </span>
                </div>
              </div>
              <div className="lead-item-container12">
                <div className="lead-item-container13">
                  <span className="lead-item-text06 opacity-90">
                    {props.name}
                  </span>
                </div>
                <span className="lead-item-text07 opacity-70 font-size-10">
                  {props.new_position}
                </span>
              </div>
            </div>
          )}
          <div className="lead-item-container14">
            <div className="lead-item-container15 shadow-bottom1 border-B">
              <span className="lead-item-text08 opacity-90 font-size-10">
                Change
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="lead-item-text09 opacity-90 font-size-10">
                {' '}
                information
              </span>
            </div>
            <div className="lead-item-container16 border-B">
              <span className="lead-item-text10 opacity-40 font-size-10">
                Terminated from:
              </span>
              <div className="lead-item-container17">
                <span className="lead-item-text11 opacity-90">
                  {props.old_company_name}
                </span>
                <span className="lead-item-text12 opacity-90">
                  {props.old_position}
                </span>
              </div>
            </div>
            <div className="lead-item-container18">
              <span className="lead-item-text13 opacity-40 font-size-10">
                Newly employed by:
              </span>
              <div className="lead-item-container19">
                <span className="lead-item-text14 opacity-90">
                  {props.new_company_name}
                </span>
                <span className="lead-item-text15 opacity-90">
                  {props.new_position}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="lead-item-container20 border-T shadow-bottom1">
        <div className="button-lila">
          <svg viewBox="0 0 1024 1024" className="lead-item-icon4">
            <path
              d="M384 512c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM664.348 230.526c99.852 54.158 167.652 159.898 167.652 281.474s-67.8 227.316-167.652 281.474c44.066-70.126 71.652-170.27 71.652-281.474s-27.586-211.348-71.652-281.474zM288 512c0 111.204 27.584 211.348 71.652 281.474-99.852-54.16-167.652-159.898-167.652-281.474s67.8-227.314 167.652-281.474c-44.068 70.126-71.652 170.27-71.652 281.474zM96 512c0 171.9 54.404 326.184 140.652 431.722-142.302-90.948-236.652-250.314-236.652-431.722s94.35-340.774 236.652-431.722c-86.248 105.538-140.652 259.822-140.652 431.722zM787.352 80.28c142.298 90.946 236.648 250.312 236.648 431.72s-94.35 340.774-236.648 431.72c86.244-105.536 140.648-259.82 140.648-431.72s-54.404-326.184-140.648-431.72z"
              className=""
            ></path>
          </svg>
          <span className="opacity-90">Remove Tracking</span>
        </div>
      </div>
    </div>
  )
}

LeadItem.defaultProps = {
  position: 'Fullstack Developer',
  new_position: 'Fullstack Developer',
  name: 'Deivisson Almeida de Souza',
  rootClassName: '',
  old_company_name: 'HeyData GmbH',
  date: '12.Feb.2023',
  new_company_name: 'Flaschenpost GmbH',
  old_position: 'Fullstack Developer',
}

LeadItem.propTypes = {
  position: PropTypes.string,
  new_position: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
  old_company_name: PropTypes.string,
  date: PropTypes.string,
  new_company_name: PropTypes.string,
  old_position: PropTypes.string,
}

export default LeadItem
