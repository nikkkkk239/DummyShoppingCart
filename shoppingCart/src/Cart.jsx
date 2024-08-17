import React, { useContext } from 'react'
import { cartContext } from './helpers/Context'

function Cart() {
    const {state,dispatch}=useContext(cartContext)
    const handleDelete=(id)=>{
        dispatch({type:'delete',payload:{deleteId:id}})
    }
    const handleIncrement=(id)=>{
        dispatch({type:'increment',payload:{incrementId:id}})
    }
    const handleDecrement=(id,count)=>{
        if(count==1){
        dispatch({type:'delete',payload:{deleteId:id}})
        }
        dispatch({type:'decrement',payload:{decrementId:id}})
    }
  return (
    <div style={{display:'flex',border:'1px solid black',justifyContent:'center',flexDirection:'column',backgroundColor:'yellow',padding:'15px'}}>
        <h1 style={{textAlign:'center'}}> Cart</h1>
        <div>
            {
                state.items.length==0 ? <div style={{marginTop:'10px',textAlign:'center'}}>cart is empty...</div> : 
                <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
                    {state.items.map((item)=>{
                        return <div key={item.id} style={{display:'flex',height:'100px',backgroundColor:'white',borderRadius:'10px',border:'0.5px solid black',flexDirection:'column'}}>
                            <div style={{flex:2,display:'flex',justifyContent:'center',borderBottom:'1px solid black',alignItems:'center',fontSize:'18px'}}>{item.title}</div>
                            <div style={{display:'flex',justifyContent:'space-between',padding:'5px 10px'}}>
                                <button onClick={()=>handleDelete(item.id)} style={{backgroundColor:'yellow',border:'0.5px solid black',padding:'3px 10px',borderRadius:'3px',cursor:'pointer'}}>remove</button>
                                <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
                                    <button onClick={()=>handleIncrement(item.id)} style={{backgroundColor:'yellow',border:'0.5px solid black',padding:'2px 7px',borderRadius:'3px',cursor:'pointer'}}>+</button>
                                    <span>{item.count}</span>
                                    <button onClick={()=>handleDecrement(item.id,item.count)} style={{backgroundColor:'yellow',border:'0.5px solid black',padding:'2px 7px',borderRadius:'3px',cursor:'pointer'}}>-</button>
                                    <span>{item.count * item.price}</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    </div>
  )
}

export default Cart