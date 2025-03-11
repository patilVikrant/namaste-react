import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    

    return (
        <div className="flex justify-between items-center bg-pink-100 shadow-lg sm:bg-amber-300 lg:bg-emerald-400">
            <div className="logo-container">
                <img className="w-36" src={LOGO_URL} alt="app-logo" />
            </div>
            <div>
                <ul className="flex gap-6 pr-10">
                    <li>Online status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <li><button onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }} className="login">{btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;