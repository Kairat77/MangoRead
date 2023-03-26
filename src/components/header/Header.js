import React from 'react'
import style from './css/header.module.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../foto/Logo.svg'
import PostList from '../propertise/PostList'
import RegisterButton from '../buttons/RegisterButton'


const Header = () => {
  return (
    <div className={style.menu}>
      <div className={style.center}>
        <div className={style.block}>
          <NavLink to={'/'} className={style.ai}>
            <img src={Logo} alt="logo" />
            <div className={style.text}>
                <h2>MangoRead</h2>
                <p>Читай манго с нами</p>
            </div>
          </NavLink>
        </div>
        <PostList/>
        <RegisterButton/>
      </div>
    </div>
  )
}

export default Header
