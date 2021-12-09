import React from 'react'
import { useStateValue } from '../StateProvider'

function Product({id,title,image,price,rating}){
    
    const [{basket},dispatch]=useStateValue()
    const addToBasket=()=>{
        dispatch({
            type:'Add_TO_Basket',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    
    
    
    
    
    
    return(

        <div className="d-flex flex-column bg-white m-4 w-100 p-3" style={{zIndex:1,justifyContent:'flex-end'}}>
            <div>
                <p>{title}</p>
                <p style={{marginTop:5}}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div style={{display:'flex'}}>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>*</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} style={{width:'100%',maxHeight:200,objectFit:'contain',marginTop:5}} alt="product"/>
            <button className="bg-warning" onClick={addToBasket}>Add to cart</button>
        </div>
    )
}




export default Product