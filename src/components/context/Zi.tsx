import React ,{useContext,createContext}from 'react'
import type { FunctionComponent } from 'react';
import { FuContext } from './Fu';
const Zi:FunctionComponent=function({children}){
  console.log(FuContext,'FuContext');
  
  const data=useContext(FuContext)
return <p>zi:{data?.name}:child:{children}</p>
}
export default Zi