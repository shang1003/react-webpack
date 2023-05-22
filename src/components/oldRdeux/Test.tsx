import React,{useState,useEffect} from 'react'
import store from '../../redux/old-redux/store'


const Test=()=>{
  const [data,setData]=useState(store.getState().testReduce1.name)
  useEffect(()=>{
    store.subscribe(() => {
      setData(store.getState().testReduce1.name)
    })
  },[])

return (
<>
<button  onClick={()=>{store.dispatch({type:"test",value:Date.now()})}}>oldRedux测试</button>
<p>{data}</p>
</>
)
}
export  default Test