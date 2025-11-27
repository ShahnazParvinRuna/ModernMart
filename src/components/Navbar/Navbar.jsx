'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomLink from '../ui/CustomLink'
import useAuth from '@/hooks/useAuth'
import { FaBars, FaWindowClose } from "react-icons/fa";
import { toast } from 'react-toastify'

const Navbar = () => {
    const { user, userLogOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [infoOpen, setInfoOpen] = useState(false)
    // console.log(user)
    const link = <>
        <li onClick={()=>setIsOpen(false)}>
            <CustomLink
                href='/'
                label='Home'
            />
        </li>
        <li onClick={()=>setIsOpen(false)}>
            <CustomLink
                href='/shop'
                label='Shop'
            />
        </li>
        <li onClick={()=>setIsOpen(false)}>
            <CustomLink
                href='/about'
                label='About'
            />
        </li>
        <li onClick={()=>setIsOpen(false)}>
            <CustomLink
                href='/contact'
                label='Contact'
            />
        </li>
        {
            user && <li onClick={()=>setIsOpen(false)}>
                <CustomLink
                    href='/dashboard/manage'
                    label='Manage Products'
                />
            </li>
        }
        {
            user && <li onClick={()=>setIsOpen(false)}>
                <CustomLink
                    href='/dashboard/add-product'
                    label='Add Product'
                />
            </li>
        }
    </>
    return (
        <header className='sticky top-0 py-3 bg-white shadow-sm z-50'>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='logo' href='/'>ModernMart</Link>
                    <ul className='lg:flex gap-5 flex-wrap hidden'>
                        {link}
                    </ul>
                    {!user && <Link className='btn-primary hidden! lg:inline-block!' href='/login'>Login</Link>}
                    <button onClick={() => setIsOpen(!isOpen)} className='text-2xl cursor-pointer lg:hidden'><FaBars /></button>
                    {user
                        &&
                        <div className='hidden lg:block'>
                            <button onClick={() => setInfoOpen(!infoOpen)} className='btn-primary rounded-full! p-px! relative'>
                                <img className='size-12 rounded-full' src={user?.photoURL || 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg'} alt={user?.displayName} />
                                {infoOpen && <div className="absolute top-[66px] right-0 bg-slate-200 text-slate-900 p-5 rounded-md space-y-2">
                                    <p className='whitespace-nowrap text-lg font-medium'>{user?.displayName}</p>
                                    <p className='whitespace-nowrap'>{user?.email}</p>
                                    <button onClick={() => userLogOut().then(() => toast.info('Logged out successfully'))} className='btn-primary w-full'>Logout</button>
                                </div>}
                            </button>
                        </div>}
                </div>
            </nav>
            <div className={`bg-slate-900/80 backdrop-blur-2xl fixed min-h-screen top-0 right-0 w-2/3 duration-700 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <button onClick={() => setIsOpen(false)} className='text-2xl cursor-pointer lg:hidden absolute right-[18px] top-4 text-slate-200'><FaWindowClose /></button>
                <ul className='text-slate-300 text-center mt-20'>
                    {link}
                </ul>
                <div className="flex justify-center mt-5">
                    {user?<button onClick={() => userLogOut().then(() => toast.info('Logged out successfully'))} className='btn-primary'>Logout</button>:<Link className='btn-primary' href='/login'>Login</Link>}
                </div>
            </div>
        </header>
    )
}

export default Navbar