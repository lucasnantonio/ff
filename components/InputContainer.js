import React, { Component } from 'react';
import InputField from './InputField';
import InputTable from './InputTable';
import Logo from './Logo';
import QuestionChunk from './QuestionChunk';
import Button from './Button';
import MultiSelect from './MultiSelect';

class InputContainer extends Component {
  render() {
    return (
      <div id='inputContainer' className={`w-100 h-100 ${this.props.isExpanded && 'flex flex-column'}`}>
            {this.props.isExpanded
            && <div onClick={this.props.handleBack} className="pointer grow w4 mt4">
              <Logo />
            </div>
            }
            <InputField
                isExpanded = {this.props.isExpanded}
                isCurrency = "false"
                value = {this.props.myCurrentAge}
                placeholder="26"
                hasSteppers = "true"
                stepperIncrement = "1"
                min = "1"
                max = "100"
                id = "myCurrentAge"
                label = "Quantos anos você tem?"
                handleInput = {this.props.handleInput}
                helperText = {this.props.myCurrentAge > 25 ? 'Ainda dá tempo' : 'Começando jovem hein!'}
            />
            <InputField
                isExpanded = {this.props.isExpanded}
                isCurrency = "true"
                value = {this.props.myCurrentBalance}
                id = "myCurrentBalance"
                label = "Quanto você tem hoje para começar a investir?"
                handleInput = {this.props.handleInput}
              />
            <InputField
                isExpanded = {this.props.isExpanded}
                value={this.props.myCurrentMonthlySavings}
                id = "myCurrentMonthlySavings"
                label = "Quanto você consegue guardar todo mês?"
                handleInput = {this.props.handleInput}
            />
            <MultiSelect
              label="Onde você guarda seu dinheiro hoje?"
              options={this.props.myInvestments}
            />
            <InputField
                // hasSteppers = 'true'
                // stepperIncrement = '1000'
                isExpanded = {this.props.isExpanded}
                id = "myRetirementIncome"
                label = "Qual será o seu custo de vida ao se aposentar?"
                handleInput = {this.props.handleInput}
            />
            {!this.props.isShowingCalculation && !this.props.isShowingIntro &&
              <div className="self-end mb5">
              <Button label="Calcular" onClick={this.props.handleShowCalculation}/>
              </div>
            }
            {this.props.isShowingCalculation && 
            <QuestionChunk
              title="Opções avançadas"
            >
            <InputField
                isExpanded = {this.props.isExpanded}
                isCurrency = "false"
                value = {this.props.myLifeExpectancy}
                hasSteppers = "true"
                stepperIncrement = "1"
                id = "myLifeExpectancy"
                label = "Você pretende viver até quantos anos?"
                handleInput = {this.props.handleInput}
            />
            <InputTable
              id = "lifeEvents"
              table = {this.props.lifeEvents}
              fields = {
                {
                  label: '',
                  age: 0,
                  cost: 0,
                }
              }
              handleTableInput = {this.props.handleTableInput}
              handleAddTableRow = {this.props.handleAddTableRow}
              handleRemoveTableRow = {this.props.handleRemoveTableRow}
            />
            </QuestionChunk>
            }
      </div>
    );
  }
}

export default InputContainer;
