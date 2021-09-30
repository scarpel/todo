import React, { useContext, useEffect, useMemo, useState } from 'react';
import CustomTextarea from '../../components/commom/CustomTextarea';
import CheckItem from '../../components/Todo/CheckItem';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import CustomButton from '../../components/commom/CustomButton';
import TodoContext from '../../context/TodoContext';
import { ReactComponent as CloseIcon } from '../../assets/imgs/close.svg';

export default function TodoModal({ id, item, cardBounding, toggleModal = () => {} }) {
  const [initialCardStyle, setInitialCardStyle] = useState({
    top: '100%',
    left: '50%',
    width: 200,
    height: 200,
  });
  const [name, setName] = useState(item ? item.name : '');
  const [todos, setTodos] = useState(item?.items || [{ name: '', done: false }]);

  const { storeTodo, deleteTodo } = useContext(TodoContext);

  const isValid = useMemo(() => name && todos.every((todo) => todo.name), [name, todos]);

  useEffect(() => {
    if (cardBounding) {
      const { width, height, top, left } = cardBounding;

      setInitialCardStyle({
        width,
        height,
        top,
        left,
      });
    }
  }, [cardBounding]);

  const handleTodoChange = (item, index) => {
    const newTodos = [...todos];
    newTodos[index] = item;
    setTodos(newTodos);
  };

  const addTodoItem = () => {
    setTodos([...todos, { name: '', done: false }]);
  };

  const deleteTodoItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSave = () => {
    if (id === 'new') {
      const date = moment().unix();

      storeTodo(date, {
        id: String(date),
        date,
        name,
        items: todos,
      });
    } else {
      storeTodo(id, {
        ...item,
        name,
        items: todos,
      });
    }

    toggleModal();
  };

  const handleDelete = () => {
    if (id !== 'new') {
      deleteTodo(id);
      toggleModal();
    }
  };

  return (
    <div className="todo-container" onClick={toggleModal}>
      <main
        className={`todo d-flex flex-column justify-content-between ${cardBounding ? 'card-bounding' : 'free'}`}
        style={initialCardStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="close-btn pointer">
          <CloseIcon className="muted" width={15} height={15} onClick={toggleModal} />
        </div>
        <div>
          {item?.date && (
            <p className="m-0 small text-uppercase text-muter date">{moment.unix(item.date).format('DD MMM YYYY')}</p>
          )}
          <CustomTextarea
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-100 name"
            placeholder="Todo name"
            autoFocus={!item}
            maxLength={50}
          />
          <div className="todos my-3">
            <PerfectScrollbar
              options={{
                useBothWheelAxes: false,
                suppressScrollX: true,
                maxScrollbarLength: 10,
              }}
              style={{ maxHeight: 150, height: 'auto', overflow: 'auto' }}
            >
              {todos.map((todo, index) => (
                <CheckItem
                  className="mb-2"
                  item={todo}
                  key={`todo-${index}`}
                  setItem={(item) => handleTodoChange(item, index)}
                  onBlur={() => {
                    if (!todo.name) deleteTodoItem(index);
                  }}
                />
              ))}
              <div className="text-uppercase small-text text-muted spaced pointer mt-3 ms-1" onClick={addTodoItem}>
                + Add Item
              </div>
            </PerfectScrollbar>
          </div>
        </div>
        <div className="text-center">
          {id !== 'new' && (
            <CustomButton className="me-3" hollow onClick={handleDelete}>
              Delete
            </CustomButton>
          )}
          <CustomButton onClick={handleSave} disabled={!isValid}>
            {id === 'new' ? 'Create todo' : 'Save todo'}
          </CustomButton>
        </div>
      </main>
    </div>
  );
}
