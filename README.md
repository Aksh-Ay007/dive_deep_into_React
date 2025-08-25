# React Rev

This project demonstrates how to use React's `createElement` API to build nested elements and render them to the DOM using `ReactDOM.createRoot`.

## How It Works

- The main logic is in [app.js](app.js), where React elements are created manually using `React.createElement`.
- Nested elements are represented as arrays of children, allowing for complex component structures.
- The root element is rendered into the `<div id="root">` in [index.html](index.html) using `root.render(parent)`.

## File Structure

- **index.html**: Sets up the HTML structure and loads React, ReactDOM, and the main script.
- **app.js**: Contains the React element creation and rendering logic.
- **index.css**: Provides basic styling for the parent and child elements.
- **README.md**: Project documentation.

## Example

The following code from [app.js](app.js) creates a parent `<div>` with two child `<div>`s, each containing two `<h1>` elements:

```js
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