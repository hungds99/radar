'use client';

import { useState } from 'react';

export default function MagicButton() {
  const [textColor, setTextColor] = useState('black'); // Initial text color

  const handleClick = () => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'black', 'white'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setTextColor(newColor);
  };

  return (
    <button className='magic-button' style={{ color: textColor }} onClick={handleClick}>
      Magic Button !
    </button>
  );
}
