
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    // console.log(resInfo);
    

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);


    return(
        <div className="text-center mt-4 ">
            <h1 className="font-bold text-3xl mb-4">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            <div>
                {categories.map((category, index) => <RestaurantCategory showItems={showIndex === index} displayItemFunction={() => setShowIndex(index)} key={category?.card?.card?.categoryId} data={category?.card?.card} />)}
            </div>
        </div>
    )
}

export default RestaurantMenu;






// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=656392&catalog_qa=undefined&submitAction=ENTER

// useEffect(() => {
//     fetchMenu();
// },[])

// const fetchMenu = async () => {
//     const data = await fetch(`${MENU_API}${resId}`);
//     const json = await data.json();
//     // console.log(json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[9].card);
//     // console.log(json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
//     // setResInfo(json?.data?.cards[2]?.card?.card?.info);
//     setResInfo(json.data);
    
// }