import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.avif'

const Header = () => {
    return (
        <header>
            <div className={"container " + styles.header}>
                <a href="/">
                    <img src={logo} alt="Logo" />
                </a>

                <nav>
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