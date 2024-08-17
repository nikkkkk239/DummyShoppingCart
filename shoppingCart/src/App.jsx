import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Cart'
import { cartContext } from './helpers/Context'
function App() {
  useEffect(()=>{
    console.log('hi')
  },[])
  const {state,dispatch}=useContext(cartContext)
  
  const handleAdd=(id,title,price)=>{
    dispatch({type:'add',payload:{id,title,price}})
  }

  return (
    <div style={{display:'flex',padding:'20px'}}>
      <div style={{flex:5,display:'flex',flexWrap:'wrap',gap:'30px'}}>
        {state.products.map((product)=>{
          return <div key={product.id} style={{width:'300px',height:'250px',border:'1px solid black',display:'flex',flexDirection:'column'}}>
              <div style={{backgroundColor:'yellow',flex:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px'}}>{product.title}</div>
              <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
                <div>{product.price}</div>
                <button disabled={product.isPresent} style={{backgroundColor:'yellow',border:'0.5px solid black',padding:'3px 10px',borderRadius:'3px',cursor:'pointer'}} onClick={()=>handleAdd(product.id,product.title,product.price)}>Add</button>
              </div>
            </div>
        })}
      </div>
      <div style={{flex:2}}>
        <Cart/>
      </div>

    </div>
      
  )
}

export default App
