/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading);
 */
/* const message = "welcome";
 */
//const heading = document.createElement("h1");

//heading.innerHTML = "Hello syed ";

/* const container = document.getElementById("heading");
container.textContent += message === " " ? " " : " is a Naveeeth "; */

/* const parent = React.createElement("div", { id: "parent" });

const child = React.createElementById("parent");
child = React.createElement("div", { id: "child" });

const heading = React.createElementById("child");

heading = React.createElement("h1", {}, "heading is working here "); */

/* const heading = React.createElement("h1", {}, "React Heading is working here ");

const child = React.createElement("div", { id: "child" }, heading);

const parent = React.createElement("div", { id: "parent" }, child);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Here is a heading work"),
    React.createElement("h1", {}, "Here is a heading work"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Here is a heading work"),
    React.createElement("h1", {}, "Here is a heading work"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
