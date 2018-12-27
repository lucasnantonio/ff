import React, { Component } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import colors from '../components/Colors';
import { initGA, logPageView } from '../utils/analytics';

function getYear() {
  const y = new Date().getFullYear();
  return y;
}

const Index = () => (
  <div>
    <Header title="Sobre" />
    <NavBar />
    <div
      style={{ backgroundColor: colors.lightPink, color: colors.darkBrown }}
      className="w-100 pa5-ns pa4 pv6 tl"
    >
      <div className="mw7 flex flex-row-l flex-column center justify-between mt5-ns mt0">
        <h1
          className="normal f2 tracked-tight b"
          style={{ color: colors.lightBrown, fontFamily: 'Montserrat, system-ui, sans-serif' }}
        >
          sobre
        </h1>
        <div className="flex flex-column pt4">
          <p className="measure lh-copy normal">
            Construímos este site pois acreditamos que a informação sobre planejamento financeiro
            pode ser mais divertida, acessível, educativa, e transparente.
          </p>
          <h3 className="b mt4">Nos pague um cafézinho 🐷 </h3>
          <p className="measure lh-copy">
            Criar o aposentar.me levou muito braço, café, noites viradas, e um custo monetário para
            manter nosso servidores e domínios. Se nós te ajudamos a entender melhor seu futuro
            financeiro, considere fazer uma doação para manter o projeto vivo.
          </p>
          <div className="flex flex-row-ns flex-column w-100 justify-center mt4">
            <a target="_blank" href="https://nubank.com.br/pagar/9/cx4IwcOlys">
              <button
                style={{ backgroundColor: colors.darkGreen }}
                className="pa3 w-auto-ns w-100 bn f6 br1 pointer white tc mr2 mb3"
              >
                R$1,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/zYodSW0aMz">
              <button
                style={{ backgroundColor: colors.darkGreen }}
                className="pa3 w-auto-ns w-100 bn f6 br1 pointer white tc mr2 mb3"
              >
                R$5,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/a62eLbpvFE">
              <button
                style={{ backgroundColor: colors.darkGreen }}
                className="pa3 w-auto-ns w-100 bn f6 br1 pointer white tc mr2 mb3"
              >
                R$25,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/Rmk77MkcvW">
              <button
                style={{ backgroundColor: colors.darkGreen }}
                className="pa3 w-auto-ns w-100 bn f6 br1 pointer white tc mr2 mb3"
              >
                R$50,00
              </button>
            </a>
            <a target="_blank" href="https://nubank.com.br/pagar/9/8roiUAN3R3">
              <button
                style={{ backgroundColor: colors.darkGreen }}
                className="pa3 w-auto-ns w-100 bn f6 br1 pointer white tc mr2 mb3"
              >
                Outro valor :)
              </button>
            </a>
          </div>

          <h3 className="b mt5">Open source</h3>
          <p className="measure lh-copy">
            Nosso código é open-source, e está disponível para consulta e colaboração no{' '}
            <a
              className="link"
              style={{ color: colors.redPink }}
              href="https://github.com/lucasnantonio/ff"
              target="_blank"
            >
              Github
            </a>
            . A reprodução é permitida apenas para fins não-comerciais e com menção ao projeto
            original.
          </p>
          <p className="measure lh-copy f7 mt4">
            © 2018-{getYear()}&nbsp;
            <a
              className="link"
              style={{ color: colors.redPink }}
              target="_blank"
              href="https://www.lucasn.com"
            >
              Lucas Neumann&nbsp;
            </a>
            e&nbsp;
            <a
              className="link"
              style={{ color: colors.redPink }}
              target="_blank"
              href="https://github.com/StollToaldo"
            >
              Guilherme Stoll
            </a>
          </p>
          <p className="measure lh-copy f7">
            Contribuições de&nbsp;
            <a
              className="link"
              style={{ color: colors.redPink }}
              target="_blank"
              href="https://github.com/rodrigorahal"
            >
              Rodrigo Rahal
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
