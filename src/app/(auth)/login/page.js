'use client'
import GooogleLogin from '@/components/GooogleLogin/GooogleLogin'
import useAuth from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const Register = () => {
    const router = useRouter();
    const { loginUser, user } = useAuth()
    console.log(user)
    const [loading, setLoading] = useState(false)
    const { handleSubmit, register, formState: { errors }, reset } = useForm()
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])
    const handleLogin = (data) => {
        setLoading(true)
        const email = data?.email;
        const password = data?.password;
        // console.log({email,password})
        loginUser(email, password)
            .then(result => {
                toast.success('Login successful')
                router.push('/')
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.code)
                setLoading(false)
            })
    }
    return (
        <section className="flex items-center justify-center my-10 lg:my-20">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-slate-200">
                <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent text-center">
                    Login
                </h1>
                {/* Form */}
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    <div>
                        <label className="block  text-slate-700 mb-1">Email</label>
                        <input
                            {...register('email', { required: 'Email Address is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' } })}
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-slate-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.email && <p className='text-red-500 mt-1 text-sm'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block  text-slate-700 mb-1">Password</label>
                        <input
                            {...register('password', { required: 'Password is required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, message: 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number.' } })}
                            type="password"
                            placeholder="•••••••"
                            className="w-full border border-slate-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {errors.password && <p className='text-red-500 mt-1 text-sm'>{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full btn-primary text-white py-2 rounded-md  font-semibold transition"
                    >{loading ? <span>Loading...</span> : 'Login'}</button>
                </form>
                <div className="flex items-center gap-3 my-4">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-xs text-slate-500">OR</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                <GooogleLogin />

                {/* Footer */}
                <p className="text-center  text-slate-600 mt-4">Dont't have an account?<Link href="/register" className="text-orange-600 hover:underline"> Register</Link>
                </p>

            </div>
        </section>
    )
}

export default Register
