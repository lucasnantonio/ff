import React from 'react';
import Link from 'next/link';

const DonationCall = () => (
  <div className="flex flex-column mr2">
    <p className="f6 white-50 tc">Colabore</p>
    <Link href="/sobre">
      <div className="pv2 ph3 br-pill white bg-black-20 f7 self-start-ns fl-ns tl-ns tc pointer">
        Faça uma doação
      </div>
    </Link>
  </div>
);

export default DonationCall;
