This is the third episode of Namaste React course by Akshay Saini.

In this episode we saw how to we can create scripts to run app in development and production phase.
To run the app in development or local we need to add "start": "parcel index.html" in package.json scripts and run script using npm run start or npm start.
To run the app in production we need to add "build": "parcel build index.html" in package.json scripts and run script using npm run build.
Now there is no need to use npx parcel index.html or npx parcel build index.html.

Then we had a little revision of previous episode in which we saw that writing code using React.createElement can make our code clumsy and difficult to write and understand if there are too many children.

So we write our code in JSX. JSX is html or xml like syntax. It is not HTML inside JavaScript. JSX is not pure javascript or html. JSX makes developer life easy as we no longer have to write our code using React.createElement(). JSX is not part of react. React apps can be built even without JSX but the code will become very hard to read.

React.createElement create a javascript object which rendered using reactDOM.
React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)

But browser does not understands JSX, it only understand pure javascript. JavaScript engine cannot understand JSX as it only understands ECMAScript, so the jsx code needs to be transpiled into javascript and this is done by BABEL. It is installed when we install parcel.

BABEL transpiles the JSX code into javascript object.
Transpilation ⇒ Converting the code in such a format that the browsers can understand.
JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)

Single Line and Multi Line JSX Code
Single line code:
const jsxHeading = <h1>Namaste React</h1>
Multi-line code:
If writing JSX in multiple lines then using ‘()’ parenthesis is
mandatory. To tell Babel from where JSX is starting and ending.
const jsxHeading = (

<div>
<h1>Namaste React</h1>
</div>
)

If we want to write any javscript inside jsx then we need to write it within curly braces {}.

Then we saw React components.
There are two types of React components:

1. Class Component
2. Functional Component

React functional components are javascript functions that return some jsx. Name of React component should start with capital letter.

const HeadingComponent1 = () => (

<h1>Namaste</h1>
)

const HeadingComponent2 = () => {
return <h1>Namaste</h1>
}

const HeadingComponent3 = () => <h1>Namaste</h1>

To render a functional component we call them ‘<HeadingComponent1 />’.
We can also call using '<HeadingComponent1></HeadingComponent1>' or '{HeadingComponent1()}'

Component Composition
A component inside a component.
Calling a component inside another component is Component Composition. We can also have a component inside of component, react element inside of component, component inside of react element.

Advantages of using JSX.

1. Sanitizes the data
   If someone gets access to your JS code and sends some malicious
   data which will then get displayed on the screen, that attack is
   called cross-site scripting.
   It can read cookies, local storage, session storage, get
   cookies, get info about your device, and read data. JSx takes
   care of your data.
   If some API passes some malicious data JSX will escape it. It
   prevents cross-site scripting and sanitizes the data before
   rendering
2. Makes code readable
   JSX makes it easier to write code as we are no longer creating
   elements using React.createElement()
3. Makes code simple and elegant
4. Show more useful errors and warnings
5. JSX prevents code injections (attacks)

Assignment 3

1. What is JSX?

   > JSX is html or xml like syntax. It is not HTML inside JavaScript. JSX is not pure javascript or html. JSX makes developer life easy as we no longer have to write our code using React.createElement().

2. Superpowers of JSX

   > 1. Sanitizes the data
   >    If someone gets access to your JS code and sends some malicious
   >    data which will then get displayed on the screen, that attack is
   >    called cross-site scripting.
   >    It can read cookies, local storage, session storage, get
   >    cookies, get info about your device, and read data. JSx takes
   >    care of your data.
   >    If some API passes some malicious data JSX will escape it. It
   >    prevents cross-site scripting and sanitizes the data before
   >    rendering
   > 2. Makes code readable
   >    JSX makes it easier to write code as we are no longer creating
   >    elements using React.createElement()
   > 3. Makes code simple and elegant
   > 4. Show more useful errors and warnings
   > 5. JSX prevents code injections (attacks)

3. Role of type attribute in script tag? What options can I use there?

   > This attribute indicates the type of script represented. Attribute is not set (default), an empty string, or a JavaScript MIME type, importmap, module, speculationrules
