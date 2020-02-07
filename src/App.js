import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { auth } from 'firebase';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( 
      async userAuth => {
        // Check if databas has been updated
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // User Database
          userRef.onSnapshot(
            snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              })
            }
          );
          //console.log(this.state);
        }
        this.setState({ currentUser: userAuth });
      }
    );
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}


export default App;