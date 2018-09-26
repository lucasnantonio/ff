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

    const selectedInvestmentLabel = myInvestments.filter(
      investment => investment.isSelected,
    )[0].label;

    const { events } = retirementResults.filter(
      investment => investment[0] === selectedInvestmentLabel,
    )[0][1];

    return (
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>evento</td>
                  <td>idade</td>
                  <td>valor</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {table.map((row, rowId) => (
                    <tr key={rowId}>
                      <td>
                        <button
                          onClick={handleRemoveTableRow(rowId, id, table)}
                        >{'-'}</button>
                      </td>
                      <td>
                        <input
                          style={{ width: 100 }}
                          id="label"
                          type="text"
                          value={row.label}
                          onChange={handleTableInput(rowId, id, table, true)}
                          />
                      </td>
                      <td>
                        <input
                          style={{ width: 100 }}
                          id="age"
                          type="number"
                          value={row.age}
                          onChange={handleTableInput(rowId, id, table)}
                          />
                      </td>
                      <td>
                        <input
                          style={{ width: 100 }}
                          id="cost"
                          type="number"
                          step="10000"
                          value={row.cost}
                          onChange={handleTableInput(rowId, id, table)}
                          />
                      </td>
                      <td>
                        {events.length > rowId ? events[rowId].obs : ''}
                      </td>
                    </tr>
                ))}
                <tr>
                  <td>
                    <button
                      onClick={handleAddTableRow(id, fields)}
                    >{'+'}</button>
                  </td>
                </tr>

              </tbody>

            </table>

    );
  }
}

export default InputTable;
