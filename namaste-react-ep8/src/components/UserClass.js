import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            userInfo: {
                login: "dummy",
                id: "dummy"
            }
        }

        // console.log(`${this.props.name} constructor`);
        
        
    }

    async componentDidMount(){
        // console.log(`${this.props.name} component did mount`);
        this.timer = setInterval(() => {
            console.log("Hello World");
            
        }, 1000)
        const data = await fetch("https://api.github.com/users/patilVikrant");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        
    }

    componentDidUpdate(){
        console.log("component did update");
        
    }

    componentWillUnmount(){
        console.log("Component will unmount");
        clearInterval(this.timer)
        
    }

    

    render() {
        const {name, location} = this.props;
        const {count} = this.state;
        const {login, id} = this.state.userInfo
        // console.log(`${this.props.name} render`);

        return(
            <div className="user-card">
                <h2>{count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Count Increase</button>
                <h2>Name: {name}</h2>
                <h2>Login id  - {login}</h2>
                <h2>User id - {id}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @pvikrant248</h4>
            </div>
        )
    }
}

export default UserClass;