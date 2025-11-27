import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({item}) => {
    const {role,name,message} = item || {}
    return (
        <div
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
        >
            <div className="flex gap-1 text-yellow-400 text-sm mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
                “{message}”
            </p>
            <div className="mt-5">
                <p className="font-semibold text-slate-900 text-sm">
                    {name}
                </p>
                <p className="text-xs text-slate-500">
                    {role}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard