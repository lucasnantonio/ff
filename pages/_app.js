// import App from 'next/app'
import React, { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { hotjar } from "react-hotjar";
import { initGA, logPageView, logEvent } from "../utils/analytics";
import Questions from "../components/Questions";
import Answer from "../components/Answer";
import Hero from "../components/Hero";
import TipsContainer from "../components/TipsContainer";
import colors from "../components/Colors";
import { getRetirementResults, getStudyCasesResults } from "../utils/math";
import { isNumber, valueByInputType } from "../utils/input";

function getRates(label) {
  return {
    poupança: 1.5,
    "renda fixa": 4.5,
    "renda variável": 7.0
  }[label];
}

// componentDidMount() {
//   if (process.env.NODE_ENV === 'development') return null;

//   if (!window.GA_INITIALIZED) {
//     initGA();
//     window.GA_INITIALIZED = true;
//   }
//   logPageView();
//   hotjar.initialize(1140598, 6);
// }

// componentDidUpdate(prevProps, prevState) {
//   const nextRetirementResults = getRetirementResults(this.state);
//   const nextStudyCasesResults = getStudyCasesResults(this.state);

//   if (JSON.stringify(prevState.retirementResults) !== JSON.stringify(nextRetirementResults)) {
//     this.setState({ retirementResults: nextRetirementResults });
//   }

//   if (JSON.stringify(prevState.studyCasesResults) !== JSON.stringify(nextStudyCasesResults)) {
//     this.setState({ studyCasesResults: nextStudyCasesResults });
//   }
// }

const resetApp = () => {
  setSelectedInvestment(false);
};

// assembleStudyCases() {
//   // update studyCases with user input
//   const studyCases = this.state.studyCases.map(item => (
//     Object.assign({}, ...Object.keys(item).map((key) => {
//       if (key === 'label') {
//         return { [key]: item[key] };
//       }
//       return { [key]: this.state[key] };
//     }))
//   ));
//   this.setState({ studyCases });
// }

function MyApp({ Component, pageProps }) {
  const [focusedInput, setFocusedInput] = useState("");
  const [retirementResults, setRetirementResults] = useState(false);
  const [studyCasesResults, setStudyCasesResults] = useState(false);
  const [lifeEvents, setLifeEvents] = useState([
    {
      label: "",
      age: 0,
      cost: "0"
    }
  ]);
  const [myCurrentBalance, setCurrentBalance] = useState(0);
  const [myCurrentAge, setCurrentAge] = useState(18);
  const [myCurrentMonthlySavings, setCurrentMonthlySavings] = useState(100);
  const [myRetirementIncome, setRetirementIncome] = useState(2000);
  const [myLifeExpectancy, setLifeExpectancy] = useState(90);
  const [annualSavingsIncreaseRate, setAnnualSavingsIncreaseRate] = useState(0);
  const [selectedInvestment, setSelectedInvestment] = useState(false);
  const [leaveHeritage, setLeaveHeritage] = useState(false);
  const [wallet, setWallet] = useState([
    {
      label: "poupança",
      allocation: 0
    },
    {
      label: "renda fixa",
      allocation: 0
    },
    {
      label: "renda variável",
      allocation: 0
    }
  ]);

  const [investments, setInvestments] = useState([
    {
      label: "poupança",
      rate: getRates("poupança"),
      isSelected: false,
      isWallet: false
    },
    {
      label: "renda fixa",
      rate: getRates("renda fixa"),
      isSelected: false,
      isWallet: false
    },
    {
      label: "renda variável",
      rate: getRates("renda variável"),
      isSelected: false,
      isWallet: false
    },
    {
      // just a placeholder, not a real investment
      label: "carteira mista",
      isSelected: false,
      isWallet: true
    }
  ]);

  function handleInputButtons(e) {
    const parentNode = e.target.parentNode.parentNode.querySelectorAll(
      "input"
    )[0];
    const parentId = parentNode.id;
    const parentValue = parentNode.value;
    this.setState({ [parentId]: parseFloat(parentValue) });
  }

  function handleStudyCaseInput(e, floatValue, studyCaseLabel) {
    const { id, type, checked, value } = e.target;

    const studyCases = this.state.studyCases.map(item => {
      if (
        item.label === studyCaseLabel ||
        (item.label === "optimized" && id in item)
      ) {
        // optimized case will mirror the other study cases values
        return {
          ...item,
          [id]: valueByInputType(type, floatValue, value, checked)
        };
      }
      return item;
    });

    this.setState({ studyCases });
  }

  function handleStudyCaseWallet(e, floatValue, studyCaseLabel) {
    const { id } = e.target;
    const studyCases = this.state.studyCases.map(item => {
      if (
        item.label === studyCaseLabel ||
        (item.label === "optimized" && "myWallet" in item)
      ) {
        const myWallet = { ...item.myWallet, [id]: parseFloat(floatValue) };
        return {
          ...item,
          myWallet
        };
      }
      return item;
    });
    this.setState({ studyCases });
  }

  function handleInvestmentRateInput(e) {
    const { id, value } = e.target;
    const myInvestments = this.state.myInvestments.map(item => {
      if (item.label === id) {
        return {
          ...item,
          rate: value
        };
      }
      return item;
    });
    this.setState({ myInvestments });
  }

  function assembleMyWallet(selectedInvestmentLabel) {
    // if some investment option is selected, allocate 100% in that investment
    // and 0 % for the others
    const newWallet = wallet.map(item => ({
      ...item,
      allocation: item.label === selectedInvestmentLabel ? 100 : 0
    }));

    setWallet(newWallet);
  }

  function handleInvestmentSelector(e, index) {
    const investmentsState = investments;
    const myInvestments = investmentsState.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex
    }));

    assembleMyWallet(myInvestments[index].label);
    setInvestments(myInvestments);
    setSelectedInvestment(true);

    const investmentTip = document.getElementById("investmentTip");
    if (investmentTip) {
      investmentTip.scrollIntoView({ behavior: "smooth" });
    }

    logEvent("User", "Selected Investment");
  }

  function handleResetRates() {
    const myInvestments = this.state.myInvestments.map(investment => ({
      ...investment,
      rate: getRates(investment.label)
    }));

    this.setState({ myInvestments });
    logEvent("User", "clicked reset taxas");
  }

  function handleWalletInput(e, floatValue) {
    const { id } = e.target;
    const value = floatValue === "" ? 0 : parseFloat(floatValue);

    const myWallet = this.state.myWallet.map(item => {
      if (item.label === id) {
        return {
          ...item,
          allocation: value
        };
      }
      return item;
    });

    this.setState({ myWallet });
  }

  function setFocusedInput(inputId) {
    this.setState({ focusedInput: inputId });
  }

  function handleTableInput(
    e,
    value,
    idx,
    tableName,
    table,
    textField = false
  ) {
    const field = e.target.id;

    if (isNumber(value) || textField) {
      const updatedTable = table.map((row, pidx) => {
        if (idx === pidx) {
          return {
            ...row,
            [field]: textField ? value : parseFloat(value)
          };
        }
        return row;
      });
      this.setState(prevState => ({
        [tableName]: updatedTable,
        retirementResults: getRetirementResults({
          ...prevState,
          [tableName]: updatedTable
        })
      }));
    }
  }

  function handleAddTableRow(tableName, fields) {
    this.setState({
      [tableName]: [...this.state[tableName], fields]
    });
    logEvent("User", "added life event");
  }

  function handleRemoveTableRow(idx, tableName, table) {
    const updatedTable = table.filter((p, pidx) => idx !== pidx);
    this.setState(prevState => ({
      [tableName]: updatedTable,
      retirementResults: getRetirementResults({
        ...prevState,
        [tableName]: updatedTable
      })
    }));
    logEvent("User", "removed life event");
  }
  function handleInput(e, value) {
    console.log(myCurrentBalance);
    const { id } = e.target;
    if (id === )
    setFocusedInput({ [id]: value === "" ? 0 : parseFloat(value) });
  }

  return (
    <>
      <Header></Header>
      <div className="flex flex-column vh-100">
        <NavBar />
        <Component
          handleInputButtons={handleInputButtons}
          handleStudyCaseInput={handleStudyCaseInput}
          handleStudyCaseWallet={handleStudyCaseWallet}
          handleInvestmentRateInput={handleInvestmentRateInput}
          assembleMyWallet={assembleMyWallet}
          handleInvestmentSelector={handleInvestmentSelector}
          handleResetRates={handleResetRates}
          handleWalletInput={handleWalletInput}
          handleTableInput={handleTableInput}
          handleAddTableRow={handleAddTableRow}
          handleRemoveTableRow={handleRemoveTableRow}
          handleInput={handleInput}
          setFocusedInput={setFocusedInput}
          myInvestments={investments}
          selectedInvestment={selectedInvestment}
          myCurrentBalance={myCurrentBalance}
          setCurrentBalance={setCurrentBalance}
          myCurrentAge={myCurrentAge}
          setCurrentAge={setCurrentAge}
          myCurrentMonthlySavings={myCurrentMonthlySavings}
          setCurrentMonthlySavings={setCurrentMonthlySavings}
          myRetirementIncome={myRetirementIncome}
          setRetirementIncome={setRetirementIncome}
          myLifeExpectancy={myLifeExpectancy}
          setLifeExpectancy={setLifeExpectancy}
          annualSavingsIncreaseRate={annualSavingsIncreaseRate}
          setAnnualSavingsIncreaseRate={setAnnualSavingsIncreaseRate}
          selectedInvestment={selectedInvestment}
          setSelectedInvestment={setSelectedInvestment}
          leaveHeritage={leaveHeritage}
          setLeaveHeritage={setLeaveHeritage}
          wallet={wallet}
          setWallet={setWallet}
          {...pageProps}
        />
      </div>
    </>
  );
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
