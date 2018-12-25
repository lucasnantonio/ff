import React from 'react';
import Link from 'next/link';

const NavBar = props => (
  <div className="absolute white f5 pa4 w-100 ph4">
    <div className="flex mw7 center justify-between">
      <Link href="/">
        <a onClick={props.resetApp} className="b pointer link white">
          aposentar.me
        </a>
      </Link>
      <Link href="/sobre">
        <a className="link white-40 pointer hover-white"> sobre </a>
      </Link>
    </div>
  </div>
);

export default NavBar;
