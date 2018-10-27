import React from 'react';

const Header = () => (
  <header>
    <title>Quando vou me aposentar?</title>
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    <link
      href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600|Titan+One"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta
      name="description"
      content="Descubra quando você vai atingir a sua independência financeira"
    />
    <style jsx global>
      {`
        html {
          font-size: 15px;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 100;
        }
        .titan {
          font-family: 'Titan One', serif;
          font-weight: lighter;
        }
      `}
    </style>
  </header>
);

export default Header;
