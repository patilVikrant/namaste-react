import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla: {deliveryTime}} = resData?.info
    
    return (
        <div className="m-4 p-4 w-66 bg-[#f0f0f0] rounded-2xl hover:shadow-2xl">
            <img className="rounded-t-2xl mb-4" src={`${CDN_URL}${cloudinaryImageId}`} alt="res-logo" />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;