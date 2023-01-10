import React, { ReactNode } from 'react'
import styles from './button.module.css'

interface Props {
  children?: ReactNode
}

const Button = ({children, ...props}: Props) => {
  return (
    <div>
            <button className={styles.button} {...props}>{children}</button>
    </div>
  )
}

export default Button