import React from 'react';

const MinusBtn = () => (
  <svg
    id="minus-button"
    className="pa2 br-pill"
    width="40"
    height="40"
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.5 31.5H47.5H31.5" stroke="black" />
    <style jsx>
      {`
        #minus-button:hover {
          background-color: #f7f7f7;
        }
        #minus-button:active {
          background-color: #fff;
        }
      `}
    </style>
  </svg>
);
export default MinusBtn;
