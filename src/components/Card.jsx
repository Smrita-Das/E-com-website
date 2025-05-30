import React from 'react'
import {Link} from 'react-router-dom'

function Card({title,img,desc, price,id}) {
  return (
    <>
    <Link to={`/details/${id}`}>
        <div className='w-[250px] border p-4 hover:cursor-pointer'>
        <div className='text-center '>
              <img src={img} alt="" className="h-28 inline mb-4 object-cover" />
        </div>
    <h1 className="truncate mt-2 font-semibold ">{title}</h1>
    <p>Rs. {Math.floor(price * 90)}</p>
      {/* <p className="">{desc}</p> */}
    </div>
    </Link>
   
    </>
    
  )
}

export default Card;
