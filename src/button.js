import React from 'react';

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      {text}
    </button>
  );
}

export default Button;