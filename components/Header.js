import React from 'react';
import Head from 'next/head';

const Header = props => (
  <Head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover"
    />
    <meta charset="utf-8" />
    <meta name="theme-color" content="#5e5df7" />
    <title>{props.title}</title>
    <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
    <link rel="icon" href="../static/favicon.ico" />
    <meta
      name="description"
      content="Descubra quando você vai atingir a sua independência financeira"
    />
    <meta name="og:title" content="Aposentar.me" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://aposentar.me" />
    <meta
      name="og:description"
      content="Descubra quando você vai atingir a sua independência financeira"
    />
    <style>
      {`
        html {
          font-size: 18px;
          font-family: 'Muli', sans-serif;
          font-weight: 100;
        }
        .titan {
          font-family: 'Titan One', serif;
          font-weight: lighter;
        }
        ::-webkit-scrollbar {
          width: 0px; /* remove scrollbar space */
          background: transparent; /* optional: just make scrollbar invisible */
        }
        .ba0 {
          border: 0px;
        }
        .l0 {
          left: 0;
        }
        .r0 {
          right: 0;
        }
        .h0 {
          height: 0;
        }
        ::selection {
          color: white;
          background-color: #fbadaf;
          opacity: 1;
        }
        .noSelect {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .showing {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }
        .absolute-bottom {
          bottom: 4rem;
          right: 0;
        }
        .absolute-top {
          right: 0;
          top: 4rem;
        }
        .mt-negative {
          margin-top: -5rem;
        }
        input {
          outline: none;
          caret-color: #2ea776;
          caret-width: 2px;
        }
        .checkmark {
          transition: all 0.2s;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          /* display: none; <- Crashes Chrome on hover */
          -webkit-appearance: none;
          margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
        .bg-blue {
          background-color: #5d56fb !important;
        }
      `}
    </style>
  </Head>
);

export default Header;
