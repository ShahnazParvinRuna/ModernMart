import React from 'react'

const About = () => {
  return (
    <section className="my-10 lg:my-20">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="heading">
            About Prodexa
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Prodexa is a clean, modern product management platform where users can add, edit, and manage items with ease.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Our Mission
              </h2>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                Managing products shouldn’t be complicated. Prodexa offers a simple, minimal interface
                designed for creators and small businesses to manage product details without any hassle.
                Our goal is to provide a clean dashboard experience that is fast, easy, and efficient.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                What you can do with Prodexa:
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Add products with detailed information.</li>
                <li>• Organize items by category, priority, and date.</li>
                <li>• View individual product details clearly.</li>
                <li>• Manage products with View & Delete actions.</li>
                <li>• Keep everything structured in one dashboard.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
