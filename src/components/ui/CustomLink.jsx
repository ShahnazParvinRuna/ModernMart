'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomLink = ({ label, href }) => {
  const pathname = usePathname()
  return (
    <div>
      <Link className={`${pathname === href && 'text-orange-600'}`} href={href}>{label}</Link>
    </div>
  )
}

export default CustomLink