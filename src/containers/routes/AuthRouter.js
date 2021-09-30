import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import TodoContext from '../../context/TodoContext';
import ProtectedRoute from './ProtectedRoute';

export default function AuthRoute({ redirectTo }) {
  const { isAuth } = useContext(TodoContext);
  return isAuth ? <ProtectedRoute /> : <Redirect to={redirectTo} />;
}
