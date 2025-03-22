import { useState, useEffect } from "react";


const User = (props) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Hii Madara uchiha");
            
        },1000)

        return () => {
            clearInterval(timer);
        } 

    },[])

    return (
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Navi Mumbai</h3>
            <h4>Contact: @pvikrant248</h4>
            <h5>Counter: {count}</h5>
            <button onClick={() => {
                let newCount = count + 1;
                setCount(newCount);
            }}>Increase</button>
        </div>
    )
}

export default User;