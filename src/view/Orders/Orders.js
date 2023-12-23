import React, { useEffect, useState } from 'react'
import Navbar from './../../component/Navbar/Navbar'
import axios from 'axios'
import './Orders.css'
function Orders() {

    const[order,setOrder]=useState([])
    const [user,setUser]=useState('')

   const loadProduct= async()=>{
    const userId=JSON.parse(localStorage.getItem('user')||"{}")
    if(!userId.id){
        alert('Login First')
        return
    }
    try{
        const res= await axios.get(`https://dummyjson.com/carts/user/${userId.id}`)
       setOrder(res?.data?.carts)
      
    }catch(err){
        console.log(err.message)
    }
   }

   useEffect(()=>{
    loadProduct()
   },[user])

   useEffect(()=>{
      const userData= JSON.parse(localStorage.getItem('user')||"{}")
      if(!userData?.email){
        alert('login first')
        return
      }
     setUser(userData)
   },[])

  return (
   <>
    <Navbar/>
    
    <div className='show-order'>
       {
           order?.map((obj,i)=>{
            const{discountedTotal,total,totalProducts,totalQuantity,products}=obj
            return(
               <>
                 <div key={i} className=''>
                    {
                        products.map((obj)=>{
                            console.log(obj)
                           return(
                            <>
                           <div className='product'>
                           <img src={obj.thumbnail} alt='' className='img-order' />
                           <h2> { obj.title} </h2>
                           <p className='price'>Price :$ {obj.price} </p>

                           <span className='quantity'>Quantity:{obj.quantity}</span>
                           <span className='total-price'>Total:{obj.total}</span>
                           </div>
                            
                            </>
                           )
                        })
                    }
                 </div>
               </>
            )
       })
       }
    </div>
   </>
  )
}

export default Orders
