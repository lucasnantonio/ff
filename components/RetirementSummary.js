import React, { Component } from 'react';

class RetirementSummary extends Component {
    state = { }

    getSelectedInvestmentIndex = (array) => {
      const selectedItem = array.filter(item => item.isSelected);
      return(array.indexOf(selectedItem[0]));
    }

    render() {
      return (
        <div className="w-100 bg-green center white mb6 br2 tc pa6">
        <h2 className="mv0">Você vai se aposentar com</h2>
        <h3 className="mv0 f1 tracked-tight b">{
            console.log(this.props.retirementResults[0][1].retirement.age)
        }</h3>
    </div>);
    }
}

export default RetirementSummary;
