import React, { Component } from 'react';
import Link from 'next/link';

const DonationCall = () => (
  <Link href="/sobre">
    <div className="pa3 br1 white bg-black-20 f7 mt4 self-start-ns fl-ns tl-ns tc pointer">
      Gostou? Faça uma doação <span className="white-50"> ›</span>
    </div>
  </Link>
);

export default DonationCall;
