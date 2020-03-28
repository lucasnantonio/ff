import React, { Component } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import colors from "../components/Colors";
import Signup from "../components/Signup";
import { logPageView, logEvent } from "../utils/analytics";

function getYear() {
  const y = new Date().getFullYear();
  return y;
}

function handleClick(donationValue) {
  logEvent("User", `Clicked Donate: ${donationValue} R$`);
}

class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    logPageView();
  }

  render() {
    return (
      <div>
        <Header title="Sobre" />
        <NavBar />
        <div
          style={{ backgroundColor: "white", color: colors.darkBrown }}
          className="w-100 ph5-ns ph4 pb6 tl pt5"
        >
          <div className="mw7 ph4-ns flex flex-row-l flex-column center justify-between">
            <h1
              className="normal f2 tracked-tight b"
              style={{
                color: colors.black,
                fontFamily: "Nunito, system-ui, sans-serif"
              }}
            >
              Sobre
            </h1>
            <div className="flex flex-column pt4">
              <p className="measure lh-copy normal mt0">
                Construímos este site pois acreditamos que a informação sobre
                planejamento financeiro pode ser mais divertida, acessível,
                educativa, e transparente.
              </p>
              <h3 className="b mt4 chocolate">Faça uma doação 🐷 </h3>
              <p className="measure lh-copy">
                O aposentar.me é fruto do esforço de dois amigos, muito
                trabalho, café, noites mal dormidas e investimentos do próprio
                bolso. Considere fazer uma doação para manter o projeto vivo.
                Juntos, podemos ajudar muita gente a entender seu futuro
                financeiro.
              </p>
              <div className="flex flex-row-ns flex-column w-100 justify-center mt4">
                <a
                  target="_blank"
                  href="https://nubank.com.br/pagar/9/cx4IwcOlys"
                >
                  <button
                    style={{ backgroundColor: colors.darkGreen }}
                    className="pa3 w-auto-ns w-100 bn f6 br-pill pointer white tc mr2 mb3"
                    onClick={() => handleClick(1)}
                  >
                    R$1,00
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://nubank.com.br/pagar/9/zYodSW0aMz"
                >
                  <button
                    style={{ backgroundColor: colors.darkGreen }}
                    className="pa3 w-auto-ns w-100 bn f6 br-pill pointer white tc mr2 mb3"
                    onClick={() => handleClick(5)}
                  >
                    R$5,00
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://nubank.com.br/pagar/9/a62eLbpvFE"
                >
                  <button
                    style={{ backgroundColor: colors.darkGreen }}
                    className="pa3 w-auto-ns w-100 bn f6 br-pill pointer white tc mr2 mb3"
                    onClick={() => handleClick(25)}
                  >
                    R$25,00
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://nubank.com.br/pagar/9/Rmk77MkcvW"
                >
                  <button
                    style={{ backgroundColor: colors.darkGreen }}
                    className="pa3 w-auto-ns w-100 bn f6 br-pill pointer white tc mr2 mb3"
                    onClick={() => handleClick(50)}
                  >
                    R$50,00
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://nubank.com.br/pagar/9/8roiUAN3R3"
                >
                  <button
                    style={{ backgroundColor: colors.darkGreen }}
                    className="pa3 w-auto-ns w-100 bn f6 br-pill pointer white tc mr2 mb3"
                    onClick={() => handleClick("x")}
                  >
                    Outro valor :)
                  </button>
                </a>
              </div>
              <div className="bt pt3 pb4 mt4 bb bw1 b--black-10">
                <h3 className="b chocolate">Inscreva-se na nossa newsletter</h3>
                <Signup />
              </div>
              <h3 className="b mt5 chocolate">Contato</h3>
              <p className="measure mt0">
                Para dúvidas e sugestões, nos envie um email clicando{" "}
                <a
                  className="link"
                  style={{ color: colors.redPink }}
                  href="mailto:lucasneumann.fau@gmail.com?subject=[Contato aposentar-me]&cc=gs.toaldo@gmail.com"
                >
                  aqui
                </a>
                .
              </p>
              <h3 className="b mt4 chocolate">Open source</h3>
              <p className="measure lh-copy">
                Nosso código é open-source, e está disponível para consulta e
                colaboração no{" "}
                <a
                  className="link"
                  style={{ color: colors.redPink }}
                  href="https://github.com/lucasnantonio/ff"
                  target="_blank"
                >
                  Github
                </a>
                . A reprodução é permitida apenas para fins não-comerciais e com
                menção ao projeto original.
              </p>
              <div className="mt4 bt bw1 b--near-white w-100 pt4">
                <p className="measure lh-copy f7">
                  © 2018-{getYear()}&nbsp;
                  <a
                    className="link"
                    style={{ color: colors.redPink }}
                    target="_blank"
                    href="https://github.com/StollToaldo"
                  >
                    Guilherme Stoll&nbsp;
                  </a>
                  e&nbsp;
                  <a
                    className="link"
                    style={{ color: colors.redPink }}
                    target="_blank"
                    href="https://www.lucasn.com"
                  >
                    Lucas Neumann
                  </a>
                </p>
                <p className="measure lh-copy f7">
                  Contribuições de&nbsp;
                  <a
                    className="link f7"
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
        <style jsx>
          {`
            button:hover {
              background-color: ${colors.darkGreenHover} !important;
            }
            button:active {
              background-color: ${colors.darkGreenActive} !important;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
