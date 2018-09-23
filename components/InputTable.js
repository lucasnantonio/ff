import React, { Component } from 'react';

class InputTable extends Component {
  render() {
    const {
      id,
      table,
      fields,
      handleTableInput,
      handleAddTableRow,
      handleRemoveTableRow,
    } = this.props;

    return (
            <table>
              <thead>
                <tr>
                  <td></td>
                  <td>evento</td>
                  <td>idade</td>
                  <td>valor</td>
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
