import { useState } from 'react';
import { TiTimesOutline } from "react-icons/ti";
import { FaChevronCircleRight } from "react-icons/fa";

const Services = () => {
   const [isopen, setIsopen] = useState(false);
  const togglee = () => {
    setIsopen((open) => !open);
}
  return (
    <div>
     <div className='butt'>
     
     <button className='btn-clossy'><TiTimesOutline /></button>
     
     </div>
     <div className="moby">
          
          <h3 className='firshh'>Shop at Haliye</h3>

         <div className="ally">
         <div className="listy">

<p>Shop all catagories</p>
   <span><FaChevronCircleRight /></span>
</div>
<div className="listy">

<p>On sale products</p>
<span><FaChevronCircleRight /></span>
</div>
<div className="listy">
<p>Trending</p>
<span><FaChevronCircleRight /></span>
</div>
         </div>
         
           
            
          
          <h3 className='firsh'>Need Help?</h3>
          <div className="ally">
         <div className="listy">

<p>Track order</p>

</div>
<div className="listy">

<p>Stores</p>

</div>
<div className="listy">
<p>Help</p>

</div>
<div className="listy">
<p>Advice & Inspiration</p>

</div>
         </div>
          
         
            
           
         
        </div>

    </div>
  )
}

export default Services