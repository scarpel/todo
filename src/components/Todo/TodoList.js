import React, { useEffect, useRef, useState } from 'react';
import CheckItem from './CheckItem';

export default function TodoList({ todo, setTodo }) {
  const [isFocused, setIsFocused] = useState(false);
  const [newItemId, setNewItemId] = useState(null);

  const todoRef = useRef(null);

  useEffect(() => focusOnTodo(), []);

  const focusOnTodo = () => {
    if (todoRef.current) todoRef.current.focus();
  };

  // const handleKeyDown = (e) => {
  //   if (!isFocused) {
  //     const id = new Date().getTime();

  //     setNewItemId(id);
  //     setTodo({
  //       ...todo,
  //       items: [
  //         ...todo.items,
  //         {
  //           id,
  //           name: '',
  //           done: false,
  //         },
  //       ],
  //     });
  //   } else if (e.keyCode === 13) e.target.blur();
  // };

  // const handleBlur = (index, item) => {
  //   if (!item.name) {
  //     const newItems = [...todo.items];
  //     newItems.splice(index, 1);
  //     setTodo({
  //       ...todo,
  //       items: newItems,
  //     });
  //   }

  //   setIsFocused(false);
  //   focusOnTodo();
  // };

  const addNewItem = (name = '') => {
    const id = new Date().getTime();

    setNewItemId(id);

    setTodo({
      ...todo,
      items: [
        ...todo.items,
        {
          id,
          name,
          done: false,
        },
      ],
    });
  };

  const handleNameChange = ({ target }) => {
    setTodo({
      ...todo,
      name: target.value,
    });
  };

  const handleItemChange = (index, item) => {
    const newItems = [...todo.items];
    newItems[index] = item;

    setTodo({
      ...todo,
      items: newItems,
    });
  };

  const handleItemBlur = (index, item) => {
    if (!item.name) {
      const newItems = [...todo.items];
      newItems.splice(index, 1);
      setTodo({
        ...todo,
        items: newItems,
      });
    }
  };

  return (
    <div
      className="todo-list no-outline d-flex flex-column w-50 mx-auto bg-white px-5 py-4 rounded "
      // onKeyDown={handleKeyDown}
      ref={todoRef}
      tabIndex={-1}
    >
      <input
        type="text"
        value={todo.name}
        onChange={handleNameChange}
        placeholder="Todo Name"
        className="no-style text-center h5 mt-2 mb-4"
      />
      {todo.items.map((item, index) => (
        <CheckItem
          key={item.id}
          item={item}
          setItem={(item) => handleItemChange(index, item)}
          onBlur={() => handleItemBlur(index, item)}
          autoFocus={item.id === newItemId}
        />
      ))}
      <button onClick={() => addNewItem()}>New item</button>
    </div>
  );
}
