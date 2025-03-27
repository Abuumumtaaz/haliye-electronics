import React, { useState } from 'react'

const Togalayn = () => {
    const [isopen, setIsopen] = useState(false);
    const togglee = () => {
        setIsopen((open) => !open);
    }
  return (
    <nav className='dvs-haeder'>
         <li className='dvs-haeder-trigger' onClick={togglee}><a href="/"></a>closse</li>
        <ul className="d-flex uly">
            <li><a href="/">Logo</a></li>
       <li className={`dvs-haeder_menuitems ${isopen ? 'is-open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">about</a>
        <a href="#">Servces</a>
       </li>
        </ul>
     </nav>
  )
}

export default Togalayn;