import React, { useContext, createContext } from 'react'
const AdminContext = createContext()
export const useAdminInfo = () => useContext(RouterContext)
export const AdminInfoContextProvider = ({ children }) => {
    return <AdminContext.Provider value={{userInfo:{name:"bishang"}}}>
        {children}
    </AdminContext.Provider>
}
