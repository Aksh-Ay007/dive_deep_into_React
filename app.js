
/*


<div id='parent>

<div id='child>


<h2>
</h2>

</div>


</div>


so hwo can access nexted elements


case 2 if this is has children

then 3 element should be in array

*/

//so how can access nexted elements

// let parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" },React.createElement('h1',{},'iam h1 tage'))
// );


//how can use next childre

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam first child"),
    React.createElement("h1", {}, "iam second child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "iam first child"),
    React.createElement("h1", {}, "iam second child"),
  ]),
]);


// let heading = React.createElement(
//   "h1",
//   { id: "testing" },
//   "welcome to react let ggo deep into the react..!😊"
// );

console.log(parent);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
