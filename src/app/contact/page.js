'use client'
import useAuth from '@/hooks/useAuth';
import React from 'react'
import { FaClock } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { toast } from 'react-toastify';

const Contact = () => {
  const { user } = useAuth()
  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Message sent successfully')
    event.target.reset()
  }
  return (
    <section className="my-10 lg:my-20">
      <div className="container space-y-10">
        <div className="text-center">
          <h1 className="heading">
            Contact Us
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Have a question, suggestion or feedback about Prodexa?
            Drop us a message and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7 flex flex-col justify-between">
            <div className="" />
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                Get in touch with us
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                We’re always open to hearing from you. Whether it’s a bug report,
                feature idea, or a general question about the dashboard – just reach out.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-semibold">
                    <IoIosMail />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">support@prodexa.app</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-semibold">
                    <FaClock />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Working Hours</p>
                    <p className="text-slate-600">Sunday – Thursday, 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-semibold">
                    <MdMessage />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">We can help with</p>
                    <p className="text-slate-600">
                      General questions, feature suggestions, and bug reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="">
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-7">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mb-4">
              Send a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  defaultValue={user?.displayName}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  defaultValue={user?.email}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <input
                  required
                  placeholder="What is this about?"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
