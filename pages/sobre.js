import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { initGA, logPageView } from '../utils/analytics';

function getYear() {
  const y = new Date().getFullYear();
  return y;
}

const Index = () => (
  <div>
    <Header title="Sobre" />
    <NavBar />
    <div style={{ backgroundColor: '#5e5df7' }} className="w-100 pa5-ns pa4 pv6 tl white bg-blue">
      <div className="mw7 flex flex-row-l flex-column center justify-between">
        <h1 className="normal f1 tracked-tight">Sobre </h1>
        <div className="flex flex-column pt4">
          <p className="white-70 measure lh-copy normal">
            Construímos este site pois acreditamos que a informação sobre planejamento financeiro
            pode ser mais divertida, acessível, educativa, e transparente.
          </p>
          <h3 className="b mt4">Nos pague um cafézinho 🐷 </h3>
          <p className="white-70 measure lh-copy">
            Criar o aposentar.me levou muito braço, café, noites viradas, e um custo monetário para
            manter nosso servidores e domínios. Se nós te ajudamos a entender melhor seu futuro
            financeiro, considere fazer uma doação para manter o projeto vivo.
          </p>
          <div className="flex flex-row-ns flex-column w-100 justify-center mt4">
            <a target="_blank" href="https://nubank.com.br/pagar/9/cx4IwcOlys">
              <button className="pa3 w-auto-ns w-100 bn f6 br1 pointer bg-black-30 hover-bg-black-40 white tc mr2 mb3">
                R$1,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/zYodSW0aMz">
              <button className="pa3 w-auto-ns w-100 bn f6 br1 pointer bg-black-30 hover-bg-black-40 white tc mr2 mb3">
                R$5,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/a62eLbpvFE">
              <button className="pa3 w-auto-ns w-100 bn f6 br1 pointer bg-black-30 hover-bg-black-40 white tc mr2 mb3">
                R$25,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/Rmk77MkcvW">
              <button className="pa3 w-auto-ns w-100 bn f6 br1 pointer bg-black-30 hover-bg-black-40 white tc mr2 mb3">
                R$50,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/8roiUAN3R3">
              <button className="pa3 w-auto-ns w-100 bn f6 br1 pointer bg-black-30 hover-bg-black-40 white tc mr2 mb3">
                Outro valor :)
              </button>
            </a>
          </div>

          <h3 className="b mt5">Open source</h3>
          <p className="white-70 measure lh-copy">
            Nosso código é open-source, e está disponível para consulta e colaboração no{' '}
            <a className="white link" href="https://github.com/lucasnantonio/ff" target="_blank">
              Github
            </a>
            . A reprodução é permitida apenas para fins não-comerciais e com menção ao projeto
            original.
          </p>
          <p className="white-70 measure lh-copy f7 mt4">
            © 2018-{getYear()}&nbsp;
            <a className="link white" target="_blank" href="https://www.lucasn.com">
              Lucas Neumann&nbsp;
            </a>
            e&nbsp;
            <a className="link white" target="_blank" href="https://github.com/StollToaldo">
              Guilherme Stoll
            </a>
          </p>
          <p className="white-70 measure lh-copy f7">
            Contribuições de&nbsp;
            <a className="link white" target="_blank" href="https://github.com/rodrigorahal">
              Rodrigo Rahal
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
