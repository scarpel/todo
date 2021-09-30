import React, { useEffect, useRef } from 'react';

export default function CustomTextarea({ value, onChange, className = '', ...others }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    setTimeout(() => adjust(), 100);
  }, []);

  useEffect(() => {
    adjust();
  }, [value]);

  const adjust = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      className={`custom-textarea no-style ${className}`}
      onResize={adjust}
      {...others}
    />
  );
}
