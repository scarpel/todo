import React from 'react';
import { ReactComponent as CheckMark } from '../../assets/imgs/check.svg';
import CustomTextarea from '../commom/CustomTextarea';

export default function CheckItem({ item, setItem, onBlur, autoFocus, className = '' }) {
  const handleNameChange = (e) => {
    setItem({
      ...item,
      name: e.target.value,
    });
  };

  const toggleCheck = () => {
    setItem({
      ...item,
      done: !item.done,
    });
  };

  return (
    <div className={`check-item w-100 ${className}`}>
      <div className={`checkbox round pointer me-2 ${item.done ? 'done' : ''}`} onClick={toggleCheck}>
        <CheckMark className="check-icon" />
      </div>
      <CustomTextarea
        value={item.name}
        onChange={handleNameChange}
        className="todo-name"
        placeholder="Todo item"
        onBlur={onBlur}
        autoFocus={autoFocus}
        onKeyPress={({ key, target }) => key === 'Enter' && target.blur()}
        maxLength={100}
      />
    </div>
  );
}
