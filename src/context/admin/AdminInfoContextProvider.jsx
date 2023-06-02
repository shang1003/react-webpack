import React, { useContext, createContext } from 'react'
const AdminContext = createContext()
export const userAdminInfo = () => useContext(AdminContext)
export const AdminInfoContextProvider = ({ children }) => {
  const userInfo=JSON.parse(localStorage.getItem("userinfo"))
    return <AdminContext.Provider value={{userInfo}}>
        {children}
    </AdminContext.Provider>
}
