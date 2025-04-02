import RestaurantCard from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    
    const [restaurantArray, setRestaurantArray] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredArray, setFilteredArray] = useState([]);
    
    const {isLoggedIn, setUserName} = useContext(UserContext);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantArray(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredArray(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return(<h1>Looks like you're offline! Please check your internet connection</h1>) 
    

    return restaurantArray.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex items-center gap-2">
                <input type="text" className="border border-solid border-black rounded-md p-2 m-4" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="p-2 border border-solid border-blue-300 rounded-md bg-blue-300 cursor-pointer text-white" onClick={() => {
                    filteredResArray = restaurantArray.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredArray(filteredResArray);
                }}>Search</button>

                <label htmlFor="">UserName:</label>
                <input type="text" className="p-2 border border-black" value={isLoggedIn} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="filter">
                <button className="m-4 p-2 border border-solid border-blue-300 rounded-md bg-blue-300 cursor-pointer text-white " onClick={() => {
                    const filteredRestaurantArray = restaurantArray.filter(restaurant => restaurant.info.avgRating > 4.3)
                    setRestaurantArray(filteredRestaurantArray);
                
                }}>Top rated Restaurants</button> 
            </div>
            <div>
                <Link to={"/biryani"} className="m-4 p-2 rounded-md bg-orange-400 cursor-pointer">
                    Biryani
                </Link>
            </div>
            <div className="flex flex-wrap justify-center">
                {/* Restaurant Card */}
                {filteredArray.map(resObj => <Link key={resObj.info.id} to={`/restaurants/${resObj.info.id}`}><RestaurantCard resData={resObj} /></Link>)}
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

