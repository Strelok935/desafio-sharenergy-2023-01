import React from 'react'
import { getCookie } from 'cookies-next'
import { verify } from '../services/userAPI'
 
const Adm = () => {
  return (
    <div>User Page</div>
  )
}

export default Adm

export const getServerSideProps = async ({req, res}: any) => {
  try {
    const token = getCookie('authorization', {req, res})
    if(!token) throw new Error ('Token Inválido')

    verify(token)
    return {
      props: {}
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      },
      props: {}
    }
  }
}