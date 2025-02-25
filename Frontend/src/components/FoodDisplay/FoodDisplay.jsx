import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
    const filteredFoodList = food_list.filter(item => 
        category === "All" || category === item.category
    )

    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-header">
                <h2>Top dishes near you</h2>
                
                <div className="view-controls">
                    <button 
                        className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} 
                        onClick={() => setViewMode('grid')}
                    >
                        Grid View
                    </button>
                    <button 
                        className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} 
                        onClick={() => setViewMode('list')}
                    >
                        List View
                    </button>
                </div>
            </div>

            {filteredFoodList.length === 0 ? (
                <div className="no-items">
                    <p>No items found in this category</p>
                </div>
            ) : (
                <div className={`food-display-container ${viewMode}`}>
                    {filteredFoodList.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return <FoodItem 
                                key={index} 
                                id={item._id} 
                                name={item.name} 
                                description={item.description} 
                                price={item.price} 
                                image={item.image}
                                category={item.category}
                                viewMode={viewMode} 
                            />
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    )
}

export default FoodDisplay