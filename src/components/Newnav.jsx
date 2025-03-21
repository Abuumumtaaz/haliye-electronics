import React from 'react'
import { TfiMenu } from 'react-icons/tfi';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Newnav = () => {
  return (
    <div className='container '>
        <div className="brand">
        <svg class="icony " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="41" height="38" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

        </div>
        <from className="foorm">
            <input   type="text" placeholder='Search'/>
            <button className='search'><CiSearch /></button>
            
        </from>
        <ul className="nav-list">
            <li>Home</li>
            <li>Action</li>
            <li>Servises</li>
        </ul>
        <div className="menu">
             <span className='trolley'><div>
              <MdOutlineShoppingCart />
              </div></span>
              <p className='trolley-text'>Trolley</p>
        </div>
    </div>
  )
}

export default Newnav