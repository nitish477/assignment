import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Card from '../../component/Card/Card'
import Navbar from '../../component/Navbar/Navbar'
function Home() {
    const [product,setProduct]=useState([])
    const[search,setSearch]=useState('')
    const loadProduct =async()=>{
        const responce= await axios.get('https://dummyjson.com/products')
       setProduct(responce?.data?.products)
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


    const searchProduct=async()=>{
      if (search === '') {
         loadProduct()
         return
       }
      try{
         const res= await axios.get(`https://dummyjson.com/products/search?q=${search}`)
         setProduct(res?.data?.products)
      }catch(err){
         console.log(err.message)
      }
    }

    useEffect(()=>{
       searchProduct()
    },[search])
  return (
    <>
    <Navbar/>
    <input 
     type='text'
     value={search}
     onChange={(e)=>{
      setSearch(e.target.value)
     }}
     className='input-box'
     placeholder='Search'
    />
       <div className='product-contanier'>

         {
            product?.map((obj,i)=>{
               const {brand,description,price,discountPercentage,thumbnail,title,category,id}=obj

                  return  <Card 
                  thumbnail={thumbnail} 
                  title={title} 
                  price={price} 
                  description={description} 
                  brand={brand} 
                  discountPercentage={discountPercentage}
                  category={category}
                  id={id}
                  />  
            })
         }

       </div>
    </>
  )
}

export default Home
