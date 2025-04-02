import React from "react";

// class UserClass extends React.Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             count: 0,
//             count2: 3
//         }

//         console.log(`${this.props.name} constructor`);
        
        
//     }

//     componentDidMount(){
//         console.log(`${this.props.name} component did mount`);
        
//     }

//     render() {
//         const {name, location} = this.props;
//         const {count, count2} = this.state;
//         console.log(`${this.props.name} render`);
        
//         return(
//             <div className="user-card">
//                 <h2>{count}</h2>
//                 <button onClick={() => {
//                     this.setState({
//                         count: this.state.count + 1
//                     })
//                 }}>Count Increase</button>
//                 <h2>{count2}</h2>
//                 <h2>Name: {name}</h2>
//                 <h3>Location: {location}</h3>
//                 <h4>Contact: @pvikrant248</h4>
//             </div>
//         )
//     }
// }

// export default UserClass;

class UserTwoClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }

        console.log(`${this.props.name} constructor`);
    }

    componentDidMount(){
        console.log(`${this.props.name} component did mount`);

    }

    



    render(){
        const {name, location} = this.props;
        const {count} = this.state;
        console.log(`${this.props.name} render`);
        return (
            <div className="user-card">
                <h2>{count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button>
                <h2>{count}</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @pvikrant248</h4>
            </div>
        )
    }
}

export default UserTwoClass;