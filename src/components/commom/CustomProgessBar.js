import React from 'react';

export default function CustomProgessBar({ progress, className = '', ...props }) {
  return (
    <div className={`custom-progress-bar ${className}`} {...props}>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
