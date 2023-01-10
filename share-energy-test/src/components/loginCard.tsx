import React, { ReactNode } from 'react'
import styles from './loginCard.module.css'

interface Props {
  title?: ReactNode,
  children?: ReactNode,
}

const LoginCard = ({title, children}:Props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}

export default LoginCard