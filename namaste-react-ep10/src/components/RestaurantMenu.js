
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    console.log(resInfo);
    

    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    

    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>)}
            </ul>
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