import React, { Component } from 'react';
import colors from './Colors';

function fromCurrency(currency) {
  const number = Number(currency.replace(/[^0-9\,-]+/g, ''));
  return number;
}

function toCurrency(number) {
  const currency = number.toLocaleString('pt-BR', { maximumFractionDigits: 0 });
  return `R$ ${currency}`;
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
            {table.map((row, rowId) => (
              <tr key={rowId}>
                <td className="w-third">
                  <input
                    placeholder="ex. volta ao mundo"
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="label"
                    type="text"
                    value={row.label}
                    onChange={e => handleTableInput(e, e.target.value, rowId, id, table, true)}
                  />
                </td>
                <td className="w-third">
                  <input
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="age"
                    type="number"
                    value={row.age}
                    onChange={e => handleTableInput(e, e.target.value, rowId, id, table)}
                  />
                </td>
                <td className="w-third">
                  <input
                    className="w-100 black-80 tc pa3-ns pa2 bg-white br1 ba0 f5-ns f7"
                    id="cost"
                    type="text"
                    value={toCurrency(row.cost)}
                    onChange={e => this.handleCurrencyInput(e, rowId, id, table)}
                  />
                </td>
                <td
                  className="w-third"
                  style={{ border: events.length > rowId ? (events[rowId].valid ? '' : '1px solid red') : '' }}
                >
                  {events.length > rowId ? toCurrency(events[rowId].balance) : 'R$ -'}
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
            ))}
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
