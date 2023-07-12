import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './company-profile-overview.css'

const CompanyProfileOverview = (props) => {
  const [profile_menu, setProfile_menu] = useState(0)
  const [edit, setEdit] = useState(false)
  return (
    <div
      className={`company-profile-overview-company-profile-overview ${props.rootClassName} `}
    >
      <div className="company-profile-overview-container">
        <div className="company-profile-overview-container01 border-B shadow-bottom">
          <div className="company-profile-overview-container02">
            <span className="company-profile-overview-text opacity-90">
              Company
            </span>
            <span className="company-profile-overview-text01 opacity-70">
              Profile
            </span>
          </div>
          <div className="company-profile-overview-container03">
            <div className="button-gradient">
              <svg
                viewBox="0 0 1024 1024"
                className="company-profile-overview-icon"
              >
                <path
                  d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                  className=""
                ></path>
              </svg>
              <span className="company-profile-overview-text02">Scan now</span>
            </div>
            <div className="button-white">
              <svg
                viewBox="0 0 1024 1024"
                className="company-profile-overview-icon02 opacity-90"
              >
                <path
                  d="M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667z"
                  className=""
                ></path>
              </svg>
              <span className="company-profile-overview-text03 opacity-90">
                Delete profile
              </span>
            </div>
          </div>
        </div>
        <div className="company-profile-overview-container06 border-B shadow-bottom">
          <div className="company-profile-overview-container07">
            <Link to="/leads" className="company-profile-overview-navlink">
              <div className="company-profile-overview-container08 shadow-box">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-profile-overview-icon04"
                >
                  <path
                    d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                    className=""
                  ></path>
                </svg>
              </div>
            </Link>
            <span className="company-profile-overview-text04 opacity-90 font-size-10">
              Go back
            </span>
          </div>
          <div className="company-profile-overview-container09">
            <span className="company-profile-overview-text05 opacity-90 font-size-10">
              Next profile
            </span>
            <Link to="/leads" className="company-profile-overview-navlink1">
              <div className="company-profile-overview-container10 shadow-box">
                <svg
                  viewBox="0 0 1024 1024"
                  className="company-profile-overview-icon06"
                >
                  <path
                    d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                    className=""
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="company-profile-overview-container11">
        <div className="company-profile-overview-container12 shadow-box">
          <div className="company-profile-overview-container13 gradient2 border-B shadow-bottom">
            <div className="company-profile-overview-container14 shadow-box">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGxvZ298ZW58MHx8fHwxNjg5MTI5MzYwfDA&amp;ixlib=rb-4.0.3&amp;w=200"
                className="company-profile-overview-image"
              />
              <div className="company-profile-overview-container15"></div>
            </div>
            <div className="company-profile-overview-container16">
              <div className="company-profile-overview-container17 border-B">
                <div className="company-profile-overview-container18">
                  <span className="company-profile-overview-text06 opacity-90">
                    Company Name
                  </span>
                  <div className="company-profile-overview-container19">
                    <span className="opacity-90 font-size-10">Text</span>
                    <div className="company-profile-overview-container20"></div>
                    <span className="opacity-90 font-size-10">Text</span>
                    <div className="company-profile-overview-container21"></div>
                    <span className="opacity-90 font-size-10">Text</span>
                  </div>
                </div>
                <div className="company-profile-overview-container22">
                  <div className="button-gradient">
                    <span className="company-profile-overview-text10">
                      Message
                    </span>
                  </div>
                  <div className="button-white">
                    <span className="company-profile-overview-text11 opacity-90">
                      Remove Tracking
                    </span>
                  </div>
                </div>
              </div>
              <div className="company-profile-overview-container25">
                <div className="company-profile-overview-container26">
                  <span className="company-profile-overview-text12 opacity-70 font-size-10">
                    Position
                  </span>
                  <span className="company-profile-overview-text13 opacity-90">
                    Current position
                  </span>
                </div>
                <div className="company-profile-overview-container27">
                  <span className="company-profile-overview-text14 opacity-70 font-size-10">
                    Status
                  </span>
                  <span className="company-profile-overview-text15 opacity-90">
                    Employed
                  </span>
                </div>
                <div className="company-profile-overview-container28">
                  <span className="company-profile-overview-text16 opacity-70 font-size-10">
                    Level
                  </span>
                  <span className="company-profile-overview-text17 opacity-90">
                    Employee
                  </span>
                </div>
                <div className="company-profile-overview-container29">
                  <span className="company-profile-overview-text18 opacity-70 font-size-10">
                    Last scan
                  </span>
                  <span className="company-profile-overview-text19 opacity-90">
                    21.02.2023
                  </span>
                </div>
                <div className="company-profile-overview-container30">
                  <span className="company-profile-overview-text20 opacity-70 font-size-10">
                    Next scan
                  </span>
                  <span className="company-profile-overview-text21 opacity-90">
                    28.02.2023
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="company-profile-overview-container31">
            <div className="company-profile-overview-container32">
              {profile_menu === 0 && (
                <div className="company-profile-overview-enable">
                  <div className="company-profile-overview-container33">
                    <span className="company-profile-overview-text22 font-size-10">
                      {props.profile_menu_1}
                    </span>
                  </div>
                  <div className="company-profile-overview-container34 opacity-90"></div>
                </div>
              )}
              <div className="company-profile-overview-disable">
                <div className="company-profile-overview-container35">
                  <span className="company-profile-overview-text23 opacity-40 font-size-10">
                    {props.profile_menu_1}
                  </span>
                </div>
              </div>
            </div>
            <div className="company-profile-overview-container36">
              {profile_menu === 1 && (
                <div className="company-profile-overview-enable1">
                  <div className="company-profile-overview-container37">
                    <span className="company-profile-overview-text24 font-size-10">
                      {props.profile_menu_2}
                    </span>
                  </div>
                  <div className="company-profile-overview-container38 opacity-90"></div>
                </div>
              )}
              <div className="company-profile-overview-disable1">
                <div className="company-profile-overview-container39">
                  <span className="company-profile-overview-text25 opacity-40 font-size-10">
                    {props.profile_menu_2}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {profile_menu === 0 && (
          <div className="company-profile-overview-container40">
            <div className="company-profile-overview-container41 shadow-box">
              <div className="company-profile-overview-container42 shadow-bottom1 gradient border-B">
                <div className="company-profile-overview-container43">
                  <span className="company-profile-overview-text26 font-size-10">
                    Company
                  </span>
                  <span className="opacity-70 font-size-10">details</span>
                </div>
              </div>
              <div className="company-profile-overview-container44">
                <div className="company-profile-overview-container45 shadow-bottom1 border-B">
                  <span className="company-profile-overview-text28 opacity-90 font-size-10">
                    First Name:
                  </span>
                  <div className="company-profile-overview-container46">
                    <input
                      type="text"
                      placeholder="Max"
                      className="company-profile-overview-textinput input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container47 border-B">
                  <span className="company-profile-overview-text29 opacity-90 font-size-10">
                    Last Name:
                  </span>
                  <div className="company-profile-overview-container48">
                    <input
                      type="text"
                      placeholder="Mustermann"
                      className="company-profile-overview-textinput1 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container49 shadow-bottom1 border-B">
                  <span className="company-profile-overview-text30 opacity-90 font-size-10">
                    Employed by:
                  </span>
                  <div className="company-profile-overview-container50">
                    <input
                      type="text"
                      placeholder="Company name"
                      className="company-profile-overview-textinput2 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container51 border-B">
                  <span className="company-profile-overview-text31 opacity-90 font-size-10">
                    Employed since:
                  </span>
                  <div className="company-profile-overview-container52">
                    <input
                      type="text"
                      placeholder="01.01.2022"
                      className="company-profile-overview-textinput3 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container53 shadow-bottom1 border-B">
                  <span className="company-profile-overview-text32 opacity-90 font-size-10">
                    Privat Email:
                  </span>
                  <div className="company-profile-overview-container54">
                    <input
                      type="text"
                      placeholder="max@mustermann.com"
                      className="company-profile-overview-textinput4 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container55 border-B">
                  <span className="company-profile-overview-text33 opacity-90 font-size-10">
                    Work email:
                  </span>
                  <div className="company-profile-overview-container56">
                    <input
                      type="text"
                      placeholder="max@company.com"
                      className="company-profile-overview-textinput5 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container57 shadow-bottom1 border-B">
                  <span className="company-profile-overview-text34 opacity-90 font-size-10">
                    Current position:
                  </span>
                  <div className="company-profile-overview-container58">
                    <input
                      type="text"
                      placeholder="Position"
                      className="company-profile-overview-textinput6 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container59 border-B">
                  <span className="company-profile-overview-text35 opacity-90 font-size-10">
                    Level:
                  </span>
                  <div className="company-profile-overview-container60">
                    <input
                      type="text"
                      placeholder="Position level"
                      className="company-profile-overview-textinput7 input"
                    />
                  </div>
                </div>
                <div className="company-profile-overview-container61">
                  <span className="company-profile-overview-text36 opacity-90 font-size-10">
                    LinkedIn profile:
                  </span>
                  <div className="company-profile-overview-container62">
                    <input
                      type="text"
                      placeholder="LinkedInd Url"
                      className="company-profile-overview-textinput8 input"
                    />
                  </div>
                </div>
              </div>
              {edit && (
                <div className="company-profile-overview-container63 border-T gradient shadow-bottom">
                  <div className="company-profile-overview-container64">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-overview-icon08"
                    >
                      <path
                        d="M384 690l452-452 60 60-512 512-238-238 60-60z"
                        className=""
                      ></path>
                    </svg>
                    <span className="">Save</span>
                  </div>
                  <div className="company-profile-overview-container65">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-profile-overview-icon10"
                    >
                      <path
                        d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                        className=""
                      ></path>
                    </svg>
                    <span className="">
                      Discard
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </div>
              )}
              {edit && (
                <div className="company-profile-overview-container66 border-T gradient shadow-bottom"></div>
              )}
            </div>
            <div className="company-profile-overview-container67 shadow-box">
              <div className="company-profile-overview-container68 border-B">
                <div className="company-profile-overview-container69">
                  <span className="company-profile-overview-text39 opacity-90 font-size-10">
                    Log
                  </span>
                  <span className="company-profile-overview-text40 opacity-70 font-size-10">
                    Overview
                  </span>
                </div>
              </div>
              <div className="company-profile-overview-container70 shadow-bottom1 border-B font-size-10">
                <div className="company-profile-overview-container71">
                  <div className="company-profile-overview-container72 border-R">
                    <span className="opacity-70">Status:</span>
                  </div>
                  <div className="company-profile-overview-container73 border-R">
                    <span className="opacity-70">Description:</span>
                  </div>
                </div>
                <div className="company-profile-overview-container74">
                  <span className="opacity-70">Last scan:</span>
                </div>
              </div>
              <div className="company-profile-overview-container75">
                <div className="company-profile-overview-container76 border-B">
                  <div className="company-profile-overview-container77">
                    <div className="company-profile-overview-container78 border-R">
                      <div className="status-item-scanned">
                        <span className="opacity-90 font-size-10">
                          Successful
                        </span>
                      </div>
                    </div>
                    <div className="company-profile-overview-container80 border-R">
                      <span className="opacity-90">
                        Here you will find the description of the last log
                        entry.
                      </span>
                    </div>
                  </div>
                  <div className="company-profile-overview-container81">
                    <span className="opacity-90 font-size-10">12.02.2023</span>
                    <div className="company-profile-overview-container82">
                      <span className="opacity-90 font-size-10">12:01</span>
                      <span className="company-profile-overview-text48 opacity-90 font-size-10">
                        AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="company-profile-overview-container83 border-B">
                  <div className="company-profile-overview-container84">
                    <div className="company-profile-overview-container85 border-R">
                      <div className="status-item-scanned">
                        <span className="company-profile-overview-text49">
                          Successful
                        </span>
                      </div>
                    </div>
                    <div className="company-profile-overview-container87 border-R">
                      <span className="company-profile-overview-text50">
                        Here you will find the description of the last log
                        entry.
                      </span>
                    </div>
                  </div>
                  <div className="company-profile-overview-container88">
                    <span className="company-profile-overview-text51">
                      12.02.2023
                    </span>
                    <div className="company-profile-overview-container89">
                      <span className="company-profile-overview-text52">
                        12:01
                      </span>
                      <span className="company-profile-overview-text53">
                        AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

CompanyProfileOverview.defaultProps = {
  profile_menu_2: 'Employees',
  rootClassName: '',
  profile_menu_1: 'Detail',
}

CompanyProfileOverview.propTypes = {
  profile_menu_2: PropTypes.string,
  rootClassName: PropTypes.string,
  profile_menu_1: PropTypes.string,
}

export default CompanyProfileOverview
