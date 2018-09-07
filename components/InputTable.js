import React, { Component } from 'react';

class InputTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const {
        id,
        table,
        fields,
        handleTableInput,
        handleAddTableRow,
        handleRemoveTableRow,
      } = this.props

        return (
            <table>
              <thead>
                <tr>
                  <td>evento</td>
                  <td>idade</td>
                  <td>valor</td>
                </tr>
              </thead>
              <tbody>
                {table.map((row, rowId) => {
                  return (
                    <tr key={rowId}>
                      <td>
                        <button
                          onClick={handleRemoveTableRow(rowId, id, table)}
                        >{"-"}</button>
                      </td>
                      <td>
                        <input
                          style={{width: 100}}
                          id="label"
                          type="text"
                          value={row.label}
                          onChange={handleTableInput(rowId, id, table, true)}
                          />
                      </td>
                      <td>
                        <input
                          style={{width: 100}}
                          id="age"
                          type="text"
                          value={row.age}
                          onChange={handleTableInput(rowId, id, table)}
                          />
                      </td>
                      <td>
                        <input
                          style={{width: 100}}
                          id="cost"
                          type="text"
                          value={row.cost}
                          onChange={handleTableInput(rowId, id, table)}
                          />
                      </td>
                    </tr>
                  )
                })}
                <tr>
                  <td>
                    <button
                      onClick={handleAddTableRow(id, fields)}
                    >{"+"}</button>
                  </td>
                </tr>

              </tbody>

            </table>

         );
    }
}

export default InputTable;
