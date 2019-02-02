import React, { Component } from 'react';
import colors from './Colors';
import { fromCurrency, toCurrency } from '../utils/input';

function getEventLog(events, lifeEventLabel) {
  return events.filter(e => e.label === lifeEventLabel)[0];
}

function getStyle(eventLog) {
  if (eventLog === undefined) return '';

  if (eventLog.valid) {
    return '';
  }

  return '1px solid red';
}

class InputTable extends Component {
  handleCurrencyInput(e, rowId, id, table) {
    const { value } = e.target;

    this.props.handleTableInput(e, fromCurrency(value), rowId, id, table);
  }

  render() {
    const {
      id,
      table,
      fields,
      retirementResults,
      handleTableInput,
      handleAddTableRow,
      handleRemoveTableRow,
    } = this.props;

    if (!retirementResults) return null;

    const { events } = retirementResults[0][1];

    return (
      <div>
        <table className="w-100">
          <thead>
            <tr className="h3 f5-n f7">
              <td>nome do evento</td>
              <td>sua idade</td>
              <td>custo</td>
              <td>disponível</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {table.map((row, rowId) => {
              const eventLog = getEventLog(events, row.label);
              return (
              <tr key={rowId}>
                <td className="w-25">
                  <input
                    placeholder="ex. volta ao mundo"
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="label"
                    type="text"
                    value={row.label}
                    onChange={e => handleTableInput(e, e.target.value, rowId, id, table, true)}
                  />
                </td>
                <td className="w-25">
                  <input
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="age"
                    type="number"
                    value={row.age}
                    onChange={e => handleTableInput(e, e.target.value, rowId, id, table)}
                  />
                </td>
                <td className="w-25">
                  <input
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="cost"
                    type="text"
                    value={toCurrency(row.cost)}
                    onChange={e => this.handleCurrencyInput(e, rowId, id, table)}
                  />
                </td>
                <td
                  className="w-25 bg-white"
                  style={{ border: getStyle(eventLog) }}
                >
                  {eventLog !== undefined ? toCurrency(eventLog.balance) : 'R$ -'}
                </td>
                <td>
                  <button
                    className="br-pill black-70 pointer bg-white pa2 ba0 hover-bg-near-white"
                    onClick={handleRemoveTableRow(rowId, id, table)}
                  >
                    {'—'}
                  </button>
                </td>
              </tr>
              );
            })}
            <tr>
              <td />
            </tr>
          </tbody>
        </table>
        <button
          style={{ backgroundColor: colors.redPink }}
          className={'pv3 ph4 white br-pill ba0 mv4 pointer'}
          onClick={handleAddTableRow(id, fields)}
        >
          {'+ Adicionar um evento'}
        </button>
      </div>
    );
  }
}

export default InputTable;
