'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import useAxios from '@/hooks/useAxios'
import Loader from '@/components/Loader/Loader'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'
import { toast } from 'react-toastify'

const ProductDetails = () => {
    const [loading, setLoading] = useState(false)
    const axios = useAxios()
    const { id } = useParams()
    const router = useRouter()
    const [product, setProduct] = useState({})
    useEffect(() => {
        setLoading(true)
        axios.get(`/products/${id}`)
            .then(data => {
                setProduct(data.data)
            })
            .catch(error => {
                console.log(error.message)
            })
            .finally(() => setLoading(false))
    }, [])
    if (loading) return <Loader />
    // console.log( product?._id )
    const { _id, title, shortDescription, fullDescription, price, priority, photo, category, ownerEmail, ownerName, date, stock
    } = product || {};
    const formateDate = date ? new Date(date).toLocaleDateString() : "N/A";
    return (
        <PrivateRoute>
            <div className="my-10 lg:my-20">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        {!loading && product?._id && <div className="bg-white rounded-3xl shadow-lg border border-slate-200/80 overflow-hidden">

                            {/* Top small gradient bar */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

                                {/* LEFT: Image */}
                                <div className="relative">
                                    <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
                                        <img
                                            src={photo}
                                            alt={title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-600 text-white shadow-sm">
                                            Featured
                                        </span>
                                    </div>

                                    {/* Small meta box bottom-left on image */}
                                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-xs text-slate-700 px-3 py-2 rounded-xl shadow-sm flex flex-col gap-1">
                                        <span><span className="font-semibold">Date:</span> {formateDate}</span>
                                        <span><span className="font-semibold">Priority:</span> {priority}</span>
                                    </div>
                                </div>

                                {/* RIGHT: Text Content */}
                                <div className="flex flex-col h-full">
                                    {/* Title */}
                                    <h1 className="heading">
                                        {title}
                                    </h1>

                                    {/* Price */}
                                    <div className="mt-3 flex items-center gap-3">
                                        <p className="text-2xl font-semibold text-slate-900">
                                            ${price}
                                        </p>
                                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
                                            {stock}
                                        </span>
                                    </div>

                                    {/* Short meta line */}
                                    <p className="mt-2 text-sm text-slate-500">
                                        Owner: {ownerName} • {ownerEmail}
                                    </p>

                                    {/* Description */}
                                    <p className="mt-5 text-slate-700 leading-relaxed text-[15px]">
                                        {fullDescription}
                                    </p>

                                    {/* Divider */}
                                    <div className="my-6 h-px bg-slate-100" />

                                    {/* Buttons */}
                                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() => router.back()}
                                            className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
                                        >
                                            Go Back
                                        </button>

                                        <button
                                            onClick={() => toast.success(`${title} added to cart successfully`)}
                                            className="btn-primary flex-1"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </PrivateRoute>

    )
}

export default ProductDetails
