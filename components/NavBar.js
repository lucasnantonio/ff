/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import colors from './Colors';

const NavBar = props => (
  <div className="absolute white f5 pa4 w-100 ph4">
    <div className="flex mw7 center justify-between">
      <Link href="/">
        <button className="bn bg-transparent b pointer link white ph0">
          <Logo isShowingAnswer={props.isShowingAnswer} />
        </button>
      </Link>
      <Link href="/sobre" tabIndex="0">
        <a href="#" className="link black-40 hover-black pointer  pa3">
          sobre
        </a>
      </Link>
    </div>
  </div>
);

export default NavBar;
