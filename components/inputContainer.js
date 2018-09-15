import React, { Component } from 'react';
import InputField from './InputField';
import InputTable from './InputTable';
import QuestionChunk from './QuestionChunk';

class InputContainer extends Component {
  render() {
    return (
      <div id='inputContainer' className={`flex ${!this.props.isExpanded ? 'h5 overflow-y-hidden' : 'vh-100'}`}>
        <div className=''>
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
        <div className={`flex flex-column center ${this.props.isExpanded ? 'justify-end mb5' : 'justify-start mt5'} `}>
          <button className="ph4 pv3 h3 bg-green white b ttu pointer bn" onClick={this.props.handleStartApp}>{this.props.isExpandded ? 'COMEÇAR' : 'calcular'}</button>
        </div>
        <style jsx>
              {`
              #inputContainer{
                transition: .55s height Ease-in-out
              }
              `}
        </style>
      </div>
    );
  }
}

export default InputContainer;
