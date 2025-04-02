import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-1/2 mx-auto my-6">
            {cartItems.length === 0 ? <h1>Cart is Empty</h1> : <div><button onClick={handleClearCart} className="font-bold text-white bg-black p-4 my-4 rounded-lg cursor-pointer">Clear Cart</button> <ItemList items={cartItems} /></div>}
            
        </div>
    )
}

export default Cart;