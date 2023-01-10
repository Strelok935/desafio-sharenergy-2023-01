import React, { ReactNode, HTMLInputTypeAttribute  } from 'react'
import styles from './input.module.css'

interface Props {
  props?: ReactNode,
  type?: HTMLInputTypeAttribute,
  placeholder?: HTMLInputTypeAttribute,
  required?: any,
  value?: HTMLInputTypeAttribute,
  onChange?: any
}

const Input = (props: Props) => {
  return (
    <div>
            <input className={styles.input} {...props}/>
    </div>
  )
}

export default Input