import styles from './Cabecalho.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo.svg'
import CabecalhoLink from 'componentes/CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt="Logo do cine-tag">
            </img>
        </Link>
        <nav>
            <CabecalhoLink url='./'>
                Home
            </CabecalhoLink>
            <CabecalhoLink url='./favoritos'>
                Favoritos
            </CabecalhoLink>
        
        </nav>
    </header>
  )
}
