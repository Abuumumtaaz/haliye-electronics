import React from 'react';
import { TfiMenu } from "react-icons/tfi";

const Nav = () => {
  return (
<>
  
  <nav class="navbar bg-secondary">
  <div class="container-fluid d-flex mb-0 ">
    <span class="navbar-brand  mb-0 h1 d-flex justify-content-center  " ><svg class=" me-1 w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.737 8.737a21.49 21.49 0 0 1 3.308-2.724m0 0c3.063-2.026 5.99-2.641 7.331-1.3 1.827 1.828.026 6.591-4.023 10.64-4.049 4.049-8.812 5.85-10.64 4.023-1.33-1.33-.736-4.218 1.249-7.253m6.083-6.11c-3.063-2.026-5.99-2.641-7.331-1.3-1.827 1.828-.026 6.591 4.023 10.64m3.308-9.34a21.497 21.497 0 0 1 3.308 2.724m2.775 3.386c1.985 3.035 2.579 5.923 1.248 7.253-1.336 1.337-4.245.732-7.295-1.275M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>
<p className="fs-6">Haliye</p>
</span>
    <form class="d-flex" role="search">
        <input class=" foom me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
    <ul class="d-flex justify-content-center align-items-center list-nav">
            <li><a class="dropdown-item me-3" href="#">Action</a></li>
            <li><a class="dropdown-item me-3" href="#">Another action</a></li>
            <li><a class="dropdown-item me-1" href="#">Something</a></li>
          </ul>
          <span className='text-white fs-3 pt-0 mt-0'><div><TfiMenu /></div></span>
    
  </div>
  
</nav>

</>
  )
}

export default Nav