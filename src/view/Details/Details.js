import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Details.css'
function Details() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity,setQuantity]=useState(1)

    const getProduct = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(res?.data)
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

const addToCart =async()=>{
    const userId=JSON.parse(localStorage.getItem('user')||"{}")
    if(!userId.id){
        window.location.href='/login'
        alert('Login First')
        return
    }
    try{
        const res = await axios.post('https://dummyjson.com/carts/add',{
            userId:userId.id,
            products:[
                {
                    id: id,
                    quantity:quantity,
                }
            ]
        })

        if(res?.status===200){
            alert("Added to cart")
        }

    }catch(err){
        console.log(err.message)
    }
}


    return (
        <>
            <Navbar />


            <div className='contanier-main'>
                {
                    product?.images?.map((obj, i) => {

                        return (<img key={i} src={obj} alt='....' className='details-img' />)
                    })
                }
            </div>
            <div className='main'>

                <div className='sub-main'>
                    <h1> {product?.title} </h1>
                    <p className='product-price'>   <small >{product?.discountPercentage}%⬇ </small> ${product?.price} </p>
                    <p>
                        {product.description}
                    </p>

                </div>
                <div className='sub-main'>
                       <div className='quantity-div'>
                       <button className='quantity' onClick={()=>{
                        if(quantity===5){
                            alert('You can order only 5 quantity')
                            return
                        }
                        setQuantity(quantity+1)
                       }}>+</button>
                         { " "} { quantity }  { " "} 
                          <button className='quantity'  onClick={()=>{
                        if(quantity===1){
                            alert(`You can't order less than one`)
                            return
                        }
                        setQuantity(quantity-1)
                       }}>-</button>
                       </div>
                       <button onClick={addToCart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Details
