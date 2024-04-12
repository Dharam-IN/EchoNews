import React, {createContext, useState} from "react";

export const isAuthorizedContext = createContext({
    isAuthorized: false,
    setIsAuthorized: () => {}
})

export const IsAuthorizedContextProvider = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [user, setUser] = useState();

    return (
        <isAuthorizedContext.Provider value={{isAuthorized, setIsAuthorized, user, setUser}}>
            {children}
        </isAuthorizedContext.Provider>
    )
    
}
