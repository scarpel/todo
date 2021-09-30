import React from 'react';

export default function CustomButton({ className = '', hollow = false, outline, children, ...props }) {
  return (
    <button
      className={`custom-button pointer no-style ${className} ${hollow ? 'hollow' : ''} ${outline ? 'outline' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
