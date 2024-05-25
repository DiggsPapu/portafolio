import React from 'react'
import PropTypes from 'prop-types'
import styles from './TechDiv.module.css'

export default function TechDiv({
  image, link, backgroundColor,
}) {
  return (
    <div style={{ backgroundColor }}>
      <a href={link}>
        <img src={image} alt={link} />
      </a>
    </div>
  )
}
TechDiv.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string,
  backgroundColor: PropTypes.string,
}
TechDiv.defaultProps = {
  backgroundColor: 'black',
  image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4202090%2Finstagram_logo_social_social_media_icon&psig=AOvVaw2-H2pvpMHpDIeoh_BcbcxX&ust=1716742491085000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLib2qaiqYYDFQAAAAAdAAAAABAE',
  link: 'https://www.instagram.com/',
}
