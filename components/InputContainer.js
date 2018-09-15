import React, { Component } from 'react';
import InputField from './InputField';
import InputTable from './InputTable';

class InputContainer extends Component {
  render() {
    return (
      <div id='inputContainer' className='flex w-100'>
        <div className='w-100'>
            <InputField
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
                isCurrency = "false"
                value = {this.props.myLifeExpectancy}
                hasSteppers = "true"
                stepperIncrement = "1"
                id = "myLifeExpectancy"
                label = "Você pretende viver até quantos anos?"
                handleInput = {this.props.handleInput}
            />
            <InputField
                isCurrency = "true"
                value = {this.props.myCurrentBalance}
                id = "myCurrentBalance"
                label = "Quanto você tem hoje para começar a investir?"
                handleInput = {this.props.handleInput}
              />
            <InputField
                value={this.props.myCurrentMonthlySavings}
                id = "myCurrentMonthlySavings"
                label = "Quanto você consegue guardar todo mês?"
                handleInput = {this.props.handleInput}
            />
            <InputField
                id = "myRetirementIncome"
                label = "Qual será o seu custo de vida ao se aposentar?"
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
        </div>
        <div id='buttonWrapper' className='flex flex-column relative w-100'>
          <button
            className={`ph4 pv3 h3 bg-green white b ttu pointer bn absolute ${this.props.isExpanded ? 'absolute-bottom' : 'absolute-top'}`}
            onClick={!this.props.isExpanded ? this.props.handleStartApp : this.props.handleShowCalculation}>
            {!this.props.isExpanded ? 'COMEÇAR' : 'calcular'}
          </button>
        </div>
        <style jsx>
            {`
              .absolute-bottom{
                bottom:4rem;
                right: 0;
              }
              .absolute-top{
                right: 0;
                top: 4rem;
              }
            `}
        </style>
      </div>
    );
  }
}

export default InputContainer;
