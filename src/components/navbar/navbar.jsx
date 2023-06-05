import React from 'react'
import styles from './navbar.module.css'
import Button from '../button/button'
import Logo from '../logo/logo'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  )
}
