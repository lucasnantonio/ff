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

const ShareCall = () => (
  <div className="flex flex-column">
    <p className="f6 white-50">Compartilhe</p>
    <div className="flex">
      <div className="mr1 pointer grow">
        <FacebookShareButton
          quote="Eu já descobri quando vou me aposentar. E você?"
          url="https://aposentar.me"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className="mr1 pointer grow">
        <LinkedinShareButton
          title="Aposentar.me"
          description="Descubra quando você vai se aposentar."
          url="https://aposentar.me"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
      <div className="mr1 pointer grow">
        <TwitterShareButton
          title="Descubra quando você vai se aposentar"
          hashtags={['aposentadoria', 'independenciaFinanceira']}
          url="https://aposentar.me"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div className="mr1 pointer grow">
        <WhatsappShareButton
          title="Eu já descobri quando vou me aposentar. E você?"
          separator=" — "
          url="https://aposentar.me"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  </div>
);

export default ShareCall;
