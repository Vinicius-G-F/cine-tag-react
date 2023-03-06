import React from 'react'
import styles from './Titulo.module.scss'

export default function Titulo({ children }) {
  return (
    <div className={styles.titulo}>{children}</div>
  )
}
