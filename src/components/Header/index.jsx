import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.avif'
import iconToggle from '../../assets/icon-menu.svg'
import iconClose from '../../assets/icon-close-menu.svg'

const Header = () => {
    const [isShow, setIsShow] = useState(false)

    const handleButton = () => {
        setIsShow(prev => !prev)
    }

    return (
        <header>
            <div className={"container " + styles.header}>
                <div className={styles.logoBtn}>
                    <a href="/">
                        <img src={logo} alt="Logo" />
                    </a>

                    <button onClick={handleButton}>
                        {!isShow ? 
                            <img src={iconToggle} alt="Icon para abrir menu" /> :
                            <img src={iconClose} alt="Icon para fechar menu" />
                        }
                    </button>
                </div>
                
                <nav className={isShow ? styles.activeNav : styles.inactiveNav}>
                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>
                        <li>
                            <a href="/">Sobre</a>
                        </li>
                        <li>
                            <a href="/">Contato</a>
                        </li>
                    </ul>
                </nav>                   
            </div>
        </header>
    )
  }
  
  export default Header