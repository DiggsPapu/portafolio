import React from 'react'
import PropTypes from 'prop-types'

export default function ColorChangeDiv({
  title = 'Thing', text = 'Text', color,
}) {
  return (
    <div style={{
      backgroundColor: color,
    }}
    >
      <h3 style={{ color: 'black' }}>{title}</h3>
      <h4 style={{ color: 'black' }}>{text}</h4>
    </div>
  )
}

ColorChangeDiv.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}
ColorChangeDiv.defaultProps = {
  color: 'grey',
}
