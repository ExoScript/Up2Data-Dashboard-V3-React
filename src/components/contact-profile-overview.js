import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import ContactItem from './contact-item'
import './contact-profile-overview.css'

const ContactProfileOverview = (props) => {
  const [edit, setEdit] = useState(false)
  const [profile_menu, setProfile_menu] = useState(0)
  return (
    <div className="contact-profile-overview-profile-overview">
      <div className="contact-profile-overview-container">
        <div className="contact-profile-overview-container001 border-B shadow-bottom">
          <div className="contact-profile-overview-container002">
            <span className="contact-profile-overview-text opacity-90">
              Contact
            </span>
            <span className="contact-profile-overview-text01 opacity-70">
              Profile
            </span>
          </div>
          <div className="contact-profile-overview-container003">
            <div className="button-gradient">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-profile-overview-icon"
              >
                <path d="M640 512c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496zM554.667 512c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165zM662.741 361.301c41.685 41.643 62.549 96.171 62.549 150.827s-20.779 109.184-62.379 150.869c-16.64 16.683-16.64 43.691 0.043 60.331s43.691 16.64 60.331-0.043c58.283-58.325 87.381-134.869 87.339-211.243s-29.269-152.875-87.595-211.157c-16.683-16.64-43.691-16.64-60.331 0.043s-16.64 43.691 0.043 60.331zM361.259 662.699c-41.685-41.6-62.549-96.128-62.592-150.784s20.779-109.184 62.379-150.869c16.64-16.683 16.64-43.691-0.043-60.331s-43.691-16.64-60.331 0.043c-58.24 58.283-87.381 134.827-87.339 211.2s29.269 152.875 87.595 211.157c16.683 16.64 43.691 16.64 60.331-0.043s16.64-43.691-0.043-60.331zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.488s-37.461 196.48-112.427 271.488c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.429-211.797 137.429-331.819s-45.824-240.213-137.429-331.819c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM240.512 783.488c-74.965-75.008-112.427-173.184-112.427-271.488s37.461-196.48 112.427-271.488c16.64-16.683 16.64-43.691 0-60.331s-43.691-16.64-60.331 0c-91.605 91.605-137.429 211.797-137.429 331.819s45.824 240.213 137.429 331.819c16.64 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="contact-profile-overview-text02">Scan now</span>
            </div>
            <div className="button-white">
              <svg
                viewBox="0 0 1024 1024"
                className="contact-profile-overview-icon02 opacity-90"
              >
                <path d="M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667z"></path>
              </svg>
              <span className="contact-profile-overview-text03 opacity-90">
                Delete profile
              </span>
            </div>
          </div>
        </div>
        <div className="contact-profile-overview-container006 border-B shadow-bottom">
          <div className="contact-profile-overview-container007">
            <Link to="/leads" className="contact-profile-overview-navlink">
              <div className="contact-profile-overview-container008 shadow-box">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-profile-overview-icon04"
                >
                  <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                </svg>
              </div>
            </Link>
            <span className="contact-profile-overview-text04 opacity-90 font-size-10">
              Go back
            </span>
          </div>
          <div className="contact-profile-overview-container009">
            <span className="contact-profile-overview-text05 opacity-90 font-size-10">
              Next profile
            </span>
            <Link to="/leads" className="contact-profile-overview-navlink1">
              <div className="contact-profile-overview-container010 shadow-box">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-profile-overview-icon06"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact-profile-overview-container011">
        <div className="contact-profile-overview-container012 shadow-box">
          <div className="contact-profile-overview-container013 gradient2 border-B shadow-bottom">
            <div className="contact-profile-overview-container014 shadow-box">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTY4ODczOTYzN3ww&amp;ixlib=rb-4.0.3&amp;w=200"
                className="contact-profile-overview-image"
              />
              <div className="contact-profile-overview-container015"></div>
            </div>
            <div className="contact-profile-overview-container016">
              <div className="contact-profile-overview-container017 border-B">
                <div className="contact-profile-overview-container018">
                  <div className="contact-profile-overview-container019">
                    <span className="contact-profile-overview-text06 opacity-90">
                      User Name
                    </span>
                    <div className="contact-profile-overview-container020 shadow-box">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="contact-profile-overview-icon08"
                      >
                        <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                      </svg>
                      <span className="font-size-10">Tracking</span>
                    </div>
                  </div>
                  <div className="contact-profile-overview-container021">
                    <span className="contact-profile-overview-text08 opacity-90 font-size-10">
                      Company name
                    </span>
                    <div className="contact-profile-overview-container022"></div>
                    <span className="contact-profile-overview-text09 opacity-90 font-size-10">
                      email
                    </span>
                    <div className="contact-profile-overview-container023"></div>
                    <span className="contact-profile-overview-text10 opacity-90 font-size-10">
                      Location
                    </span>
                  </div>
                </div>
                <div className="contact-profile-overview-container024">
                  <div className="button-gradient">
                    <span className="contact-profile-overview-text11">
                      Message
                    </span>
                  </div>
                  <div className="button-white">
                    <span className="contact-profile-overview-text12 opacity-90">
                      Remove Tracking
                    </span>
                  </div>
                </div>
              </div>
              <div className="contact-profile-overview-container027">
                <div className="contact-profile-overview-container028">
                  <span className="contact-profile-overview-text13 opacity-70 font-size-10">
                    Position
                  </span>
                  <span className="contact-profile-overview-text14 opacity-90">
                    Current position
                  </span>
                </div>
                <div className="contact-profile-overview-container029">
                  <span className="contact-profile-overview-text15 opacity-70 font-size-10">
                    Status
                  </span>
                  <span className="contact-profile-overview-text16 opacity-90">
                    Employed
                  </span>
                </div>
                <div className="contact-profile-overview-container030">
                  <span className="contact-profile-overview-text17 opacity-70 font-size-10">
                    Level
                  </span>
                  <span className="contact-profile-overview-text18 opacity-90">
                    Employee
                  </span>
                </div>
                <div className="contact-profile-overview-container031">
                  <span className="contact-profile-overview-text19 opacity-70 font-size-10">
                    Last scan
                  </span>
                  <span className="contact-profile-overview-text20 opacity-90">
                    21.02.2023
                  </span>
                </div>
                <div className="contact-profile-overview-container032">
                  <span className="contact-profile-overview-text21 opacity-70 font-size-10">
                    Next scan
                  </span>
                  <span className="contact-profile-overview-text22 opacity-90">
                    28.02.2023
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-profile-overview-container033">
            <div className="contact-profile-overview-container034">
              <div
                onClick={() => setProfile_menu(0)}
                className="contact-profile-overview-container035"
              >
                <div className="contact-profile-overview-container036">
                  <span className="contact-profile-overview-text23 opacity-40 font-size-10">
                    {props.profile_menu_1}
                  </span>
                </div>
              </div>
              {profile_menu === 0 && (
                <div className="contact-profile-overview-container037">
                  <div className="contact-profile-overview-container038">
                    <span className="opacity-90 font-size-10">
                      {props.profile_menu_1}
                    </span>
                  </div>
                  <div className="contact-profile-overview-container039 opacity-90"></div>
                </div>
              )}
            </div>
            <div className="contact-profile-overview-container040">
              <div
                onClick={() => setProfile_menu(1)}
                className="contact-profile-overview-container041"
              >
                <div className="contact-profile-overview-container042">
                  <span className="contact-profile-overview-text25 opacity-40 font-size-10">
                    {props.profile_menu_2}
                  </span>
                </div>
              </div>
              {profile_menu === 1 && (
                <div className="contact-profile-overview-container043">
                  <div className="contact-profile-overview-container044">
                    <span className="font-size-10">{props.profile_menu_2}</span>
                  </div>
                  <div className="contact-profile-overview-container045"></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {profile_menu === 1 && (
          <div className="contact-profile-overview-container046 shadow-box">
            <div className="contact-profile-overview-container047 border-B">
              <div className="contact-profile-overview-container048">
                <span className="contact-profile-overview-text27 opacity-90 font-size-10">
                  Work
                </span>
                <span className="contact-profile-overview-text28 opacity-70 font-size-10">
                  colleagues
                </span>
              </div>
            </div>
            <div className="contact-profile-overview-container049 shadow-bottom1 border-B font-size-10">
              <div className="contact-profile-overview-container050 border-R">
                <span className="contact-profile-overview-text29">Name:</span>
              </div>
              <div className="contact-profile-overview-container051 border-R">
                <span className="contact-profile-overview-text30">
                  Position:
                </span>
              </div>
              <div className="contact-profile-overview-container052 border-R">
                <span className="contact-profile-overview-text31">Folder:</span>
              </div>
              <div className="contact-profile-overview-container053 border-R">
                <span className="contact-profile-overview-text32">Status:</span>
              </div>
              <div className="contact-profile-overview-container054 border-R">
                <span className="contact-profile-overview-text33">Scan:</span>
              </div>
              <div className="contact-profile-overview-container055">
                <span className="contact-profile-overview-text34">
                  Actions:
                </span>
              </div>
            </div>
            <div className="contact-profile-overview-container056">
              <ul className="list">
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name11"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name12"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name13"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name14"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name15"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name16"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name17"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name18"></ContactItem>
                </li>
                <li className="list-item">
                  <ContactItem rootClassName="contact-item-root-class-name19"></ContactItem>
                </li>
              </ul>
            </div>
          </div>
        )}
        {profile_menu === 0 && (
          <div className="contact-profile-overview-container057">
            <div className="contact-profile-overview-container058 shadow-box">
              <div
                onClick={() => setEdit(!edit)}
                className="contact-profile-overview-container059 shadow-bottom1 gradient border-B"
              >
                <div className="contact-profile-overview-container060">
                  <span className="contact-profile-overview-text35 font-size-10">
                    Contact
                  </span>
                  <span className="opacity-70 font-size-10">details</span>
                </div>
              </div>
              <div className="contact-profile-overview-container061">
                <div className="contact-profile-overview-container062 shadow-bottom1 border-B">
                  <span className="contact-profile-overview-text37 opacity-90 font-size-10">
                    First Name:
                  </span>
                  <div className="contact-profile-overview-container063">
                    <input
                      type="text"
                      placeholder="Max"
                      className="contact-profile-overview-textinput input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container064 border-B">
                  <span className="contact-profile-overview-text38 opacity-90 font-size-10">
                    Last Name:
                  </span>
                  <div className="contact-profile-overview-container065">
                    <input
                      type="text"
                      placeholder="Mustermann"
                      className="contact-profile-overview-textinput1 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container066 shadow-bottom1 border-B">
                  <span className="contact-profile-overview-text39 opacity-90 font-size-10">
                    Employed by:
                  </span>
                  <div className="contact-profile-overview-container067">
                    <input
                      type="text"
                      placeholder="Company name"
                      className="contact-profile-overview-textinput2 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container068 border-B">
                  <span className="contact-profile-overview-text40 opacity-90 font-size-10">
                    Employed since:
                  </span>
                  <div className="contact-profile-overview-container069">
                    <input
                      type="text"
                      placeholder="01.01.2022"
                      className="contact-profile-overview-textinput3 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container070 shadow-bottom1 border-B">
                  <span className="contact-profile-overview-text41 opacity-90 font-size-10">
                    Privat Email:
                  </span>
                  <div className="contact-profile-overview-container071">
                    <input
                      type="text"
                      placeholder="max@mustermann.com"
                      className="contact-profile-overview-textinput4 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container072 border-B">
                  <span className="contact-profile-overview-text42 opacity-90 font-size-10">
                    Work email:
                  </span>
                  <div className="contact-profile-overview-container073">
                    <input
                      type="text"
                      placeholder="max@company.com"
                      className="contact-profile-overview-textinput5 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container074 shadow-bottom1 border-B">
                  <span className="contact-profile-overview-text43 opacity-90 font-size-10">
                    Current position:
                  </span>
                  <div className="contact-profile-overview-container075">
                    <input
                      type="text"
                      placeholder="Position"
                      className="contact-profile-overview-textinput6 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container076 border-B">
                  <span className="contact-profile-overview-text44 opacity-90 font-size-10">
                    Level:
                  </span>
                  <div className="contact-profile-overview-container077">
                    <input
                      type="text"
                      placeholder="Position level"
                      className="contact-profile-overview-textinput7 input"
                    />
                  </div>
                </div>
                <div className="contact-profile-overview-container078">
                  <span className="contact-profile-overview-text45 opacity-90 font-size-10">
                    LinkedIn profile:
                  </span>
                  <div className="contact-profile-overview-container079">
                    <input
                      type="text"
                      placeholder="LinkedInd Url"
                      className="contact-profile-overview-textinput8 input"
                    />
                  </div>
                </div>
              </div>
              {edit && (
                <div className="contact-profile-overview-container080 border-T gradient shadow-bottom">
                  <div className="contact-profile-overview-container081">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contact-profile-overview-icon10"
                    >
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>Save</span>
                  </div>
                  <div className="contact-profile-overview-container082">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="contact-profile-overview-icon12"
                    >
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                    <span>
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
                <div className="contact-profile-overview-container083 border-T gradient shadow-bottom"></div>
              )}
            </div>
            <div className="contact-profile-overview-container084 shadow-box">
              <div className="contact-profile-overview-container085 border-B">
                <div className="contact-profile-overview-container086">
                  <span className="contact-profile-overview-text48 opacity-90 font-size-10">
                    Log
                  </span>
                  <span className="contact-profile-overview-text49 opacity-70 font-size-10">
                    Overview
                  </span>
                </div>
              </div>
              <div className="contact-profile-overview-container087 shadow-bottom1 border-B font-size-10">
                <div className="contact-profile-overview-container088">
                  <div className="contact-profile-overview-container089 border-R">
                    <span className="opacity-70">Status:</span>
                  </div>
                  <div className="contact-profile-overview-container090 border-R">
                    <span className="opacity-70">Description:</span>
                  </div>
                </div>
                <div className="contact-profile-overview-container091">
                  <span className="opacity-70">Last scan:</span>
                </div>
              </div>
              <div className="contact-profile-overview-container092">
                <div className="contact-profile-overview-container093 border-B">
                  <div className="contact-profile-overview-container094">
                    <div className="contact-profile-overview-container095 border-R">
                      <div className="status-item-scanned">
                        <span className="opacity-90 font-size-10">
                          Successful
                        </span>
                      </div>
                    </div>
                    <div className="contact-profile-overview-container097 border-R">
                      <span className="opacity-90">
                        Here you will find the description of the last log
                        entry.
                      </span>
                    </div>
                  </div>
                  <div className="contact-profile-overview-container098">
                    <span className="opacity-90 font-size-10">12.02.2023</span>
                    <div className="contact-profile-overview-container099">
                      <span className="opacity-90 font-size-10">12:01</span>
                      <span className="contact-profile-overview-text57 opacity-90 font-size-10">
                        AM
                      </span>
                    </div>
                  </div>
                </div>
                <div className="contact-profile-overview-container100 border-B">
                  <div className="contact-profile-overview-container101">
                    <div className="contact-profile-overview-container102 border-R">
                      <div className="status-item-scanned">
                        <span className="contact-profile-overview-text58">
                          Successful
                        </span>
                      </div>
                    </div>
                    <div className="contact-profile-overview-container104 border-R">
                      <span className="contact-profile-overview-text59">
                        Here you will find the description of the last log
                        entry.
                      </span>
                    </div>
                  </div>
                  <div className="contact-profile-overview-container105">
                    <span className="contact-profile-overview-text60">
                      12.02.2023
                    </span>
                    <div className="contact-profile-overview-container106">
                      <span className="contact-profile-overview-text61">
                        12:01
                      </span>
                      <span className="contact-profile-overview-text62">
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

ContactProfileOverview.defaultProps = {
  profile_menu_1: 'Detail',
  profile_menu_2: 'Colleagues',
}

ContactProfileOverview.propTypes = {
  profile_menu_1: PropTypes.string,
  profile_menu_2: PropTypes.string,
}

export default ContactProfileOverview
