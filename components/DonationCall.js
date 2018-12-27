import React from 'react';
import Link from 'next/link';

const DonationCall = () => (
  <div className="flex flex-column mr2">
    <p className="f6 white-50">Colabore</p>
    <Link href="/sobre">
      <div className="pv2 ph3 br-pill white bg-black-20 f7 self-start-ns fl-ns tl-ns tc pointer">
        Faça uma doação <span className="white-50"> ›</span>
      </div>
    </Link>
  </div>
);

export default DonationCall;
