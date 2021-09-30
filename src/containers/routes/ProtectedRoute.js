import React from 'react';
import { Route, Switch } from 'react-router';
import MainLayout from '../layouts/MainLayout';

export default function ProtectedRoute() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/app"></Route>
      </Switch>
    </MainLayout>
  );
}
