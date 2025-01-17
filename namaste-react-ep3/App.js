import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = <span>React Element</span>;

// React Element
const Title = () => (
                    <h1 className="head" tabIndex="5">
                        {data}
                        Namaste React using JSX
                    </h1>
                    );    


// React functional component 
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)   

const Header = () => (
    <div id="navbar">
        <p>LOGO</p>
        <input type="text" />
        <button>Search</button>
    </div>
)

root.render(<Header />);

// const heading = React.createElement("h1",{id: "heading", xyz: "abc"}, "Hello World from React!");

// <div id="parent">
//  <div id="child">
//      <h1>I'm h1 tag</h1>
//  </div>
// </div>