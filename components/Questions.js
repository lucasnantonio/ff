import React, { Component } from 'react';
import InputField from './InputField';
import InputTable from './InputTable';
import MultiSelect from './MultiSelect';
import QuestionTabs from './QuestionTabs';

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div id="inputContainer" className={'vh-100-l flex flex-column ph5 w-50-l w-100 pb6 mt6'}>
        <QuestionTabs
          isShowingCalculation={this.props.isShowingCalculation}
          tabs={this.state.tabs}
          handleTabChange={this.handleTabChange}
        />
        {this.state.tabs[0].isSelected && (
          <div>
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
              value={this.props.myCurrentBalance}
              id="myCurrentBalance"
              handleInput={this.props.handleCurrencyInput}
            />
            <InputField
              isCurrency
              label="Quanto você consegue guardar todo mês?"
              id="myCurrentMonthlySavings"
              value={this.props.myCurrentMonthlySavings}
              handleInput={this.props.handleCurrencyInput}
            />
            <InputField
              isCurrency
              label="Quanto você quer tirar por mês ao se aposentar?"
              id="myRetirementIncome"
              value={this.props.myRetirementIncome}
              handleInput={this.props.handleCurrencyInput}
            />
            <MultiSelect
              label="Onde você guarda seu dinheiro hoje?"
              options={this.props.myInvestments}
              handleClick={this.props.handleInvestmentSelector}
              hiddenBorder={true}
            />
          </div>
        )}
        {this.state.tabs[1].isSelected && (
          <div>
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
              label="Aumento anual das economias"
              handleInput={this.props.handleInput}
            />
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
            <button style={{ width: '100%' }} onClick={this.props.handleResetRates}>
              Reset taxas
            </button>
          </div>
        )}
        {this.state.tabs[2].isSelected && (
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
        )}
      </div>
    );
  }
}

export default InputContainer;
