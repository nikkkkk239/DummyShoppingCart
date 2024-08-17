import { Children, createContext, useReducer } from "react";

export const cartContext=createContext({})
import {nanoid} from 'nanoid'

export const CartContextProvider=({children})=>{
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'add':
            return {
                products:state.products.map((product)=>{
                    if(product.id==action.payload.id){
                        return {
                            ...product,
                            isPresent:true
                        }
                    }
                    return product
                }),
                items:[
                    ...state.items,
                    {
                        title:action.payload.title,
                        price:action.payload.price,
                        id:action.payload.id,
                        count:1
                    }
                ]
            }
            case 'delete':
                return {
                    products : state.products.map((product)=>{
                        if(product.id==action.payload.deleteId){
                            return {
                                ...product,
                                isPresent:false
                            }
                        }
                        return product
                    }),
                    items:state.items.filter((item)=>{
                        return item.id!=action.payload.deleteId
                    })
                }
            case 'increment':
                return {
                    ...state,
                    items : state.items.map((item)=>{
                        if(item.id==action.payload.incrementId){
                            return {
                                ...item,
                                count:item.count+1
                            }
                        }
                        else{
                            return item
                        }
                    })
                }
            case 'decrement':
                return {
                    ...state,
                    items : state.items.map((item)=>{
                        if(item.id==action.payload.decrementId){
                            return {
                                ...item,
                                count:item.count-1
                            }
                        }
                        else{
                            return item
                        }
                    })
                }
            
        
            default:
                return state
                
        }
    }
    const [state,dispatch]=useReducer(reducer,{products:[
        {title:'MacBook',price:555,id:nanoid(),isPresent:false},
        {title:'Iphone',price:69,id:nanoid(),isPresent:false},
        {title:'Myphone',price:96,id:nanoid(),isPresent:false},
        {title:'YourPhone',price:333,id:nanoid(),isPresent:false},
        {title:'NoMyphone',price:18,id:nanoid(),isPresent:false},
        {title:'EyePhone',price:50,id:nanoid(),isPresent:false},
        {title:'ByePhone',price:55,id:nanoid(),isPresent:false},
      ],items:[]},()=>{
        try {
            const local=localStorage.getItem('state')
            return local ? JOSN.parse(local) : {products:[
                {title:'MacBook',price:555,id:nanoid(),isPresent:false},
                {title:'Iphone',price:69,id:nanoid(),isPresent:false},
                {title:'Myphone',price:96,id:nanoid(),isPresent:false},
                {title:'YourPhone',price:333,id:nanoid(),isPresent:false},
                {title:'NoMyphone',price:18,id:nanoid(),isPresent:false},
                {title:'EyePhone',price:50,id:nanoid(),isPresent:false},
                {title:'ByePhone',price:55,id:nanoid(),isPresent:false},
              ],items:[]}
        } catch (error) {
            return {products:[
                {title:'MacBook',price:555,id:nanoid()},
                {title:'Iphone',price:69,id:nanoid()},
                {title:'Myphone',price:96,id:nanoid()},
                {title:'YourPhone',price:333,id:nanoid()},
                {title:'NoMyphone',price:18,id:nanoid()},
                {title:'EyePhone',price:50,id:nanoid()},
                {title:'ByePhone',price:55,id:nanoid()},
              ],items:[]}
        }
    })
    return <cartContext.Provider value={{state,dispatch}}>
        {children}
    </cartContext.Provider>
}