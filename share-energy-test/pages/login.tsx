import React from 'react'
import LoginCard from '../src/components/loginCard'
import styles from '../styles/loginPage.module.css'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

import {useState} from 'react'
import { setCookie } from 'cookies-next'
import Router, { useRouter } from 'next/router'

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const [error, setError] = useState('')
  const router = useRouter()

  const handleFormEdit = (event:any, name:any) => {
    setFormData({
      ...formData,
      [name]: event.target.value
    })
  }

  const handleFormAPI = async (event:any) => {
    try {
      event.preventDefault()
      const response = await fetch(`/api/user/loginUser`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if(response.status !== 200) throw new Error(json)

      setCookie('authorization', json)
      router.push('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleFormDB = async (event:any) => {
    try {
      event.preventDefault()
      const response = await fetch(`http://localhost:3000/user`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if(response.status !== 200) throw new Error(json)

      setCookie('authorization', json)
      router.push('/')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
   <div className={styles.background}>
     <LoginCard title='Acesse sua conta'>
        <form className={styles.form} onSubmit={handleFormDB}>
          <Input type="email" placeholder="Add your e-mai" required value={formData.email} onChange={(e:any) => {handleFormEdit(e, 'email')}}/>
          <Input type="password" placeholder="Add your password" required value={formData.password} onChange={(e:any) => {handleFormEdit(e, 'password')}}/>
          <Button >Entrar</Button>
          {error && <p className={styles.error}>{error}</p>}
          <Link href='/register'>Não possui conta?</Link>
        </form>
     </LoginCard>
   </div>
  )
}

export default LoginPage