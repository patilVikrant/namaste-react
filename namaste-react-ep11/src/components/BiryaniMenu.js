import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";

const BiryaniMenu = () => {

    const [biryaniRestaurant, setBiryaniRestaurant] = useState(null);

    useEffect(() => {
        fetchBiryaniRestaurant();
    },[])

    const fetchBiryaniRestaurant = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null`);
        const json = await data.json();
        setBiryaniRestaurant(json.data.cards);


    }

    if(biryaniRestaurant === null) return <Shimmer />

    console.log(biryaniRestaurant);

    const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);


    return(
        <div>
            <h1>Biryani</h1>
            <div className="flex flex-wrap justify-center">
            {biryaniRestaurant.map((res) => {
                if(res.card.card.info){
                    return res.card.card.info.promoted ? <RestaurantPromotedCard key={res.card.card.info.id} resData={res.card.card} /> : <RestaurantCard key={res.card.card.info.id} resData={res.card.card} /> 
                }
            })}

            </div>
            
        </div>
    )
}



export default BiryaniMenu;