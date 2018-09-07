import { Component } from "react";
import InputField from '../components/inputField'
import QuestionChunk from '../components/questionChunk'
import Intro from '../components/intro'

class InputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isIntroShowing: true
         };
         this.startApp = this.startApp.bind(this)
    }

    startApp () {
        this.setState({
            isIntroShowing: false
        })
        document.getElementById('questions').scrollIntoView({behavior: "smooth", block:"start"})
    }

    render() {
        return (
            <div className={`w-100 ph5 ${this.state.isIntroShowing ? "overflow-hidden" : "overflow-scroll"}` }>

            <Intro handleClick={this.startApp}/>

           <div id="questions" className="pt5">
           <QuestionChunk index="1" title="Sobre você">
                <InputField
                    isCurrency = "false"
                    value = {this.props.myCurrentAge}
                    hasSteppers = "true"
                    stepperIncrement = "1"
                    min = "1"
                    max = "100"
                    id = "myCurrentAge"
                    label = "Quantos anos você tem?"
                    handleInput = {this.props.handleInput}
                    helperText = {this.props.myCurrentAge > 25 ? "Ainda dá tempo" : "Começando jovem hein!"}
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
            </QuestionChunk>
            <QuestionChunk index="2" title="Sobre seu dinheiro">
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
            </QuestionChunk>
            </div>
            <style jsx>
                {`
                ::-webkit-scrollbar {
                    width: 0px;  /* remove scrollbar space */
                    background: transparent;  /* optional: just make scrollbar invisible */
                }`}
            </style>
            </div>
         );
    }
}

export default InputContainer;
