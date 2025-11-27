'use client'
import AuthContext from '@/contex/AuthContex'
import { useContext } from 'react'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth