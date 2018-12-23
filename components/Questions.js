import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import InputField from './InputField';
import InputTable from './InputTable';
import MultiSelect from './MultiSelect';
import QuestionChunk from './QuestionChunk';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 'myCurrentAge',
          isEmpty: false,
        },
        {
          id: 'myCurrentBalance',
          isEmpty: true,
        },
        {
          id: 'myCurrentMonthlySavings',
          isEmpty: true,
        },
        {
          id: 'myRetirementIncome',
          isEmpty: true,
        },
      ],
    };
  }

  canSubmit = () => {
    const { myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome } = this.props;
    const requiredQuestions = [myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome];
    return requiredQuestions.every(item => item !== 0);
  };

  render() {
    return (
      <div id="inputContainer" className="flex flex-column">
        <QuestionChunk isOpen title="Informações básicas">
          <InputField
            isEnabled
            hasSteppers
            label="Quantos anos você tem?"
            id="myCurrentAge"
            value={this.props.myCurrentAge}
            stepperIncrement="1"
            min="1"
            max="100"
            handleInput={this.props.handleInput}
            handleInputButtons={this.props.handleInputButtons}
            hasTips
            setFocusedInput={this.props.setFocusedInput}
          />
          <InputField
            isCurrency
            label="Quanto você tem hoje para começar a investir?"
            placeholder={this.props.myCurrentBalance}
            value={this.props.myCurrentBalance}
            id="myCurrentBalance"
            handleInput={this.props.handleCurrencyInput}
          />
          <InputField
            isCurrency
            label="Quanto você consegue guardar todo mês?"
            id="myCurrentMonthlySavings"
            placeholder={this.props.myCurrentMonthlySavings}
            value={this.props.myCurrentMonthlySavings}
            handleInput={this.props.handleCurrencyInput}
            hasTips
            setFocusedInput={this.props.setFocusedInput}
          />
          <InputField
            isCurrency
            label="Quanto você quer tirar por mês ao se aposentar?"
            id="myRetirementIncome"
            placeholder={this.props.myRetirementIncome}
            value={this.props.myRetirementIncome}
            handleInput={this.props.handleCurrencyInput}
            hasTips
            setFocusedInput={this.props.setFocusedInput}
          />
          <MultiSelect
            isEnabled={this.canSubmit()}
            label="Onde você guarda seu dinheiro hoje?"
            options={this.props.myInvestments}
            handleClick={this.props.handleInvestmentSelector}
            hiddenBorder={true}
          />
          <InputField
            hasSteppers
            label="Você pretende viver até quantos anos?"
            id="myLifeExpectancy"
            value={this.props.myLifeExpectancy}
            stepperIncrement="1"
            min="1"
            max="150"
            handleInput={this.props.handleInput}
            handleInputButtons={this.props.handleInputButtons}
          />
          <InputField
            isPercentage
            dataType="rate"
            value={this.props.annualSavingsIncreaseRate}
            id="annualSavingsIncreaseRate"
            label="Quanto você acha que sua renda vai aumentar ao ano?"
            handleInput={this.props.handleInput}
          />
        </QuestionChunk>
        <QuestionChunk isOpen title="Planeje grandes gastos">
          <InputTable
            id="lifeEvents"
            table={this.props.lifeEvents}
            fields={{
              label: '',
              age: 0,
              cost: 0,
            }}
            myInvestments={this.props.myInvestments}
            retirementResults={this.props.retirementResults}
            handleTableInput={this.props.handleTableInput}
            handleAddTableRow={this.props.handleAddTableRow}
            handleRemoveTableRow={this.props.handleRemoveTableRow}
          />
        </QuestionChunk>
        <QuestionChunk isOpen title="Configurações de taxas">
          {this.props.myInvestments.map((item, index) => (
            <InputField
              isPercentage
              dataType="rate"
              key={index}
              value={item.rate}
              id={item.label}
              label={`Rendimento anual da ${item.label}`}
              handleInput={this.props.handleInvestmentRateInput}
              hasTips
              setFocusedInput={this.props.setFocusedInput}
            />
          ))}
          <button
            className="mt4 ttu fw6 f7 pa3 relative bg-white hover-bg-black hover-white br-pill w4 pointer h4"
            onClick={this.props.handleResetRates}
          >
            Resetar taxas
          </button>
        </QuestionChunk>
        <style jsx>
          {`
            .right-to-left-enter {
              transform: translateX(100%);
              opacity: 0;
            }

            .right-to-left-enter.right-to-left-enter-active {
              transform: translateX(0px);
              transition: all ${this.state.duration}ms ease-in-out;
              opacity: 1;
            }

            .right-to-left-leave {
              transform: translateX(0px);
              opacity: 1;
            }

            .right-to-left-leave.right-to-left-leave-active {
              transform: translateX(-100%);
              transition: all ${this.state.duration}ms ease-in-out;
              opacity: 0;
            }

            .left-to-right-enter {
              transform: translateX(-100%);
              opacity: 0;
            }

            .left-to-right-enter.left-to-right-enter-active {
              transform: translateX(0px);
              transition: all ${this.state.duration}ms ease-in-out;
              opacity: 1;
            }

            .left-to-right-leave {
              transform: translateX(0px);
              opacity: 1;
            }

            .left-to-right-leave.left-to-right-leave-active {
              transform: translateX(100%);
              transition: all ${this.state.duration}ms ease-in-out;
              opacity: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default InputContainer;
