import axios from 'axios';
import react, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
function Details() {
  useEffect(()=>{
    let [product, setProduct] = useState({})
    let {id} = useParams()
    axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
      setProduct(product.data)
    })
  })
  return (
      <div className=" mt-35 w-[700px] mx-auto">
        <div className="flex gap-5 items-center">
          <img className='h-56 w-[300px] object-contain' src={product.image} alt="" />
          <div>
        <h1 className="text-xl font-semibold">{product.title}</h1>
        <p className='my-2 text-neutral-400'>{product.desc}</p>
        <h1 className='my-2'>{Math.floor(product.price * 90)}</h1>
        <div className="gap-4 flex">
          <button className="border border-black text-black py-3 px-5 bg-white">Add to cart</button>
          <button className="border border-black py-3 px-5 text-white">Buy now</button>
        </div>
          </div>
        </div>
    </div>
  )
}

export default Details;
