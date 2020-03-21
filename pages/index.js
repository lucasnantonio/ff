import React, { Component } from "react";
import { hotjar } from "react-hotjar";
import { initGA, logPageView, logEvent } from "../utils/analytics";
import Questions from "../components/Questions";
import Answer from "../components/Answer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TipsContainer from "../components/TipsContainer";
import NavBar from "../components/NavBar";
import colors from "../components/Colors";
import { getRetirementResults, getStudyCasesResults } from "../utils/math";
import { isNumber, valueByInputType } from "../utils/input";

const Index = () => {
  return (
    <div id="pageWrapper" className="center vh-100">
      {/* <Header title="Aposentar.me" /> */}
      {/* <NavBar isShowingAnswer={this.state.isShowingAnswer} /> */}
      {/* {!this.state.isShowingAnswer ? ( */}
      <Hero
      // startApp={this.startApp}
      // isShowingQuestions={this.state.isShowingQuestions}
      />
      {/* ) : ( */}
      {/* <div> */}
      {/* <Answer {...this.state} /> */}
      {/* <TipsContainer
              handleStudyCaseInput={this.handleStudyCaseInput}
              handleStudyCaseWallet={this.handleStudyCaseWallet}
              myInvestments={this.state.myInvestments}
              studyCases={this.state.studyCases}
              retirementResults={this.state.retirementResults}
              studyCasesResults={this.state.studyCasesResults}
              currentRetirementAge={this.state.retirementResults[0][1].retirement.age}
            /> */}
      {/* </div> */}
      {/* )} */}

      {/* <div
        id="questionsContainer"
        className={`w-100 center ${this.state.isShowingQuestions &&
          "pt5 pb6"} `}
        style={{ backgroundColor: colors.lightGray }}
      >
        {this.state.isShowingQuestions && (
          <Questions
            {...this.state}
            isShowingAnswer={this.state.isShowingAnswer}
            startApp={this.startApp}
            handleShowAnswer={this.handleShowAnswer}
            handleResetRates={this.handleResetRates}
            handleInput={this.handleInput}
            handleInputButtons={this.handleInputButtons}
            handleCurrencyInput={this.handleCurrencyInput}
            handleTableInput={this.handleTableInput}
            handleAddTableRow={this.handleAddTableRow}
            handleRemoveTableRow={this.handleRemoveTableRow}
            handleInvestmentSelector={this.handleInvestmentSelector}
            handleInvestmentRateInput={this.handleInvestmentRateInput}
            setFocusedInput={this.setFocusedInput}
            handleWalletInput={this.handleWalletInput}
          />
        )}
      </div> */}
    </div>
  );
};

export default Index;
