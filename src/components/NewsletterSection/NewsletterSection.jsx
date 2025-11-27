'use client'
import React from 'react'
import { toast } from 'react-toastify'

const NewsletterSection = () => {
    const handleSubscribe = (e) => {
        e.preventDefault()
        toast.success('Subscribed successfully')
    }
    return (
        <div className="my-10 lg:my-20">
            <div className="container">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12 text-center">
                    <h2 className="heading">
                        Join Our Newsletter
                    </h2>
                    <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
                        Subscribe to get updates on new products, features, and exclusive offers from Prodexa.
                    </p>
                    <form
                        onSubmit={handleSubscribe}
                        className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
                    >
                        <input
                            required
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-80 px-4 py-2.5 rounded-md text-sm bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-orange-400 outline-none"
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-3 text-[12px] text-slate-500">
                        No spam — unsubscribe anytime.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default NewsletterSection
