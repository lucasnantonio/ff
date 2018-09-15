import React from 'react';
import Link from 'next/link';

const NavBar = () => (
        <div className="self-start w-100 pv4 ph6 tr">
            <Link href="/sobre">
            <p className="link pointer">Sobre</p>
            </Link>
        </div>
);


export default NavBar;
