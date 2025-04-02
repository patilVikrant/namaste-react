This is the Twelveth episode of Namaste React course by Akshay Saini.

In this episode first we had a brief introduction of redux toolkit and why it is used. React and Redux are different library. Redus is not mandatory. Redus store is big object kept in a central global space. And then we learned what function does redux does behind the scenes.
Eg:- We want to add the item to the cart.
When we click the add button it dispatches an action that calls reducer function and this reducer function updates the slice in our redux store. Our component is subscribe to the redux store with selector, so when the slice is updated it also reflects in our store.
Then we install redux/toolkit and react-redux. Then we build our store with help of configureStore function from redux toolkit. Then we provided the store to our application by using Provider from react-redux to root of our application. Then we created slice by using createSlice function and gave it the configuration. We gave it name, initialState, and reducers. Here reducers is a object in which we pass various actions to be performed such as addItems, removeitems, etc. Then we subcribed to the store using selector. And we dispatched an acton using dispatch function.

Assignment 12
notes
