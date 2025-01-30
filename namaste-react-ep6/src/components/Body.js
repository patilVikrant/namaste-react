import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    
    const [restaurantArray, setRestaurantArray] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredArray, setFilteredArray] = useState([]);
    
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantArray(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredArray(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    

    return restaurantArray.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => {
                    filteredResArray = restaurantArray.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredArray(filteredResArray);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurantArray = restaurantArray.filter(restaurant => restaurant.info.avgRating > 4.3)
                    setRestaurantArray(filteredRestaurantArray);
                
                }}>Top rated Restaurants</button> 
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
                {filteredArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />)}
            </div>
        </div>
    )
}

export default Body;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING


{/* <div className="body">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => {
                    const filteredArray = restaurantArray.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setRestaurantArray(filteredArray);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredRestaurantArray = restaurantArray.filter(restaurant => restaurant.info.avgRating > 4.3)
                    setRestaurantArray(filteredRestaurantArray);
                
                }}>Top rated Restaurants</button> 
            </div>
            <div className="res-container">
                {restaurantArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />)}

            </div>
        </div> */}

        // {filteredArray.length !== 0 ? filteredArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />) : restaurantArray.map(resObj => <RestaurantCard key={resObj.info.id} resData={resObj} />)}

