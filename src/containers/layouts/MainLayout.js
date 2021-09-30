import React from 'react';
import { Switch, Route } from 'react-router';
import MainHeader from '../../components/layout/MainHeader';
import AllTodos from '../todo/AllTodos';

export default function MainLayout() {
  return (
    <div className="main-layout h-100">
      <MainHeader />
      <Switch>
        <Route exact path="/app" component={AllTodos} />
        <Route exact path="/app/:id" component={AllTodos} />
      </Switch>
    </div>
  );
}
