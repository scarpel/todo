import React, { useState } from 'react';

const TodoContext = React.createContext({});

function TodoProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [todos, setTodos] = useState({
    1: {
      id: '1',
      name: 'First Todo',
      date: 1632695839,
      items: [
        {
          id: 1,
          name: 'Item 1',
          done: false,
        },
      ],
    },
    2: {
      id: '2',
      name: 'Second Todo',
      date: 1632695839,
      items: [
        {
          id: 1,
          name: 'Item 1',
          done: false,
        },
        {
          id: 2,
          name: 'Item 2',
          done: true,
        },
      ],
    },
    3: {
      id: '3',
      name: 'Third Todo',
      date: 1632695839,
      items: [
        {
          id: 1,
          name: 'Item 1',
          done: false,
        },
        { id: 2, name: 'Item 2', done: true },
        {
          id: 3,
          name: 'Item 3',
          done: false,
        },
      ],
    },
  });
  const [lastTodo, setLastTodo] = useState(null);

  const storeTodo = (id, todo) => {
    const newTodos = { ...todos };
    newTodos[id] = todo;
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    if (id in todos) {
      const { [id]: todo, ...others } = todos;
      setTodos(others);
    }
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <TodoContext.Provider
      value={{ isAuth, setIsAuth, todos, setTodos, lastTodo, setLastTodo, storeTodo, deleteTodo, logout }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;

export { TodoProvider };
