import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Header from './components/header';
import Footer from './components/footer';

import CategoriesList from './components/categories/categoriesList';
import EditCategory from './components/categories/editCategory';
import CategoryItem from './components/categories/categoryItem';

import LocationsList from './components/locations/locationsList';
import EditLocation from './components/locations/editLocation';
import LocationItem from './components/locations/locationItem';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/categories" />)} />

          <Route path='/categories' exact component={CategoriesList} />
          <Route path='/categories/new' component={EditCategory} />
          <Route path='/categories/edit/:id' component={EditCategory} />

          <Route path='/locations' exact component={LocationsList} />
          <Route path='/locations/new' component={EditLocation} />
          <Route path='/locations/edit/:id' component={EditLocation} />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
