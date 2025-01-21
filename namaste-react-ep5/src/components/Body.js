import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import resArray from "../utils/mockData";


const Body = () => {
    
    const [restaurantArray, setRestaurantArray] = useState(resArray)      

    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredRestaurantArray = restaurantArray.filter(restaurant => restaurant.info.avgRating > 4.3)
                setRestaurantArray(filteredRestaurantArray);
                
            }}>Top rated Restaurants</button> 
            <div className="res-container">
                {/* Restaurant Card */}
                {restaurantArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />)}

            </div>
        </div>
    )
}

export default Body;