import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import InputField from './InputField';
import InputTable from './InputTable';
import MultiSelect from './MultiSelect';
import QuestionTabs from './QuestionTabs';

let timeoutVar = 0;

class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetTabIndex: 0,
      currentTabIndex: 0,
      duration: 400,
      direction: '',
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

  componentDidUpdate(prevProps, prevState) {
    const { currentTabIndex } = this.state;

    if (currentTabIndex !== this.state.targetTabIndex) {
      const nextTabIndex = currentTabIndex + (currentTabIndex < this.state.targetTabIndex ? 1 : -1);

      // wait for the animation to end before changing to the next tab
      // if it is the first animation, start it right away.
      const duration = currentTabIndex === prevState.targetTabIndex ? 0 : this.state.duration;

      clearTimeout(timeoutVar);
      timeoutVar = setTimeout(() => this.setState({ currentTabIndex: nextTabIndex }), duration);
    }
  }

  handleTabChange = (e, index) => {
    const { tabs } = this.state;
    const previousTab = tabs.filter(item => item.isSelected)[0];
    const previousTabIndex = tabs.indexOf(previousTab);
    const animationDirection = previousTabIndex >= index ? 'right-to-left' : 'left-to-right';

    const nTabTransitions = Math.abs(index - previousTabIndex);
    const duration = 400 / nTabTransitions; // so that the total transition time is constant

    const newState = tabs.map((item, itemIndex) => ({
      ...item,
      isSelected: index === itemIndex,
    }));

    this.setState({
      tabs: newState,
      direction: animationDirection,
      targetTabIndex: index,
      duration,
    });
  };

  canSubmit = () => {
    const { myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome } = this.props;
    const requiredQuestions = [myCurrentBalance, myCurrentMonthlySavings, myRetirementIncome];
    return requiredQuestions.every(item => item !== 0);
  };

  render() {
    return (
      <div id="inputContainer" className={'flex-l flex-column-l h-100-l w-50-l pa5-ns pa4'}>
        <QuestionTabs
          isShowingCalculation={this.props.isShowingCalculation}
          tabs={this.state.tabs}
          handleTabChange={this.handleTabChange}
        />
        <CSSTransitionGroup
          transitionName={this.state.direction}
          transitionEnterTimeout={this.state.duration}
          transitionLeaveTimeout={this.state.duration}
          className="flex-l h-100 w-100 relative overflow-hidden"
        >
          {this.state.currentTabIndex === 0 && (
            <div id="tab1" className="flex flex-column h-100 w-100 absolute ">
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
          {this.state.currentTabIndex === 1 && (
            <div id="tab2" key="2" className="flex flex-column h-100 w-100 absolute ">
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
          {this.state.currentTabIndex === 2 && (
            <div id="tab3" key="3" className="flex flex-column h-100 w-100 absolute ">
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
        </CSSTransitionGroup>
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
