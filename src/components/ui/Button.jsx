import React from 'react';

function Button({content, style}) {

  return (
    <button className="h=[60px] px-12 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1" style={style}>
      {content}
    </button>
  );
}

export default Button;