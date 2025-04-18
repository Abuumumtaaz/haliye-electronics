import React, { useContext, useState } from 'react';
import { createContext } from "react";


export const MyContext = createContext(null);

const Context = ({children}) => {
    const [cart, setCart] = useState([]);

  return (
    <MyContext.Provider value={{cart, setCart}}>
        {children}
    </MyContext.Provider>
  )
}

export default Context;
export const useShare = () => useContext(MyContext);