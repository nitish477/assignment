import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
function Home() {
    const [product,setProduct]=useState([])
    const loadProduct =async()=>{
        const responce= await axios.get('https://dummyjson.com/products')
       setProduct(responce?.data?.products)
       console.log(responce?.data?.products)
    }

    useEffect(()=>{
       const getToken= JSON.parse(localStorage.getItem('user'))
       if(!getToken){
        alert('login first')
        window.location.href='/login'
        return
       }
    
       loadProduct()

    },[])
  return (
    <>
       <div>

         {
            product?.map((obj,i)=>{

            })
         }

       </div>
    </>
  )
}

export default Home
