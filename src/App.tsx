// App.tsx
import React, { useState } from 'react';
import './App.css';

interface HalfCircleProps {
  left: number;
  direction: 'left' | 'right';
}

const HalfCircle: React.FC<HalfCircleProps> = ({ left, direction }) => (
  <div
    className={`half-circle ${direction}`}
    style={{ left: `${left}px` }}
  ></div>
);

const App: React.FC = () => {
  const [leftOffset, setLeftOffset] = useState(0);
  const [rightOffset, setRightOffset] = useState(75);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setLeftOffset(leftOffset - 80);
      setRightOffset(rightOffset + 80);
    } else {
      setLeftOffset(leftOffset + 80);
      setRightOffset(rightOffset - 80);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="buttons-container">
        <button className="custom-button">Brain</button>
        <button className="custom-button">Heart</button>
        <button className="custom-button">Thoughts</button>
      </div>
      <div className="circle-container" onClick={handleClick}>
        <HalfCircle left={leftOffset} direction="left" />
        <HalfCircle left={rightOffset} direction="right" />
      </div>
    </div>
  );
};

export default App;
