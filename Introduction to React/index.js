//Creating an Element in Javascript

//My First React Element

// const heading = document.createElement("h2");
// heading.textContent="Hello World";
// heading.className = "Header";
// document.getElementById("root").append(heading);

// console.log("JavaScript element: ",heading);



//Creating an Element in Javascript

const reactHeading = React.createElement("h1",{className : "head", id:"reactHead"},"Hello React!");

ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// console.log("React element: ",reactHeading);

//My First React Element