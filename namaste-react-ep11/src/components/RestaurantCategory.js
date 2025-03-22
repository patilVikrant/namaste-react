import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, displayItemFunction}) => {
    // console.log(data);

    const showItemClickHandler = () => {
        // console.log("clicked");
        // setShowItems(!showItems);
        displayItemFunction();
    }
    
    return (
        <div className="w-1/2 bg-gray-100 mx-auto my-4 p-4 shadow-lg rounded-xl">
            <div onClick={showItemClickHandler} className="flex justify-between items-center cursor-pointer">
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>{showItems ? "🔼" : "🔽"}</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
            
        </div>
        
    )
}

export default RestaurantCategory;




// const RestaurantCategory = ({data}) => {
//     // console.log(data);
//     const [showItems, setShowItems] = useState(false);

//     const showItemClickHandler = () => {
//         // console.log("clicked");
//         setShowItems(!showItems);
//     }
    
//     return (
//         <div className="w-1/2 bg-gray-100 mx-auto my-4 p-4 shadow-lg rounded-xl">
//             <div onClick={showItemClickHandler} className="flex justify-between items-center cursor-pointer">
//                 <span className="font-bold">{data.title} ({data.itemCards.length})</span>
//                 <span>{showItems ? "🔼" : "🔽"}</span>
//             </div>
//             {showItems && <ItemList items={data.itemCards} />}
            
//         </div>
        
//     )
// }