import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.components";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      {/* <Link to='/topics'>Topics</Link> */}
      <button onClick={
        () => props.history.push('/')
      }>
        Back Home
      </button>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* The momemnt a
      route finds a match 
      (path), it only renders the
      path requested. So as long exact is true. 
      Aoivding rendering multiple components */}
      {/* <Switch> */}
      {/* Boolean */}
      {/* string to the path url  */}
      {/* The component we want to render */}
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      {/* </Switch> */}
    </div>
  );
}


export default App;