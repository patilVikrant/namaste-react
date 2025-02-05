This is the Seventh episode of Namaste React course by Akshay Saini.

In this episode firat we saw how exactly the useEffect hook works. useEffect hook takes two arguments, one is callback function and other is a dependency array. Passing a dependency array is not mandatory in useEffect hook. The callback function in the hook will be called after the component is rendered. If we do not pass a dependency array then the callback function will be called after every render. If we pass an empty dependency array then callback function will be called once only after the initial render. If we pass any dependency into the array the callback function will be called after initial render and when the dependency changes.
useEffect is called everytime after the component renders. Depndency array changes the behaviour of the useEffect hook.

Then we saw useState hook. useState hook is use to create local state variable inside our functional components. so we should call it inside the component. We should never use useState inside a condition, loops and function.

Then we saw how we can create different routes for different paths with the help of react-router. We used createBrowserRouter function which is imported from react-router library to create a configuration for different routes. Then we imported routerProvider from react router and pass it to the root element to render the app component. Then we saw how we can handle the error with the help of useRouteError hook which is given by react-router. Then we saw how we can keep a header component on top and change the component below as per the path with the help of the outlet component.
React Outlet is a component provided by React Router that serves as a placeholder for child routes within a parent route. It allows for the nesting of routes, enabling developers to create complex navigation structures in their applications. Whenever there is a change in the path outlet component will filled with children route according to the path.

Assignment 7
notes
