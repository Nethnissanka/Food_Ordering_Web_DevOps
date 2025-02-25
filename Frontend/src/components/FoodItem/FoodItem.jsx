// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const FoodItem = ({id,name,price,description,image}) => {

//     const{cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={url+"/images/"+image} alt="" />
//             {!cartItems[id]
//                 ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className='food-item-counter'>
//                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                     <p>{cartItems[id]}</p>
//                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//                 </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-descr">{description}</p>
//             <p className="food-item-price">${price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem


import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, price, description, image, viewMode}) => {
    const{cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

    return (
        <div className={`food-item ${viewMode === 'list' ? 'list-view' : ''}`}>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url+"/images/"+image} alt={name} />
                
                {!cartItems[id] ? (
                    <div className="food-item-overlay">
                        <div className="food-item-actions">
                            <button className="quick-add-btn" onClick={() => addToCart(id)}>
                                <img src={assets.add_icon_white} alt="Add" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="food-item-overlay visible">
                        <div className="food-item-actions">
                            <div className='food-item-counter'>
                                <button onClick={() => removeFromCart(id)}>
                                    <img src={assets.remove_icon_red} alt="Remove" />
                                </button>
                                <span>{cartItems[id]}</span>
                                <button onClick={() => addToCart(id)}>
                                    <img src={assets.add_icon_green} alt="Add" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <h3>{name}</h3>
                    <div className="rating">
                        <img src={assets.rating_starts} alt="Rating" />
                        <span className="rating-value">4.8</span>
                    </div>
                </div>
                <p className="food-item-descr">{description}</p>
                <div className="food-item-footer">
                    <p className="food-item-price">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem