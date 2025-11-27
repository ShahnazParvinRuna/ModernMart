'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import useAxios from '@/hooks/useAxios'
import Loader from '../Loader/Loader'

const LatestProducts = () => {
    const [loading, setLoading] = useState(false)
    const axios = useAxios()
    const [products, setProducts] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get('/latest')
            .then(data => {
                setProducts(data.data.products)
            })
            .catch(error => {
                console.log(error.code)
            })
            .finally(() => setLoading(false))
    }, [])
      if (loading) return <Loader/>
    // console.log(products)
    return (
        <div>
            <div className="my-10 lg:my-20">
                <div className="container">
                    <h1 className='heading text-center mb-5'>Latest Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {products?.map((item, i) => (
                            <ProductCard product={item} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProducts