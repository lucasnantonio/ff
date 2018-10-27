import React from 'react';

const PlusBtn = () => (
  <svg
    id="plus-button"
    className="pa2 br-pill"
    width="40"
    height="40"
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.5 31.5H47.5H31.5V15.5V47.5" stroke="black" />
    <style jsx>
      {`
        #plus-button:hover {
          background-color: #f7f7f7;
        }
        #plus-button:active {
          background-color: #fff;
        }
      `}
    </style>
  </svg>
);

export default PlusBtn;
