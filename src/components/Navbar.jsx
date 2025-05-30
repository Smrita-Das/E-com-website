import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div className="p-3 border-b-1 border-neutral-300">
        <div className="px-24 flex mx-auto items-center w-[900px] justify-between">
            <Link to='/products' className="text-2xl ">PRODUCTS</Link>
        <div className="flex gap-3">
            <Link to='/details' className="">Details</Link>

            <Link to='/contact' className="">Contact us</Link>
            <Link to='*'>Help</Link>
        </div>
        </div>
</div>
  )
}

export default Navbar;
