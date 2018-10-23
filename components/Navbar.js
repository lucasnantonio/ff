import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const NavBar = props => (
  <div className="flex justify-between w-100 pv3 ph5-ns ph4 white bg-green">
    <div className="pointer" onClick={props.handleBack}>
      {/* {!props.isShowingIntro && <Logo size="small" />} */}
    </div>
    <Link href="/sobre">
      <p className="link pointer">Sobre</p>
    </Link>
  </div>
);

export default NavBar;