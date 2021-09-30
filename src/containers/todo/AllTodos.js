import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CustomButton from '../../components/commom/CustomButton';
import TodoContext from '../../context/TodoContext';
import TodoCard from './TodoCard';
import TodoModal from './TodoModal';
import PurpleNoise from '../../assets/imgs/purple-noise2.png';

export default function AllTodos() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [lastCardBounding, setLastCardBounding] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { todos: _todos } = useContext(TodoContext);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    setTodos(Object.values(_todos));
    setIsLoading(false);
  }, [_todos]);

  const goToTodo = (e, todo) => {
    setSelectedItem(todo);
    setLastCardBounding(e.target.getBoundingClientRect());
    history.push(`/app/${todo.id}`);
  };

  const toggleTodoModal = () => {
    history.push('/app');
  };

  const createTodo = () => {
    setSelectedItem(null);
    setLastCardBounding(null);
    history.push(`/app/new`);
  };

  return (
    <>
      {id !== undefined && (
        <TodoModal id={id} item={selectedItem} cardBounding={lastCardBounding} toggleModal={toggleTodoModal} />
      )}
      <div className="all-todos pt-5" style={{ zIndex: 10 }}>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <div className="todos px-5">
            <div className="w-100 left">
              <div className="fixed-box">
                <h1 className="h1">All todos</h1>
                <p className="p-0 text-muted mb-5">
                  Follow all your todos on the right side or create new ones by clicking on the button below
                </p>
                <CustomButton onClick={createTodo}>Create Todo</CustomButton>
              </div>
            </div>
            <div className="todo-cards d-flex justify-content-start align-items-start flex-wrap ps-2">
              {todos.map((todo, index) => (
                <TodoCard
                  key={todo.id}
                  todo={todo}
                  onClick={(e) => goToTodo(e, todo)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={todo.id === id ? 'selected' : ''}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <img src={PurpleNoise} alt="Purple noise" className="purple-noise" style={{ zIndex: 0, opacity: 0.1 }} />
    </>
  );
}
