import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Card from '../../component/Card/Card'
import Navbar from '../../component/Navbar/Navbar'
function Home() {
    const [product,setProduct]=useState([])
    const loadProduct =async()=>{
        const responce= await axios.get('https://dummyjson.com/products')
       setProduct(responce?.data?.products)
       console.log(responce?.data?.products)
    }

    useEffect(()=>{
       const getToken= JSON.parse(localStorage.getItem('token'))
       if(!getToken){
        alert('login first')
        window.location.href='/login'
        return
       }
    
       loadProduct()

    },[])
  return (
    <>
    <Navbar/>
       <div className='product-contanier'>

         {
            product?.map((obj,i)=>{
               const {brand,description,price,discountPercentage,thumbnail,title,category}=obj

                  return  <Card 
                  thumbnail={thumbnail} 
                  title={title} 
                  price={price} 
                  description={description} 
                  brand={brand} 
                  discountPercentage={discountPercentage}
                  category={category}
                  />  
            })
         }

       </div>
    </>
  )
}

export default Home
