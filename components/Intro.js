import React from 'react';

const Intro = props => (
<div id="intro" className={`${props.isShowing ? 'h-100 flex flex-column' : 'h0 overflow-hidden'} w-100 justify-between center items-center bg-offwhite tc`}>
    <div className="flex flex-column items-center justify-center w-100 h-100">
        <h1 className="b f2 lh-solid">Quero Me  <br />Aposentar</h1>
        <h2 className="f3 fw1 measure-narrow">Calcule sua independência financeira</h2>
        <h3 className="f4 measure-narrow gray mb5">Descubra quando você vai poder mandar tudo à merda!</h3>
    </div>
<style jsx>
    {`
        .h0{height:0}
        .bg-offwhite { background-color: #f8f4ef }
        #intro { transition: all .5s }

    `}
</style>
</div>
);

export default Intro;
