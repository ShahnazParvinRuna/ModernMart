'use client'
import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import testimonials from '@/lib/testimonials'

const TestimonialsSection = () => {
    return (
        <section className="bg-slate-100 my-10 lg:my-20">
            <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-5">
                        <h2 className="heading">
                            What Our Users Say
                        </h2>
                        <p className="mt-3 text-slate-600 text-sm sm:text-base">
                            Prodexa helps creators, sellers and teams manage their products with confidence.
                            Here’s what some of them think.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {testimonials.map((item,i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
