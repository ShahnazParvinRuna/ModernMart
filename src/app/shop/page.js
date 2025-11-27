'use client'
import Loader from '@/components/Loader/Loader'
import ProductCard from '@/components/ProductCard/ProductCard'
import useAxios from '@/hooks/useAxios'
import React, { useEffect, useState } from 'react'

const Shop = () => {
  const axios = useAxios()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  useEffect(() => {
    setLoading(true)
    axios.get('/products')
      .then(data => {
        setProducts(data.data.products)
      })
      .catch(error => {
        console.log(error.code)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, [])
  if (loading) return <Loader/>
  return (
    <>
      <div className="my-10 lg:my-20">
        <div className="container">
          <h1 className='heading text-center mb-5'>Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products?.map((item, i) => (
              <ProductCard product={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop