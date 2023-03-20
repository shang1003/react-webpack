import React ,{FunctionComponent,createContext,useState}from 'react'
export type fuobj ={
  name:string
}
export const FuContext=createContext<fuobj|undefined>(undefined)

const Fu:FunctionComponent=({ children })=>{
  const fuobj={name:"bishang"}
  const [data,setData]=useState(fuobj)
return (
  <FuContext.Provider value={data}>
{children}
<button onClick={()=>{setData({name:`bishang${Math.random()}`})}}>Fu：改变value</button>
</FuContext.Provider>
)
}
export  default Fu