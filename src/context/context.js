import React, { useState } from "react"


const Context = React.createContext();

function ContextProvider({children}) {
    const [user, setUser] = useState('');
    
    return(
        <Context.Provider value = {{user, setUser}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}