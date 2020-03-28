import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
import PigAnimated from "./PigAnimated";
import colors from "./Colors";
import { motion, AnimatePresence } from "framer-motion";

const Hero = props => (
  <AnimatePresence>
    {!props.isShowingQuestions && (
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: -500 }}
        id="hero"
        // style={{ backgroundColor: "#CCEEFD" }}
        className="h-100 ph3-ns"
      >
        <div className="mw7-ns ph4-ns center flex items-center pt4-ns pb5-ns pt4 flex-row-ns flex-column tl-ns tc">
          <div className="w-100 mr3-ns mr0 ph0-ns ph3">
            <h1 className="black-80 f2-ns f3 lh-solid mt0 mb0 mb3-ns b mh0-ns fw6">
              Descubra quando você será livre financeiramente.
            </h1>
            <p className="measure lh-copy f5-ns black-80 mh0-ns mh3 mt0-ns mt3 pt3 measure-ns measure-narrow center mb3-ns mb0">
              Começar hoje, mesmo com pouco, é o melhor jeito de garantir seu
              sossego no futuro.
            </p>
          </div>
          <div className="w-100">
            <iframe
              id="d0e763cb-faed-49a2-9e5e-8ed9524593ce"
              src="https://www.vectary.com/viewer/v1/?model=d0e763cb-faed-49a2-9e5e-8ed9524593ce&env=theskyisonfire&turntable=0.3&showInteractionPrompt=0"
              frameborder="0"
              width="100%"
              // height="480"
              className="vh-50-ns vh-50 pigAnimation"
            ></iframe>
          </div>
        </div>
        <style jsx>
          {`
             {
              .exit-active {
                opacity: 1;
                transform: translateY(0%);
              }
              .exit-leave {
                opacity: 0;
                transition: all 0.2s;
                transform: translateY(-20%);
              }
              button {
                transition: all 0.2s;
              }
            }
          `}
        </style>
      </motion.div>
    )}
  </AnimatePresence>
);

export default Hero;
