import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import colors from './Colors';
import { logEvent } from '../utils/analytics';

function handleClick(socialMedia) {
  logEvent('User', `shared to: ${socialMedia}`);
}

const ShareCall = () => (
  <div className="flex flex-column mt0-l mt4">
    <p className="f6 tc" style={{ color: colors.mediumGray }}>
      Compartilhe
    </p>
    <div className="flex-l dn">
      <div className="mr1 pointer grow" onClick={() => handleClick('facebook')}>
        <FacebookShareButton
          quote="Eu já descobri quando vou me aposentar. E você?"
          url="https://aposentar.me"
        >
          <FacebookIcon iconBgStyle={{ fill: colors.darkGreen }} size={32} round />
        </FacebookShareButton>
      </div>
      <div className="mr1 pointer grow" onClick={() => handleClick('linkedIn')}>
        <LinkedinShareButton
          title="Aposentar.me"
          description="Descubra quando você vai se aposentar."
          url="https://aposentar.me"
        >
          <LinkedinIcon iconBgStyle={{ fill: colors.darkGreen }} size={32} round />
        </LinkedinShareButton>
      </div>
      <div className="mr1 pointer grow" onClick={() => handleClick('twitter')}>
        <TwitterShareButton
          title="Descubra quando você vai se aposentar"
          hashtags={['aposentadoria', 'independenciaFinanceira']}
          url="https://aposentar.me"
        >
          <TwitterIcon iconBgStyle={{ fill: colors.darkGreen }} size={32} round />
        </TwitterShareButton>
      </div>
      <div className="pointer grow" onClick={() => handleClick('whatsapp')}>
        <WhatsappShareButton
          title="Eu já descobri quando vou me aposentar. E você?"
          separator=" — "
          url="https://aposentar.me"
        >
          <WhatsappIcon iconBgStyle={{ fill: colors.darkGreen, padding: '2rem' }} size={32} round />
        </WhatsappShareButton>
      </div>
    </div>

    {/* MOBILE */}

    <div className="flex dn-l justify-center">
      <div className="mr1 pointer grow" onClick={() => handleClick('facebook')}>
        <FacebookShareButton
          quote="Eu já descobri quando vou me aposentar. E você?"
          url="https://aposentar.me"
        >
          <FacebookIcon iconBgStyle={{ fill: colors.darkGreen }} size={50} round />
        </FacebookShareButton>
      </div>
      <div className="mr1 pointer grow" onClick={() => handleClick('linkedIn')}>
        <LinkedinShareButton
          title="Aposentar.me"
          description="Descubra quando você vai se aposentar."
          url="https://aposentar.me"
        >
          <LinkedinIcon iconBgStyle={{ fill: colors.darkGreen }} size={50} round />
        </LinkedinShareButton>
      </div>
      <div className="mr1 pointer grow" onClick={() => handleClick('twitter')}>
        <TwitterShareButton
          title="Descubra quando você vai se aposentar"
          hashtags={['aposentadoria', 'independenciaFinanceira']}
          url="https://aposentar.me"
        >
          <TwitterIcon iconBgStyle={{ fill: colors.darkGreen }} size={50} round />
        </TwitterShareButton>
      </div>
      <div className="pointer grow" onClick={() => handleClick('whatsapp')}>
        <WhatsappShareButton
          title="Eu já descobri quando vou me aposentar. E você?"
          separator=" — "
          url="https://aposentar.me"
        >
          <WhatsappIcon iconBgStyle={{ fill: colors.darkGreen, padding: '2rem' }} size={50} round />
        </WhatsappShareButton>
      </div>
    </div>
  </div>
);

export default ShareCall;
