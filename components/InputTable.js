import React, { Component } from 'react';

class InputTable extends Component {
  render() {
    const {
      id,
      table,
      fields,
      myInvestments,
      retirementResults,
      handleTableInput,
      handleAddTableRow,
      handleRemoveTableRow,
    } = this.props;

    const selectedInvestment = myInvestments.filter(investment => investment.isSelected);

    if (selectedInvestment.length === 0) return null;

    const selectedInvestmentLabel = selectedInvestment[0].label;

    const { events } = retirementResults.filter(
      investment => investment[0] === selectedInvestmentLabel,
    )[0][1];

    return (
      <div>
        <table className="w-100">
          <thead>
            <tr>
              <td>evento</td>
              <td>idade</td>
              <td>valor</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {table.map((row, rowId) => (
              <tr key={rowId}>
                <td className="w-third">
                  <input
                    className="w-100"
                    id="label"
                    type="text"
                    value={row.label}
                    onChange={handleTableInput(rowId, id, table, true)}
                  />
                </td>
                <td className="w-third">
                  <input
                    className="w-100"
                    id="age"
                    type="number"
                    value={row.age}
                    onChange={handleTableInput(rowId, id, table)}
                  />
                </td>
                <td className="w-third">
                  <input
                    className="w-100"
                    id="cost"
                    type="number"
                    step="10000"
                    value={row.cost}
                    onChange={handleTableInput(rowId, id, table)}
                  />
                </td>
                <td>
                  <button onClick={handleRemoveTableRow(rowId, id, table)}>{'-'}</button>
                </td>
                <td>{events.length > rowId ? events[rowId].obs : ''}</td>
              </tr>
            ))}
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
        <button
          style={{ backgroundColor: '#fd719b' }}
          className={'pv3 ph4 white br2 ba0'}
          onClick={handleAddTableRow(id, fields)}
        >
          {'Criar um evento'}
        </button>
      </div>
    );
  }
}

export default InputTable;
