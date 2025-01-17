This is the fourth episode of Namaste React course by Akshay Saini.

In this episode we started coding in react, we made an food ordering app. Before starting actual coding we need to plan the UI, how its structure will be and do the wireframing.

Header

- Logo
- Nav Items
  Body
- Search
- RestaurantContainer
- RestaurantCard - Img - Name of Res, Cuisine, Star Rating, delivery time
  Footer
- Copyright
- Links
- Address
- Contact

This will be the basic structure of our app.
Then we started coding and we created main component or app layout in which we will render all other components. Then we created a header component and added styles to it. While adding css it is recommended to add css via external css file and using inline style. If we want add css using inline style we need to add it as a JS object.

   <div className="red-card" style={{ backgroundColor: "#f0f0f0" }}></div>

here there are two curly braces one is for JS object and other is to write javascript in JSX.

Then we created body component. In body component we created a search section and a restaurant card container. And in restaurant card container we rendered restaurant card component. Restaurant card component was created separately as we will be able to reuse it.

Then we added properties also known as props to the components. Passing a props to a component is same as passing arguments to a function.

<RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian" />

props will be wrapped and sent as a javascript object to the component

props = {resName:"Meghana Foods", cuisine:"Biryani, North Indian"}

We pass the props to the component by destructuring it.

const {resName, cuisine} = props

Then we took data from some random api from swiggy's site and pass that data to the component.

While analyzing the swiggy's api we saw that it is config driven ui.
It is a user Interface that is built and configured using a
declaration configuration file or data structure, rather than
being hardcoded.

Config is the data coming from the api which keeps on changing
according to different factors like user, location, etc.

Then we took array of objects from swiggy's api and loop over it using map function and rendered the restaurant card dynamically by passing data to it using the props.

We should add unique key id to each component when we use loops.
If we don't add unique id react will not be able to differentiate between new and old component and when we update any thing into the dom react will re render the existing components also and if we add unique key id react will be able to differentiate between new and old components. And it will render only new components.

Assignment 4

1.  Is JSX mandatory for React?

    > JSX is not mandatory for react. React can be written without JSX using Recat.createElement, but code will become huge and unreadable.

2.  Is ES6 mandatory for React?

    > ES6 is not mandatory for React but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

3.  {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

    > The Difference is stated below: {TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.
    > <TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. If component is written inside the {< />} expression.
    > <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.
    > Example
    > <TitleComponent>

        <FirstChildComponent />
        <SecondChildComponent />
        <ThirdChildComponent />

    </TitleComponent>

4.  How can I write comments in JSX?
    > JSX comments are written as follows:

<!-- {/*  */} - for single or multiline comments
Example
  {/* A JSX comment */}
   {/*
   Multiline
   JSX
   comment
 */}   -->

5. What is <React.Fragment></React.Fragment> and <></>?
   > <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

Example
return (
<React.Fragment>

<Header />
<Navigation />
<Main />
<Footer />
</React.Fragment>
);

return (
<>

<Header />
<Navigation />
<Main />
<Footer />
</>
);

6. What is Virtual DOM?

   > DOM stands for Document Object Model, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
   > The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
   > Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.

7. What is Reconciliation in React?

   > Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

8. What is React Fiber?
   > React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance

9. Why do we need keys in React? When do we need keys in React?
   > A key is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists. Keys should be given to the elements within the array to give the elements a stable identity.

Example

<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>

10. Can we use index as keys in React?

    > Yes, we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

11. What is props in React? Ways to.
    > props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

Example
function App() {
return (

<div className="App">
 <Tool name="vikrant" tool="Figma"/> // name and tool are props
</div>
)
}

12. What is Config Driven UI?
    > Config Driven UI are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.
