import React from 'react'

import PropTypes from 'prop-types'

import './profile-button.css'

const ProfileButton = (props) => {
  return (
    <div className="profile-button-profile-button">
      <div className="profile-button-container">
        <span className="opacity-90">{props.text}</span>
      </div>
      <div className="profile-button-container1 border-L">
        <div className="profile-button-container2">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="profile-button-image"
          />
        </div>
      </div>
    </div>
  )
}

ProfileButton.defaultProps = {
  text: 'Daniel D.',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHVzZXJ8ZW58MHx8fHwxNjg4NTkyODg3fDA&ixlib=rb-4.0.3&w=200',
}

ProfileButton.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default ProfileButton
