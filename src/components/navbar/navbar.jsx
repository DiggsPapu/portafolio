import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import Logo from '../logo/logo'
import Button from '../button/button'
import LoginButton from '../loginButton/loginButton'
import DropdownButton from '../dropdownButton/dropdownButton'
import Linkedin from '../../assets/linkedin.avif'
import mail from '../../assets/mail.png'
import github from '../../assets/github.svg'

export default function NavBar() {
  const subject = 'Hi Diego'
  const body = 'I wanted to contact you for...'
  return (
    <nav className={styles.navbar}>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <Logo />
      </Link>
      <div className={styles.dropdown}>
        <DropdownButton title="Contact Me" options={[['https://www.linkedin.com/in/diego-andres-alonzo-medinilla-b64b8920a/', Linkedin], ['https://github.com/DiggsPapu', github], [`mailto:diego.alonzom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, mail]]} color="white" backgroundColor="rgba(100,33,255,255)" />
      </div>
      <Link to="/AboutMe" style={{ textDecoration: 'none' }}>
        <LoginButton text="About Me" />
      </Link>
    </nav>
  )
}