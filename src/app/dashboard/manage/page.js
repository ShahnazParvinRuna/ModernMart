'use client'
import Loader from '@/components/Loader/Loader'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'
import useAuth from '@/hooks/useAuth'
import useAxios from '@/hooks/useAxios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ManageProducts = () => {
  const axios = useAxios()
  const { user } = useAuth()
  const [products, setProducts] = useState([])
  const userEmail = user?.email;
  const [deleteCount, setDeleteCount] = useState(0)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(`/products?email=${userEmail}`)
      .then(data => {
        setProducts(data.data.products)
      })
      .catch(error => {
        console.log(error.message)
      })
      .finally(()=>setLoading(false))
  }, [userEmail, deleteCount])
  if (loading) return <Loader/>
  const handleDelete = (id) => {
    axios.delete(`/products/${id}`).then(data => {
      if (data.data.result.deletedCount) {
        toast.warning('Product Deleted')
        setDeleteCount(prv => prv + data.data.result.deletedCount)
      }
    }).catch(error => {
      console.log(error.message)
    })
  }

  return (
    <section className="my-10 lg:my-16">
      <PrivateRoute>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="heading">
                  Manage Products
                </h1>
                <p className="text-slate-600 text-sm mt-1">
                  View, manage and organize all your products in one place.
                </p>
              </div>
              <p className="text-xs text-slate-500">
                Total products: <span className="font-semibold text-slate-700">{products.length}</span>
              </p>
            </div>

            {/* Container Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">

              {/* Table (Desktop / Tablet) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wide">
                      <th className="py-3 pr-4">Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Priority</th>
                      <th className="py-3 px-4">Stock</th>
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 pl-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50/80 transition"
                      >
                        <td className="py-3 pr-4">
                          <p className="font-medium text-slate-900 line-clamp-1">
                            {item.title}
                          </p>
                        </td>
                        <td className="py-3 px-4 text-slate-600">
                          {item.category}
                        </td>
                        <td className="py-3 px-4 text-slate-900 font-semibold">
                          ${item.price}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium
                          ${item.priority === 'High'
                                ? 'bg-red-50 text-red-600 border border-red-100'
                                : item.priority === 'Medium'
                                  ? 'bg-amber-50 text-amber-600 border border-amber-100'
                                  : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                              }
                        `}
                          >
                            {item.priority}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-700">
                          {item.stock}
                        </td>
                        <td className="py-3 px-4 text-slate-600 text-xs">
                          {item.date}
                        </td>
                        <td className="py-3 pl-4">
                          <div className="flex justify-end gap-2">
                            <Link href={`/shop/${item._id}`} className="px-3 py-1.5 text-xs rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition cursor-pointer">
                              View
                            </Link>
                            <button onClick={() => handleDelete(item._id)} className="px-3 py-1.5 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards (Mobile) */}
              <div className="grid gap-4 md:hidden">
                {products.map((item) => (
                  <div
                    key={item._id}
                    className="border border-slate-200 rounded-xl p-4 bg-slate-50/80"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {item.category}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium
                      ${item.priority === 'High'
                            ? 'bg-red-50 text-red-600 border border-red-100'
                            : item.priority === 'Medium'
                              ? 'bg-amber-50 text-amber-600 border border-amber-100'
                              : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                          }
                    `}
                      >
                        {item.priority}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-slate-600">
                      <span>Price: <span className="font-semibold text-slate-900">${item.price}</span></span>
                      <span>Stock: <span className="font-semibold text-slate-900">{item.stock}</span></span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-500">
                      Date: {item.date}
                    </p>

                    <div className="mt-3 flex gap-3">
                      <Link href={`/shop/${item._id}`} className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
                        View
                      </Link>
                      <button onClick={() => handleDelete(item._id)} className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {products.length == 0 && <h4 className='capitalize text-center py-10 text-xl text-slate-600 font-bold'>no product found</h4>}

            </div>
          </div>
        </div>
      </PrivateRoute>
    </section>
  )
}

export default ManageProducts
