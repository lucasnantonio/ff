import React, { Component } from 'react';
import Link from 'next/link';

const NavBar = props => (
  <div className="absolute white f5 pa4 w-100 ph4">
    <div className="flex mw7 center justify-between">
      <Link href="/">
        <div onClick={props.resetApp} className="b pointer">
          aposentar.me
        </div>
      </Link>
      <Link href="/sobre">
        <div className="link white-40 pointer hover-white"> sobre </div>
      </Link>
    </div>
  </div>
);

export default NavBar;
