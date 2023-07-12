import React from 'react'

import PropTypes from 'prop-types'

import './search-bar.css'

const SearchBar = (props) => {
  return (
    <div className={`search-bar-search-bar ${props.rootClassName} `}>
      <svg viewBox="0 0 950.8571428571428 1024" className="search-bar-icon">
        <path
          d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"
          className=""
        ></path>
      </svg>
      <input
        type="text"
        placeholder={props.textinput_placeholder}
        className="input"
      />
    </div>
  )
}

SearchBar.defaultProps = {
  textinput_placeholder: 'Quick Search...',
  rootClassName: '',
}

SearchBar.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SearchBar
