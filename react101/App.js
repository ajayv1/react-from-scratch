// this is from react core code
// 2nd args of createElement is where we give attribute list
const h1 = React.createElement('h1', { id: "heading" }, "Hello world");

console.log(h1); // this is a react element which is a js object

// reactDOM offers react root element to place all the code inside
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1);

// another assignment
/**
 * <div id="parent">
 *  <div id="child">
 *    <h1>Hello element</h1>
 *    <h1>Hello element2</h1>
 *  </div>
 * </div>
 * 
 */

const child = React.createElement(
  'div',
  { id: 'child' },
  [React.createElement('h1', {}, "Hello element"), React.createElement('h1', {}, "Hello element2")]

);

const parent = React.createElement(
  'div',
  { id: 'parent' },
  child
);

root.render(parent);