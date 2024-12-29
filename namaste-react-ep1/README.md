This is the first episode of Namaste React course by Akshay Saini.

In this episode we saw how we can write 'HELLO WORLD' using just html, then we saw how we can write it using Javascript.
Then we saw how to write 'HELLO WORLD' using React.
For that first we need to add cdn links of React and React DOM into our code, then we created a react elememt which is basically a javascript object with the help of React.createElement. createElement API takes three arguements and they are as follows:

1. Name of the Element. eg:- 'h1', 'div', etc
2. An object where we can pass the attribute as key value pairs. {id: 'heading'}
3. Third arguement is for the childrens of the element. If there is only one child then we enclosed it in string and pass it but if there are multiple children (siblings) then we need to pass an array. eg:- for single child - 'Hello World', for multiple children - [React.createElement('h1', {id: 'heading1'}, 'This is level one heading'), React.createElement('h2', {id: 'heading2'}, 'This is level two heading')]

Example:-
const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {}, "I'm h1 tag"),React.createElement("h2", {}, "I'm h2 tag")]), React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")])]);

Then we created root element with the help of ReactDOM.createRoot.
const root = ReactDOM.createRoot(document.getElementById("root"));

Then rendered the react element with the help of root.render methods. This method converts the object created by creteElement method into html elements.

Assignment 1

1. What is Emmet?

   > Emmet is a plugin or developer tool kit that helps developers write HTML and CSS more efficiently. Emmet uses simple abbreviations that are converted into code blocks.

2. Difference between a Library and Framework?

   > Library is a collections of prewritten code snippets that can be used and reused to perform certain tasks. A particular JavaScript library code can be plugged into application code which leads to faster development and fewer vulnerabilities to have errors.
   > Framework provides a basic foundation or structure for a website or an application.
   > A key difference between the two is Inversion of control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.

3. What is CDN? Why do we use it?

   > A content delivery network (CDN) is a system of servers that deliver web content to users by caching and storing files on servers closer to the user's location. This reduces the distance data has to travel, resulting in faster loading times and improved performance.

4. Why is React known as React?

   > React is known as react because it allows developer to react to changes in states and data within an application.

5. What is crossorigin in script tag?

   > Due to crossorigin the browser allow data to be shared between web apps of different origin.

6. What is diference between React and ReactDOM

   > React is a JavaScript library that helps build user interfaces. React uses components, which are reusable UI elements that define how a user interface should look based on given inputs. A library that connects React to the browser's DOM, allowing React components to be rendered in the browser. ReactDOM's primary method is ReactDOM.render(), which takes two parameters: what to render and where to render it.

7. What is difference between react.development.js and react.production.js files via CDN?

   > The very basic difference is that Production Build has ugly, minified(compressed) version of your javascript code, so this makes rendering of file on end user's browser very quick and performance enhancing.

8. What is async and defer? - (see my Youtube video )
   > Async defer are boolean attribute that are used along with script tag to load external scripts efficiently into our webpage. If our browser is parsing the Html and encounter a script tag in between, it stop the parsing and fetches the script from the browser and executes it then and there.The html parsing will only start when script is fully executed. when we use async attribute in script tag the browser fetches the script from the network asynchronously while doing the html parsing. As soon as the script are fetched and available in the browser the html parsing stops and the script are executed then and there and after the excecution of the script the html parsing continues. In case of defer attribute the script tag is fetch in parallel while the html parsing continues and once the html parsing is completed then only the script are executed.
