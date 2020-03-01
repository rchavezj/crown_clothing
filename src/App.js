import './App.css';
import React from 'react';

import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import ShopPage from './pages/shop/shop.component';
import Header from "./components/header/header.component";
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        // Check if the userAuth
        // exist within the database
        if (userAuth) {
          // Check if the snapShot has updated
          // I.N.W Check if the database, at the ref, is updated with new data
          const userRef = await createUserProfileDocument(userAuth);
          // The moment userRef instantiate, it will
          // send us a snapshot object, representing the data
          // related to the user we possibly stored on our database
          userRef.onSnapshot(
            // Object above (userRef) is where we're going to get the data
            // related to this user that we just possibly stored.
            snapShot => {
              console.log(snapShot);
              setCurrentUser(
                {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              )
              // console.log(setCurrentUser);
            }
          );
        }
        setCurrentUser(userAuth);
      }
    );
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <RedirectToHomePageSignIn currentUser={this.props.currentUser} />
        </Switch>
      </div>
    );
  }
}



const RedirectToHomePageSignIn = ({ currentUser  }) => (
  <Route
    exact
    path="/signin"
    render={
      () => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)
    }
  />
);



const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);