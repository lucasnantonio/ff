import React from 'react';

const Header = () => (
  <header>
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,700,900" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Neuton:400" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Titan+One" rel="stylesheet" />
    <style jsx global>
      {`
        html {
          font-size: 15px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 100;
        }
        .titan {
          font-family: 'Titan One', serif;
        }
      `}
    </style>
  </header>
);

export default Header;
