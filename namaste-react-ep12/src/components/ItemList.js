import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    // console.log(items);
    const dispatch = useDispatch()

    const handleAddClick = (item) => {
        dispatch(addItem(item))
    }
    
    
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="text-left h-auto my-6 pb-3 border-b-2 border-b-gray-200 flex justify-between items-start">
                    <div className="w-3/4">
                        <div className="mb-2 ">
                            <h1 className="font-bold text-xl">{item.card.info.name}</h1>
                            <p >Rs {(item.card.info.price ? item.card.info.price : item.card.info.defaultPrice)/100}</p>
                        </div>
                        <p className="text-gray-600 text-sm max-w-[375px]">{item.card.info.description}</p>
                    </div>
                    <div className="w-1/4 text-center">
                        <img className="w-full rounded-2xl" src={`${CDN_URL}${item.card.info.imageId}`} alt="menu-items-image" /> 
                        <button className="border border-gray-200 px-6 py-2 text-green-500 font-bold my-2 rounded-xl cursor-pointer shadow-lg" onClick={() => handleAddClick(item)}>ADD</button>
                    </div>
                    
                </div>
            ))}
        </div>
    )

}

export default ItemList;