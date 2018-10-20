import React, { Component } from 'react';
import InputField from './InputField';
import InputTable from './InputTable';
import MultiSelect from './MultiSelect';
import QuestionTabs from './QuestionTabs';

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
      tabs: [
        { label: 'básico', isSelected: true },
        { label: 'avançado', isSelected: false },
        { label: 'taxas', isSelected: false },
      ],
    };
  }

  handleTabChange = (e, index) => {
    const { tabs } = this.state;
    const newState = tabs.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));
    this.setState({ tabs: newState });
  };

  canSubmit = () => {
    const { myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome } = this.props;
    const requiredQuestions = [myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome];
    return requiredQuestions.every(item => item !== 0);
  };

  render() {
    return (
      <div id="inputContainer" className={'flex flex-column h-100 w-50-l w-100 pa5-ns pa4'}>
        <QuestionTabs
          isShowingCalculation={this.props.isShowingCalculation}
          tabs={this.state.tabs}
          handleTabChange={this.handleTabChange}
        />
        {this.state.tabs[0].isSelected && (
          <div className="flex flex-column h-100">
            <InputField
              isEnabled
              hasSteppers
              label="Quantos anos você tem?"
              id="myCurrentAge"
              value={this.props.myCurrentAge}
              placeholder="26"
              stepperIncrement="1"
              min="1"
              max="100"
              handleInput={this.props.handleAgeInput}
              handleInputButtons={this.props.handleInputButtons}
            />
            <InputField
              isCurrency
              label="Quanto você tem hoje para começar a investir?"
              placeholder="0"
              value={this.props.myCurrentBalance}
              id="myCurrentBalance"
              handleInput={this.props.handleCurrencyInput}
            />
            <InputField
              isCurrency
              placeholder="0"
              label="Quanto você consegue guardar todo mês?"
              id="myCurrentMonthlySavings"
              value={this.props.myCurrentMonthlySavings}
              handleInput={this.props.handleCurrencyInput}
              hasTips
              setFocusedInput={this.props.setFocusedInput}
            />
            <InputField
              isCurrency
              placeholder="0"
              label="Quanto você quer tirar por mês ao se aposentar?"
              id="myRetirementIncome"
              value={this.props.myRetirementIncome}
              handleInput={this.props.handleCurrencyInput}
            />
            <MultiSelect
              isEnabled={this.canSubmit()}
              label="Onde você guarda seu dinheiro hoje?"
              options={this.props.myInvestments}
              handleClick={this.props.handleInvestmentSelector}
              hiddenBorder={true}
            />
          </div>
        )}
        {this.state.tabs[1].isSelected && (
          <div className="flex flex-column h-100">
            <InputField
              hasSteppers
              label="Você pretende viver até quantos anos?"
              id="myLifeExpectancy"
              value={this.props.myLifeExpectancy}
              stepperIncrement="1"
              min="1"
              max="100"
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
          </div>
        )}
        {this.state.tabs[2].isSelected && (
          <div className="flex flex-column h-100">
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
          </div>
        )}
      </div>
    );
  }
}

export default InputContainer;
