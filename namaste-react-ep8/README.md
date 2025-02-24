This is the Eighth episode of Namaste React course by Akshay Saini.

In this episode we saw how to make class components. First we created class component by extending a class to React.component then we saw how to pass an props to class component by using the constructor function. In this class we define a render function which returns some jsx. Then we saw how to create a state variable using class. Then we saw React lifecycle methods.

React lifecycle consists of two phases namely render phase and commit phase. Initially constructor is called and then render function is called and then dom is updated with the available data after that component did mount is called. This is known as mounting. componentDidMount is called only after the mounting. Component did mount is called only after initial render.
We make an API call in this component did mount function and then update the state variable with the data from API after the state variable is updated react triggers the render cycle again and dom is updated with the new data. This time only render function is called and not the constructor function. Then after the dom is updated component did update is called. This is known as updating in react lifecycle. As we know react application is a single page application, on a single page we change the content as per requirement. When we change the content or display other component then unmounting take place and component will unmount is called. When we return a function from useEffect hook, this returned fucntion will be called during the unmounting.

Assignment 8
notes
