// const heading = React.createElement("h1",{id: "heading", xyz: "abc"}, "Hello World from React!");

// <div id="parent">
//  <div id="child">
//      <h1>I'm h1 tag</h1>
//  </div>
// </div>

const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]),
React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
