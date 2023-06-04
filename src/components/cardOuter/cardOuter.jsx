import React from 'react'
import PropTypes from 'prop-types'
import styles from './cardOuter.module.css'

export default function ExpandableCard({
  title, information, backgroundColorTitle, color, backgroundColorInfo, color1,
}) {
  const face1 = [styles.face, styles.face1].join(' ')
  const face2 = [styles.face, styles.face2].join(' ')
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div
          className={face1}
          style={{ backgroundColor: backgroundColorTitle }}
        >
          <div className={styles.content}>
            <h3 className={styles.titleCard} style={{ color }}>
              {title}
            </h3>
          </div>
        </div>
        <div className={face2} style={{ backgroundColor: backgroundColorInfo }}>
          <div className={styles.content} style={{ color: color1 }}>
            <p>
              {information}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
ExpandableCard.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
  color: PropTypes.string,
  color1: PropTypes.string,
  backgroundColorInfo: PropTypes.string,
  backgroundColorTitle: PropTypes.string,
}
ExpandableCard.defaultProps = {
  color: 'white',
  backgroundColorInfo: 'black',
  backgroundColorTitle: 'red',
  color1: 'white',
}
