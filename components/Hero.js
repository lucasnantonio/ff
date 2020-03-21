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
        style={{ backgroundColor: "#CCEEFD" }}
        className="h-100 ph3"
      >
        <div className="mw7-ns center flex flex-row-ns flex-column items-center justify-center h-100 pb0-ns pv5-ns pv4">
          <div className="w-50-ns w-100 tl-ns tc mb5-ns">
            <h1 className="black-80 f2-ns f3 lh-solid normal mt0 mb0 mb3-ns b">
              Descubra quando você será livre financeiramente.
            </h1>
            <p
              className="measure-narrow lh-copy f5 dib-ns dn"
              style={{ color: "rgba(0,0,0,.8)" }}
            >
              Começar hoje, mesmo com pouco, é o melhor jeito de garantir seu
              sossego no futuro.
            </p>

            {/* {!props.isShowingQuestions && ( */}
            <button
              style={{
                backgroundColor: "#F7CBDC",
                color: "black",
                fontFamily: "Chocolate Bold, system-ui, sans-serif"
              }}
              onClick={props.startApp}
              className="fw6 ba0 mt4 ph4 pv3-ns pv4 br-pill-l pointer f5 relative-ns fixed bottom-0 r0 l0 w-auto-ns w-100 b"
            >
              Começar
            </button>
          </div>
          <div className="w-60-ns w-100 pl4-l">
            {/* <img className="w-100" src="../static/3dpig.png"></img> */}
            <iframe
              // style={{ marginTop: "-400px" }}
              id="d0e763cb-faed-49a2-9e5e-8ed9524593ce"
              src="https://www.vectary.com/viewer/v1/?model=d0e763cb-faed-49a2-9e5e-8ed9524593ce&env=theskyisonfire&turntable=0.3&showInteractionPrompt=0"
              frameborder="0"
              width="100%"
              height="480"
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
