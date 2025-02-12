import React from 'react';
 
const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '10px',  // Reduced from 20px
        height: '60px'    // Added fixed height
      }}
      className="header-list"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          height: '100%'  // Fill the parent height
        }}
        className="list-items"
      >
        <h1
          style={{
            fontSize: '1.5rem',  // Reduced from 2rem
            fontWeight: 'bold',
            position: 'absolute',
            left: '20px',
            margin: 0  // Remove default margins
          }}
        >
          AMD
        </h1>
        <h2
          style={{
            fontSize: '1.2rem',  // Reduced from 1.5rem
            fontWeight: 'normal',
            width: '100%',
            textAlign: 'center',
            padding: '0 100px',
            margin: 0  // Remove default margins
          }}
        >
          Efficient Performance and Optimization with AMD EPYC™
        </h2>
      </div>
    </div>
  );
};
 
export default Header;