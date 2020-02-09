import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
// import HomePage from "./pages/homepage/homepage.components";

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      {/* <Link to='/topics'>Topics</Link> */}
      <button onClick={
        () => props.history.push('/topics')
      }>
        Topics
      </button>
      <h1>Home Page</h1>
    </div>
  );
};
const TopicsList = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={
        () => props.history.push('/')
      }>
        Home
      </button>
      <h1>Topic List Page</h1>
    </div>
  );
};
const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* Boolean */}
      {/* string to the path url  */}
      {/* The component we want to render */}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;

///////////// Needs to be inside a class component. not a functional component. ///////////
// handleClick = () => {
//   // The first argument can either be (1) an object with
//   // {meaningOfLife: this.state.meaningOfLife} which is bad
//   // practice for lack of latest version updated in another location
//   // Or (2) the first argument can be a function coded below, second argument
//   // retrives data asynchronously from the first argument. prevProps is a
//   // prop provided from index.js passed down to it's child App.js to increment.
//   this.setState(
//     (prevState, prevProps) => {
//       return { meaningOfLife: prevState.meaningOfLife + prevProps.increment };
//     },
//     () => console.log(this.state.meaningOfLife)
//   );
// };
///////////// Needs to be inside a class component. not a functional component. ///////////



// function App() {
//   return (
//     <div>
//       {/* The momemnt a route finds a match 
//       (path), it only render the path requested. 
//       Aoivding rendering multiple components */}
//       {/* <Switch> */}
//         {/* Boolean */}
//         {/* string to the path url  */}
//         {/* The component we want to render */}
//         <Route path='/' component={HomePage} />
//         <Route exact path='/topics' component={TopicsList} />
//         <Route path='/topics/:topicId' component={TopicDetail} />
//       {/* </Switch> */}
//     </div>
//   );
// }