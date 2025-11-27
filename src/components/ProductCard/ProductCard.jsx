'use client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {
    const { _id, title, shortDescription, fullDescription, price, priority, photo, category, ownerEmail, ownerName, date, stock
    } = product;

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition p-4">
            <div className="w-full h-60 rounded-lg overflow-hidden bg-slate-100 object-cover">
                <Image
                height={500}
                width={500}
                alt={title}
                src={photo}
                unoptimized
                />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mt-2 line-clamp-1">
                {title}
            </h3>
            <div className="flex justify-between items-center ">
                <p className="text-base font-semibold text-slate-900">
                    ${price}
                </p>
                <p>{category}</p>
            </div>
            <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                {fullDescription}
            </p>
            <Link href={`/shop/${_id}`}
                className="btn-primary w-full text-center mt-2"
            >
                View Details
            </Link>

        </div>
    )
}

export default ProductCard
