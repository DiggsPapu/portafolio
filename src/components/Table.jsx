import React from 'react'
import PropTypes from 'prop-types'
import styles from './Table.module.css'

export default function Table({
  tableItems,
}) {
  return (
    <div className={styles.tableContainer}>
      {
            tableItems.map((item) => (
              <div className={styles.tableItem}>
                <a href={item.link}>
                  <img src={item.src} alt={item.alt} />
                </a>
              </div>
            ))
        }
    </div>
  )
}
Table.propTypes = {
  tableItems: PropTypes.array.isRequired,
}
