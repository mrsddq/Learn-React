//Creating an Element in Javascript

//My First React Element

// const heading = document.createElement("h2");
// heading.textContent="Hello World";
// heading.className = "Header";
// document.getElementById("root").append(heading);

// console.log("JavaScript element: ",heading);

//Creating an Element in Javascript


//Writing code in JSX

// const reactHeading = React.createElement("h1",{className : "head", id:"reactHead"},"Hello React!");

// Understanding Babel

const jsxHeading = (<h1 className="head">Hello JSX!</h1>);

// Understanding Babel

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

//Writing code in JSX

// console.log("React element: ",reactHeading);

//My First React Element