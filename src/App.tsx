// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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

const Brain: React.FC = () => (
  <div>
    <h1>Brain</h1>
    <div className="sub-buttons-container">
      <button className="custom-button">Resume</button>
      <button className="custom-button">Projects</button>
      <button className="custom-button">Blog</button>
      <button className="custom-button">Heart</button>
    </div>
  </div>
);

const Heart: React.FC = () => (
  <div>
    <h1>Heart</h1>
    <div className="sub-buttons-container">
      <button className="custom-button">Music</button>
      <button className="custom-button">Running</button>
      <button className="custom-button">Reading</button>
      <button className="custom-button">Movies</button>
    </div>
  </div>
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
    <Router>
      <div className="App">
        <div className="buttons-container">
          <Link to="/brain" className="custom-button">Brain</Link>
          <Link to="/heart" className="custom-button">Heart</Link>
        </div>
        <div className="circle-container" onClick={handleClick}>
          <HalfCircle left={leftOffset} direction="left" />
          <HalfCircle left={rightOffset} direction="right" />
        </div>
        <Routes>
          <Route path="/brain" element={<Brain />} />
          <Route path="/heart" element={<Heart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
