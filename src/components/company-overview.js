import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import SearchBar from './search-bar'
import NotificationButton from './notification-button'
import ProfileButton from './profile-button'
import CompanyItem2 from './company-item2'
import './company-overview.css'
import { useFunctions } from '../functions/app'
import { getList } from '../database/app'

const CompanyOverview = (props) => {
  const [select, setSelect] = useState(false)
  const [deleteItems, setDeleteItems] = useState(false)
  const [pagePosition, setPagePosition] = useState(1)
  const [nextBtn, setNextBtn] = useState(true)
  const [viewFilter, setViewFilter] = useState(false)
  const [backBtn, setBackBtn] = useState(false)
  const [selectAll, setSelectAll] = useState(false)
  const [itemsFrom, setItemsFrom] = useState(0);
  const [itemsTo, setItemsTo] = useState(25);
  const [items, setItems] = useState([]);

  useEffect(async () => {
    await getListTest()
  }, []);

  const getListTest = async () => {
    let dbList = await getList('company');
    const test = Object.values(dbList).map(item => {
      let size = 0;
      if (item.employee.includes) {
        size = item.employee.list.length
      }
      return (
        <li key={item.id} className="list-item">
          <CompanyItem2
            name={item.name}
            status={1}
            size={5}
          >
          </CompanyItem2>
        </li>);
    });
    setItems(test.splice(0, 25))
  }



  const nextItems = () => {
    let from = itemsFrom + 25
    let to = itemsTo + 25
    setItemsFrom(from);
    setItemsTo(to);
  };



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
              className="company-overview-icon02 opacity-90"
            >
              <path d="M182 242q-12-14-12-28 0-18 13-31t31-13h596q18 0 31 13t13 31q2 12-10 26l-246 314v256q0 18-12 31t-30 13h-86q-18 0-31-13t-13-31v-256q-240-306-244-312z"></path>
            </svg>
            <span className="opacity-90">Edit Filter</span>
          </div>
          {select && (
            <div onClick={() => setDeleteItems(true)} className="button-red">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="company-overview-icon04 opacity-90"
              >
                <path d="M292.571 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM438.857 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM585.143 786.286v-402.286c0-10.286-8-18.286-18.286-18.286h-36.571c-10.286 0-18.286 8-18.286 18.286v402.286c0 10.286 8 18.286 18.286 18.286h36.571c10.286 0 18.286-8 18.286-18.286zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
              <span className="opacity-90">Delete</span>
            </div>
          )}
        </div>
      </div>
      {viewFilter && <div className="company-overview-container08"></div>}
      <div className="company-overview-container09">
        <div className="company-overview-container10 border-B shadow-bottom font-size-10">
          <div className="company-overview-container11 border-R">
            <div
              onClick={() => {
                setSelect(!select)
                setSelectAll(!selectAll)
              }}
              className="company-overview-container12"
            >
              {selectAll && (
                <div className="company-overview-container13">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="company-overview-icon06"
                  >
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="company-overview-container14 border-R">
            <span className="opacity-70">Name:</span>
          </div>
          <div className="company-overview-container15 border-R">
            <span className="opacity-70">Size:</span>
          </div>
          <div className="company-overview-container16 border-R">
            <span className="opacity-70">Monitors:</span>
          </div>
          <div className="company-overview-container17 border-R">
            <span className="opacity-70">Folder:</span>
          </div>
          <div className="company-overview-container18 border-R">
            <span className="opacity-70">Last scan:</span>
          </div>
          <div className="company-overview-container19">
            <span className="opacity-70">Actions:</span>
          </div>
        </div>
        <div className="company-overview-container20">
          <ul className="company-overview-ul list">
            {items}
          </ul>
        </div>
        <div className="company-overview-container21 border-T">
          <div className="company-overview-container22">
            <div className="company-overview-container23">
              <span className="company-overview-text11 opacity-70 font-size-10">
                Display
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="company-overview-text12 opacity-90">25</span>
              <span className="company-overview-text13 opacity-70 font-size-10">
                from
              </span>
              <span className="company-overview-text14 opacity-90">
                {props.total}
              </span>
            </div>
          </div>
          <div className="company-overview-container24">
            <div className="company-overview-container25">
              <div className="company-overview-back-button">
                {!backBtn && (
                  <div className="company-overview-container26 opacity-40">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-icon08"
                    >
                      <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                    </svg>
                  </div>
                )}
                {backBtn && (
                  <div className="company-overview-container27 opacity-90">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-icon10"
                    >
                      <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className="company-overview-container28">
                <div className="company-overview-container29">
                  {pagePosition === 1 && (
                    <span className="company-overview-text15 opacity-90">
                      {props.pageNr1}
                    </span>
                  )}
                  <span className="company-overview-text16 opacity-40 font-size-10">
                    {props.pageNr1}
                  </span>
                </div>
                <div className="company-overview-container30">
                  {pagePosition === 2 && (
                    <span className="company-overview-text17 opacity-90">
                      {props.pageNr2}
                    </span>
                  )}
                  <span className="company-overview-text18 opacity-40 font-size-10">
                    {props.pageNr2}
                  </span>
                </div>
                <div className="company-overview-container31">
                  {pagePosition === 3 && (
                    <span className="company-overview-text19 opacity-90">
                      {props.pageNr3}
                    </span>
                  )}
                  <span className="company-overview-text20 opacity-40 font-size-10">
                    {props.pageNr3}
                  </span>
                </div>
              </div>
              <div className="company-overview-next-button">
                {nextBtn && (
                  <div className="company-overview-container32 opacity-90">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-icon12"
                    >
                      <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                    </svg>
                  </div>
                )}
                {!nextBtn && (
                  <div className="company-overview-container33 opacity-40">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="company-overview-icon14"
                    >
                      <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteItems && (
        <div className="company-overview-container34">
          <div className="company-overview-container35 shadow-box">
            <div className="company-overview-container36 shadow-bottom1 gradient border-B">
              <div className="company-overview-container37">
                <span className="font-size-10">Delete</span>
                <span className="opacity-70 font-size-10">Company</span>
              </div>
            </div>
            <div className="company-overview-container38">
              <span className="company-overview-text23 opacity-90">
                You are about to delete items!
              </span>
              <div className="company-overview-container39">
                <span className="company-overview-text24 opacity-70 font-size-10">
                  <span>This process will permanently delete</span>
                  <br></br>
                  <span>your data from the database!</span>
                  <br></br>
                  <span>Are you sure you want to continue?</span>
                  <br></br>
                </span>
              </div>
              <div className="company-overview-container40">
                <span className="company-overview-text31 opacity-90 font-size-10">
                  To confirm this process, type in your email address:
                </span>
                <div className="company-overview-container41">
                  <input
                    type="text"
                    placeholder="Enter your email address here"
                    className="company-overview-textinput input"
                  />
                </div>
              </div>
            </div>
            <div className="company-overview-container42 border-T">
              <div className="company-overview-container43">
                <div className="company-overview-container44 button-red">
                  <span className="company-overview-text32">Delete now</span>
                </div>
                <div
                  onClick={() => setDeleteItems(false)}
                  className="company-overview-container45 button-white"
                >
                  <span className="company-overview-text33 opacity-90">
                    Cancel this process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

CompanyOverview.defaultProps = {
  total: '1300',
  pageNr3: '3',
  pageNr2: '2',
  pageNr1: '1',
}

CompanyOverview.propTypes = {
  total: PropTypes.string,
  pageNr3: PropTypes.string,
  pageNr2: PropTypes.string,
  pageNr1: PropTypes.string,
}

export default CompanyOverview
