import React from "react";
import colors from "./Colors";

const Signup = () => (
  <div id="mc_embed_signup">
    <form
      action="https://lucasn.us4.list-manage.com/subscribe/post?u=08c392fa31074215393d10f76&amp;id=c8cee3a16e"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll" className="flex flex-row-l flex-column">
        <div className="mc-field-group w-100 ">
          <input
            type="email"
            placeholder="email@gmail.com"
            name="EMAIL"
            className="required email bg-near-white pa3 black-80 bn br-pill mr2 w-100 tl-l tc"
            id="mce-EMAIL"
          />
        </div>
        <div id="mce-responses" className="">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_08c392fa31074215393d10f76_c8cee3a16e"
            tabIndex="-1"
            value=""
          />
        </div>
        <div className="">
          <input
            style={{ backgroundColor: colors.redPink }}
            type="submit"
            value="Inscrever"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="pa3 br-pill pill pointer bn white w-100 mt0-l mt3 ml2-l ml0"
          />
        </div>
      </div>
    </form>
  </div>
);

export default Signup;
