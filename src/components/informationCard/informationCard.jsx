import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './informationCard.module.css'

export default function informationCard({
  title, information, fontColor, circular, backgroundColor,
}) {
  const [open, setOpen] = useState(true)
  return (
    <div className={styles.container}>
      <button
        className={circular ? styles.buttonCircular : styles.buttonNormal}
        style={{ color: fontColor, backgroundColor }}
        type="button"
        onClick={() => { setOpen(!open) }}
      >
        <h1 className={styles.title}>{title}</h1>
      </button>
      <div
        className={styles.information}
        hidden={open}
        style={{ color: fontColor, backgroundColor }}
      >
        {information}
      </div>

    </div>
  )
}
informationCard.propTypes = {
  information: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  circular: PropTypes.bool,
}
