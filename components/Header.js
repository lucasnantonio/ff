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
      href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,900"
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
  </Head>
);

export default Header;
