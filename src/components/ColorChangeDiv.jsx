import React from 'react'
import PropTypes from 'prop-types'
import style from './colorChangeDiv.module.css'

export default function ColorChangeDiv({
  title = 'Thing', text = 'Text', backgroundColor, fontColor, fontFamily,
}) {
  return (
    <div
      className={style.colorChangeDiv}
      style={{
        backgroundColor,
      }}
    >
      <h3 style={{ color: fontColor, fontFamily }}>{title}</h3>
      <h4 style={{ color: fontColor, fontFamily }}>{text}</h4>
    </div>
  )
}

ColorChangeDiv.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  fontFamily: PropTypes.string,
}
ColorChangeDiv.defaultProps = {
  backgroundColor: 'grey',
  fontColor: 'black',
  fontFamily: 'Times New Roman',
}
