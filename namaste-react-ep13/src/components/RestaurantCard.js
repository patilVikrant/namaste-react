import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(resData);
    
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla: {deliveryTime}} = resData?.info
    const {isLoggedIn} = useContext(UserContext)
    
    return (
        <div data-testid="resCard" className="m-4 p-4 w-66 bg-[#f0f0f0] rounded-2xl hover:shadow-2xl">
            <img className="rounded-t-2xl mb-4" src={`${CDN_URL}${cloudinaryImageId}`} alt="res-logo" />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>User: {isLoggedIn}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
        <div>
            <h1 className="absolute bg-black text-white m-4 p-2 rounded-sm font-bold">AD</h1>
            <RestaurantCard {...props} />
        </div>
        )
    }
}

export default RestaurantCard;