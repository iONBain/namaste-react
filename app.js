const parent = React.createElement(
  "div",
  {id:"parent"},
  [

    React.createElement(
      "div",
      {id:"child"},
      [
        React.createElement("h1",{},"I am H1 Tag"),
        React.createElement("h2",{},"I am H2 Tag")
      ]
      ),
    React.createElement(
      "div",
      {id:"child2"},
      [
        React.createElement("h1",{},"I am H1 Tag"),
        React.createElement("h2",{},"I am H2 Tag")
      ]
      )
    ]
)


const heading = React.createElement("h1", {
  id: "heading",
  style: {
    color: "red",
    backgroundColor: "blue"
  }
}, "Hello World from React")
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(parent)


/*
// typing some react code here
how you guys doing--__
*/