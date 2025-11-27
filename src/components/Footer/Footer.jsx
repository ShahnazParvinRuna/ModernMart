'use client'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-10">
      <div className="container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link href='/' className="logo">ModernMart</Link>
          <p className="text-slate-600 text-sm mt-3">
            Your trusted platform for managing and exploring products.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
            <li><Link href="/shop" className="hover:text-orange-600">Shop</Link></li>
            <li><Link href="/dashboard/add-product" className="hover:text-orange-600">Add Product</Link></li>
            <li><Link href="/dashboard/manage" className="hover:text-orange-600">Manage Products</Link></li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Support</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li><Link href="#" className="hover:text-orange-600">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-orange-600">FAQ</Link></li>
            <li><Link href="#" className="hover:text-orange-600">Help Center</Link></li>
          </ul>
        </div>
        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-slate-600 text-sm flex-wrap">
            <Link href="#" className="hover:text-orange-600">Facebook</Link>
            <Link href="#" className="hover:text-orange-600">Instagram</Link>
            <Link href="#" className="hover:text-orange-600">Twitter</Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} ModernMart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
