import React from 'react'
import styles from '../styles/loginPage.module.css'
import LoginCard from '../src/components/loginCard'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import Router, { useRouter } from 'next/router'

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name:'',
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
      const response = await fetch(`/api/user/registerUser`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if(response.status !== 201) throw new Error(json)

      setCookie('authorization', json)
      router.push('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleFormDB = async (event:any) => {
    try {
      event.preventDefault()
      const response = await fetch(`http://localhost:3000/`, {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if(response.status !== 201) throw new Error(json)

      router.push('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.background}>
          <LoginCard title='Acesse sua conta'>
            <form onSubmit={handleFormDB} className={styles.form}>
              <Input type="text" placeholder="Enter your name" required value={formData.name} onChange={(e:any) => {handleFormEdit(e, 'name')}}/>
              <Input type="e-mail" placeholder="Enter your e-mail" required value={formData.email} onChange={(e:any) => {handleFormEdit(e, 'email')}}/>
              <Input type="password" placeholder="Enter your password" required value={formData.password} onChange={(e:any) => {handleFormEdit(e, 'password')}}/>
              <Button>Sign In</Button>
              {error && <p className={styles.error}>{error}</p>}
              <Link href="/login">Entre com sua conta</Link>
            </form>
          </LoginCard>
    </div>
  )
}

export default RegisterPage