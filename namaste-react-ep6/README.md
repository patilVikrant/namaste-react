This is the Sixth episode of Namaste React course by Akshay Saini.

In this episode we saw what is monolithic and microservice architecture. In monolithic architecture everything is bundled into single code base.
All the code API, User Interface, database connections, authentication, notification services all was in single code base. As everything was in single code base here only one programming language was used. There are some other drawbacks of the monolithic architecture:
Size and Complexity Limitation: Monolithic applications become too large and complex to understand.
Slow Startup: The application's size can slow down startup time.
Full Deployment Required: Every update requires redeploying the entire application.

In microservice architecture there is different code base for different service and they are independent of one another. These services communicates with each other using different ways.
Here each service handles a specific job such as handling user accounts or managing payments. The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application.
Some of the advantage of microservices are as follows:
Simpler Development: Microservices break down complex applications into smaller, easier-to-handle services. This makes development faster and maintenance easier.
Independent Teams: Each service can be developed independently by a team focused on that specific task.
Scalability: Each service can be scaled independently, ensuring efficient resource usage.

Then we saw how we can fetch data from API and render it. There are two approaches for this.

1. When the page loads we will make an api call and wait for the data then render it.
   Loads => API(wait to receive the data) => Render

2. When the page loads we render the UI and after rendering we make an API call then again we re-render the UI with the updated data.
   Loads => Render => API => Rerender

In React, we're opting for the second approach. This approach enhances user
experience by rendering the UI swiftly and then seamlessly updating it once we
receive the data from the API call.

Then we saw useEffect hook. This hook take two arguments one is a callback function and a dependency array. This callback function is called after the component is rendered.
If we have to do something after the component is rendered then we should use useEffect hook.

In this case we need to make an api call after the component renders.

Then we fetch data from swiggy's api using fetch function. This was giving error due to browsers CORS policy as we were fetching data from different origin. Hence we installed a chrome extensions to bypass this.

Then we saw that after fetching the data and before rendering it there is some delay. We can display loading spinner in that delay or we can dispay the structure of the page to be renderend. This is also known as shimmer UI.
Shimmer UI is a technique that shows placeholder content while data is loading, reducing wait time and keeping users engaged.

Then we can display the shimmer UI if data is not fetch or the rendered page when data is fetched using conditional rendering.

Then we saw a little bit about useState hook. We understood why we require state variable instead of our normal javascript variables. When we update the state variable react re renders the component.

Then we added a button in the header and attached a onClick event handler to toggle login and logout using conditional rendering and useState.

Then we added search functionality using useState hook.

We bind the state variable with the input box with help of value attribute and state variable. Then we added onchange event handler on input so that we can change the state variable bind to the input and thereby changing the input text.
Then we added search functionality.

Assignment 6

Q: What is Microservice?
A: Microservice - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features. means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

Benefits of Microservices:
Flexible Scaling
Easy Deployment
Technological Freedom
Reusable Code
Resilience
Q: What is Monolith architecture?
A: A Monolith architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming. means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.

Q: What is the difference between Monolith and Microservice?
A: With monolithic architectures, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application. Monolith and Microservice

Q: Why do we need a useEffect Hook?
A: useEffect Hook is javascript function provided by react. The useEffect Hook allows you to eliminate side effects in your components. Some examples of side effects are: fetching API data, directly updating the DOM, and setting up subscriptions or timers, etc can be lead to unwarranted side-effects. useEffect accepts two arguments, a callback function and a dependency array. The second argument is optional.

useEffect(() => {}, [])
The () => {} is callback function and [] is called a empty dependency array. If anything that we pass (suppose currentState) inside the [] it trigger the callback function and changes the state of the application.

useEffect(() => {
setCurrentState("true");
}, [currentState])
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

useEffect(() => {})
Q: What is Optional Chaining?
A: Optional Chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called is undefined or null , it returns undefined instead of throwing an error. Optional Chaining (?.) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns undefined.

Q: What is Shimmer UI?
A: A Shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.

Q: What is the difference between JS expression and JS statement?
A: A JS expression returns a value that we use in the application. for example:

1 + 2 // expresses
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
A JS statement, does not return a value. for example:

let x; // variable declaration
if () { } // if condition
If we want to use JS expression in JSX, we have to wrap in {/_ expression slot _/} and if we want to use JS statement in JSX, we have to wrap in {(/_ statement slot _/)};

Q: What is Conditional Rendering? explain with a code example.
A: Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them. for example:

// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
(if (isLoggedIn) {
return <UserGreeting />;
}else {
return <GuestGreeting />;
})
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
Q: What is CORS?
A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.

Q: What is async and await?
A: Async: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value. Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait. for example:

// async function getRestaurant to fetch Swiggy API data
async function getRestaurants() {
const data = await fetch(
"FOODFIRE_API_URL"
);
const json = await data.json();
// we get the Swiggy API data in json format
console.log(json);
}
Q: What is the use of const json = await data.json(); in getRestaurants()?
A: The data object, returned by the await fetch(), is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using await data.json(). data.json() is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.
