import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './lead-item.css'

const LeadItem = (props) => {
  const [hover, setHover] = useState(false)
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
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4ODU5Mjg4N3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="lead-item-image"
                  />
                </div>
                <div className="lead-item-container04">
                  <span className="lead-item-text">Triggered</span>
                  <span className="lead-item-text01">12.Feb.2023</span>
                </div>
              </div>
              <div className="lead-item-container05">
                <div className="lead-item-container06">
                  <span className="lead-item-text02">
                    Deivisson Almeida de Souza
                  </span>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="lead-item-icon"
                  >
                    <path
                      d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <span className="lead-item-text03">Fullstack Developer</span>
              </div>
            </div>
          )}
          {!hover && (
            <div className="lead-item-container07 border-B">
              <div className="lead-item-container08">
                <div className="lead-item-container09 shadow-box">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4ODU5Mjg4N3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="lead-item-image1"
                  />
                  <div className="lead-item-container10"></div>
                </div>
                <div className="lead-item-container11">
                  <span className="lead-item-text04 opacity-70 font-size-10">
                    Triggered
                  </span>
                  <span className="lead-item-text05 opacity-90 font-size-10">
                    12.Feb.2023
                  </span>
                </div>
              </div>
              <div className="lead-item-container12">
                <div className="lead-item-container13">
                  <span className="lead-item-text06 opacity-90">
                    Deivisson Almeida de Souza
                  </span>
                </div>
                <span className="lead-item-text07 opacity-70 font-size-10">
                  Fullstack Developer
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
                  HeyData GmbH
                </span>
                <span className="lead-item-text12 opacity-90">
                  Fullstack Developer
                </span>
              </div>
            </div>
            <div className="lead-item-container18">
              <span className="lead-item-text13 opacity-40 font-size-10">
                Newly employed by:
              </span>
              <div className="lead-item-container19">
                <span className="lead-item-text14 opacity-90">
                  Flaschenpost GmbH
                </span>
                <span className="lead-item-text15 opacity-90">
                  Fullstack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="lead-item-container20 border-T shadow-bottom1">
        <div className="button-lila">
          <svg viewBox="0 0 1024 1024" className="lead-item-icon2">
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
  text: 'Text',
  rootClassName: '',
}

LeadItem.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LeadItem
