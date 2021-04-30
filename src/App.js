import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/signin-up/signin-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession();
    },[checkUserSession]);  
    // since the [component] is a function, it's value do not change
    // thus we avoide the empty list warning of hooks imitation of ComponentDidMount()

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInUpPage />) } />
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
