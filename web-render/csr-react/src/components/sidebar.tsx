import { useState } from 'react';

const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99'];

const Sidebar = () => {
  const [color, setColor] = useState(colors[0]);

  const handleChangeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    setColor(colors[index]);
  };

  return (
    <div className='sidebar'>
      <h4
        style={{
          color: color,
        }}
      >
        Sidebar
      </h4>
      <button color={color} onClick={handleChangeColor}>
        Magic Button
      </button>
    </div>
  );
};

export default Sidebar;
