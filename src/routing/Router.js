import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeIndex from './../components/home/HomeIndex';
import UsersRouting from './../components/users/routing/UsersRouting';
import Header from './../components/common/header/Header';

const Router = () => {
  return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="b-content container">
            <Switch>
              <Route exact path="/" component={HomeIndex}/>
              <Route path="/users" component={UsersRouting}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
};

export default Router;
