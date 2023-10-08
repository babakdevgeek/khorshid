import { createContext, useState } from "react";
export const height_context = createContext();
function Header_height({children}) {
    const [height,set_height] = useState(null)
    return ( 
        <height_context.Provider value={{height,set_height}}>
            {children}
        </height_context.Provider>
     );
}

export default Header_height;
