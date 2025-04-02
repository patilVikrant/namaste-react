import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component{

    constructor(props){
        super(props)

        // console.log("Parent Constructor");
        
    }

    componentDidMount(){
        // console.log("Parent component did mount");
        
    }

    render(){
        // console.log("Parent Render");
        
        return (
                    <div>
                        <h1>About</h1>
                        <h2>This is Namaste react Web series</h2>
                        <div>
                            <UserContext.Consumer>
                                {({isLoggedIn}) => <h1>{isLoggedIn}</h1>}
                            </UserContext.Consumer>
                        </div>
                        <UserClass name={"Vikrant Patil (classOne)"} location={"Navi Mumbai classOne"} />
                    </div>
                )

    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste react Web series</h2>
//             <UserClass name={"Vikrant Patil (class)"} location={"Navi Mumbai class"} />
//         </div>
//     );
// }

export default About;