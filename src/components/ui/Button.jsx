import React from 'react';

function Button({content, style, beforeBgColor}) {

  console.log(beforeBgColor);

  return (
    <button className={`h=[60px] px-12 py-5 transition duration-500 ease-in-out transform hover:-translate-y-1 
    relative overflow-clip z-10 before:-z-10 before:hover:-z-10 before:absolute ${beforeBgColor} before:w-20 before:h-20 before:rounded-full before:top-[60%] before:left-[83%]
    before:transition before:duration-300 before:ease-in-out
    before:hover:w-52 before:hover:h-52 before:hover:top-full before:hover:left-full before:hover:translate-x-[-50%] before:hover:translate-y-[-58%]`} style={style }>
      {content}
    </button>
  );
}

export default Button;