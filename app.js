/*
React is a library which can even work in a small portion of our app
React.createELement creates a javascript object, it's a react element not an html element yet
ReactElement(Object) => HTML(Browser understands)
ReactDOM.createRoot is responsible for assigning a root inside React
"render" helps to put object(that we got from React.createElement) in to HTML which is understood by the browser. 
*/

// const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root")); //this will only replace the items in the node with an id of "root"
// root.render(heading);
// console.log(heading);

// const parent = React.createElement("div", { id: "parent" },
//     [React.createElement("div", { id: "child1" },
//         [React.createElement("h1", {}, "I am a child1 heading one tag"),
//         React.createElement("h2", {}, "I am child1 heading two tag")]),
//     React.createElement("div", { id: "child2" },
//         [React.createElement("h1", {}, "I am a Child2 heading one tag"),
//         React.createElement("h2", {}, "I am Child2 heading two tag")])]);
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "Child1"}, "Iam child 1"), 
    React.createElement("div", {id: "Child2"}, "Iam child 2")]);
root.render(parent);
console.log(parent); 
console.log(parent); 

