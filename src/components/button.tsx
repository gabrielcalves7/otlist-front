"use client";

import React, { forwardRef } from 'react';

interface IButton {
  text: string;
  onClick: () => void;
  onMouseOver?: () => void;
  style?: React.CSSProperties;
}

const Button = forwardRef<HTMLButtonElement, IButton>(({ text, onClick, onMouseOver, style }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseOver={onMouseOver}
      className="m-2 p-2 bg-blue-500 text-white rounded w-1/6"
      style={style}
    >
      {text}
    </button>
  );
});

Button.displayName = 'Button'; // Adding display name

export default Button;
