import React, { useMemo } from 'react';
import moment from 'moment';
import CustomProgessBar from '../../components/commom/CustomProgessBar';

export default function TodoCard({ todo, onClick = () => {}, className = '', ...otherProps }) {
  const itemsLength = useMemo(() => todo.items.length, [todo]);
  const itemsDone = useMemo(() => {
    return todo.items.reduce((sum, item) => (item.done ? sum + 1 : sum), 0);
  }, [todo]);

  return (
    <div
      className={`todo-card rounded d-flex flex-column justify-content-center m-3 p-2 pointer ${className}`}
      onClick={onClick}
      {...otherProps}
    >
      <div className="container">
        <p className="date text-uppercase text-muted small-text m-0">{moment.unix(todo.date).format('DD MMM YYYY')}</p>
        <h3 className="m-0 medium-text name">{todo.name}</h3>
        <div className="progress-container justify-content-between align-items-center mt-4">
          <p className="m-0 small">
            {itemsDone} of {itemsLength}
          </p>
          <CustomProgessBar progress={(itemsDone / itemsLength) * 100} />
        </div>
      </div>
    </div>
  );
}
