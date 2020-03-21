import React from "react";
import Head from "next/head";
import colors from "./Colors";

const Header = props => (
  <Head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,viewport-fit=cover"
    />
    <meta charset="utf-8" />
    <title>{props.title}</title>
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:400,600"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
    />
    <link href="../static/styles.css" rel="stylesheet" />
    <meta
      name="description"
      content="Descubra quando você vai atingir a sua independência financeira"
    />
    <meta name="og:title" content="Aposentar.me" />
    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://aposentar.me" />
    <meta name="og:image:type" content="image/png" />
    <meta
      name="og:image"
      content="https://aposentar.me/static/aposentarme.png"
    />
    <meta
      name="og:description"
      content="Descubra quando você vai atingir a sua independência financeira"
    />
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="../static/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="../static/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="../static/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="../static/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="../static/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="../static/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="../static/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="../static/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="../static/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="../static/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../static/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="../static/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../static/favicon-16x16.png"
    />
    <link rel="manifest" href="../static/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="../static/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />
    <style>
      {`
        html,
        html * {
          font-size: 18px;
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
          color: ${colors.darkBrown};
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
          background-color: ${colors.redPink};
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
          caret-color: ${colors.redPink};
          caret-width: 2px;
        }
        input {
          outline: none;
        }
        input:focus::-webkit-input-placeholder
        {
            color: transparent;
        }
        input:focus::-moz-placeholder {
          /* Firefox 19+ */
          color: transparent;
        }
        input:focus:::-ms-input-placeholder {
          /* IE 10+ */
          color: transparent;
        }
        input:focus::-moz-placeholder {
          /* Firefox 18- */
          color: transparent;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          /* display: none; <- Crashes Chrome on hover */
          -webkit-appearance: none;
          margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
        }
        input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: rbga(0, 0, 0, 0.1);
        }
        input::-moz-placeholder {
          /* Firefox 19+ */
          color: rbga(0, 0, 0, 0.1);
        }
        input:-ms-input-placeholder {
          /* IE 10+ */
          color: rbga(0, 0, 0, 0.1);
        }
        input:-moz-placeholder {
          /* Firefox 18- */
          color: rbga(0, 0, 0, 0.1);
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
        button:focus{outline: none;}
      `}
    </style>
  </Head>
);

export default Header;
