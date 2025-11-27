'use client'
import Loader from '@/components/Loader/Loader'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'
import useAuth from '@/hooks/useAuth'
import useAxios from '@/hooks/useAxios'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const AddProduct = () => {
    const axios = useAxios()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const handleAddProduct = (data) => {
        const newProduct = { ...data, ownerEmail: user?.email, ownerName: user?.displayName, date: new Date(), stock: 'In stock' }
        axios.post('/products', newProduct)
            .then(data => {
                if (data.data.success) {
                    toast.success('Product added success')
                    reset()
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <>
            <PrivateRoute>
                <div className="my-10 lg:my-20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="heading mb-5 text-center">
                                Add New Product
                            </h1>
                            <form onSubmit={handleSubmit(handleAddProduct)} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-5">
                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Product Title
                                    </label>
                                    <input
                                        {...register('title', { required: 'Title is required' })}
                                        type="text"
                                        placeholder="Enter product title"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                    {errors?.title && <p className='text-red-500 mt-1 text-sm'>{errors.title.message}</p>}
                                </div>
                                {/* Short Description */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Short Description
                                    </label>
                                    <input
                                        {...register('shortDescription', { required: 'Short Description is required' })}
                                        type="text"
                                        placeholder="1–2 short lines"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                    {errors?.shortDescription && <p className='text-red-500 mt-1 text-sm'>{errors.shortDescription.message}</p>}
                                </div>

                                {/* Full Description */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Full Description
                                    </label>
                                    <textarea
                                        {...register('fullDescription', { required: 'Full Description is required' })}
                                        rows={4}
                                        placeholder="Enter detailed product description"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                                    ></textarea>
                                    {errors?.fullDescription && <p className='text-red-500 mt-1 text-sm'>{errors.fullDescription.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                    {/* Price */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Price ($)
                                        </label>
                                        <input
                                            {...register('price', { required: 'Price is required' })}
                                            type="number"
                                            placeholder="Price"
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                                        />
                                        {errors?.price && <p className='text-red-500 mt-1 text-sm'>{errors.price.message}</p>}
                                    </div>
                                    {/* Priority */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Priority
                                        </label>
                                        <select
                                            {...register('priority', { required: 'Priority is required' })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-orange-400 outline-none"
                                        >
                                            <option value="">Select</option>
                                            <option value="High">High</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Low">Low</option>
                                        </select>
                                        {errors?.priority && <p className='text-red-500 mt-1 text-sm'>{errors.priority.message}</p>}
                                    </div>
                                    {/* Category */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">
                                            Category
                                        </label>
                                        <select
                                            {...register('category', { required: 'Category is required' })}
                                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-orange-400 outline-none"
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Furniture">Furniture</option>
                                            <option value="Clothing">Clothing</option>
                                            <option value="Home Decor">Home Decor</option>
                                            <option value="Home Decor">Others</option>
                                        </select>
                                        {errors?.category && (
                                            <p className="text-red-500 mt-1 text-sm">{errors.category.message}</p>
                                        )}
                                    </div>

                                </div>
                                {/* Optional Image URL */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Image URL
                                    </label>
                                    <input
                                        {...register('photo', { required: 'Image URL is required' })}
                                        type="url"
                                        placeholder="https://example.com/image.jpg"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
                                    />
                                    {errors?.photo && <p className='text-red-500 mt-1 text-sm'>{errors.photo.message}</p>}
                                </div>
                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="btn-primary w-full"
                                >Add Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </PrivateRoute>
        </>
    )
}

export default AddProduct
