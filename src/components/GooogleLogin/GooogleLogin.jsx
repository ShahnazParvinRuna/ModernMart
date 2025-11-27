import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const GooogleLogin = () => {
    const { googleLogin } = useAuth()
      const router = useRouter();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result=>{
            // console.log(result.user)
            router.push('/')
            toast.success('Login successful')
        })
        .catch(error=>{
            // console.log(error.code)
            toast.error(error.code)
        })
    }
    return <button onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-md py-2 hover:bg-slate-50 transition  cursor-pointer"
    >
        <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
        />
        Continue with Google
    </button>
}

export default GooogleLogin