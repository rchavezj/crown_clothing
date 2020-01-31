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