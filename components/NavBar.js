/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import colors from "./Colors";

const NavBar = props => (
  <div
    style={{ background: "#ECF8FE" }}
    className="white f5 ph4 pv3-ns pv2 w-100 ph4"
  >
    <div className="flex mw7 center justify-between">
      <Link href="/">
        <button
          onClick={() => props.resetApp()}
          className="bn bg-transparent b pointer link white ph0"
        >
          <Logo isShowingAnswer={props.isShowingAnswer} />
        </button>
      </Link>
      <Link href="/sobre">
        <a
          style={{ transition: "all .2s" }}
          href="#"
          className="f7 link black-40 hover-black pointer pa3 br-pill chocolate-bold"
        >
          Sobre
        </a>
      </Link>
    </div>
    <style jsx>
      {`
        a:hover {
          background-color: ${colors.lightGray};
        }
      `}
    </style>
  </div>
);

export default NavBar;
