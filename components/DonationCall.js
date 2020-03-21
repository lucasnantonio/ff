import React from "react";
import Link from "next/link";
import colors from "./Colors";

const DonationCall = () => (
  <div className="flex flex-column mr2 mt0-l mt4 pa3 ba bw1 b--near-white br4">
    <p style={{ color: colors.mediumGray }} className="f6 tc mt0">
      Colabore
    </p>
    <Link href="/sobre">
      <div
        style={{ backgroundColor: colors.darkGreen }}
        className="pv2-ns ph3-ns pa3 br-pill white f7-ns f5 self-start-ns fl-ns tl-ns tc pointer"
      >
        Faça uma doação
      </div>
    </Link>
  </div>
);

export default DonationCall;
