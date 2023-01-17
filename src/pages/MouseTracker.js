import React, { useState } from 'react';

const MouseTracker = (props) => {

    //   let state = { x: 0, y: 0 };
      const [ x, setX ] = useState(0)
      const [ y, setY ] = useState(0)
  
    const handleMouseMove = (event) => {
      setX( event.clientX )
      setY( event.clientY );
    }
  
      return (
        <div style={{ height: '100vh' }} onMouseMove={ handleMouseMove }>
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is ({x}, {y})</p>
        </div>
      );
  }

  export default MouseTracker;