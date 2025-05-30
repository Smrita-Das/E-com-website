import axios from 'axios';
import { useEffect, useState } from 'react'
import Card from '../components/Card'

function Products() {
let [Products, setProducts] = useState([]);
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((Products)=>{
    setProducts(Products.data)
        console.log(Products);
})
},[]);
  return (
    <>
    <div>
        <div className="flex gap-3 justify-center flex-wrap mt-24">
            {Products.length > 0 ? Products.map(product=><Card key={product.id} id={product.id} img={product.image} title={product.title} desc={product.description} price={product.price}/>) : <div className=''>Loading....</div> }

            
        </div>
    </div>
    </>
  )
};

export default Products;
