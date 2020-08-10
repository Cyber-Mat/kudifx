import axios from 'axios';
import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

const getRates = async state => {
  try {
    const data = await axios('http://data.fixer.io/api/latest?access_key=9ff7c352dc9fdbfef38d8e9d431a73d8');
    state.apiData = data.data.rates;
  } catch (e) {
    console.log(e);
    alert('ERROR PROCESSING REQUEST');
  }
};

const calculateValue = (state, type) => {
  if (type === 'from') {
    // Convert API base currency(EURO) into user defined currency
    const base = 1 / state.apiData[state.curFrom];
    const result = 1 / state.apiData[state.curTo];

    const value = (base * state.valueFrom) / result;
    state.valueTo = value;

    return value;
  } else if (type === 'to') {
    const base = 1 / state.apiData[state.curTo];
    const result = 1 / state.apiData[state.curFrom];

    const value = (base * state.valueTo) / result;
    state.valueFrom = value;

    return value;
  }
};

const changeBase = (state, base) => {
  // Store API data and make base change in new object
  let newApiData = state.apiData;
  const newBase = 1 / newApiData[base];

  // Convert all currencies to equivalent values in new base currency
  CURRENCY_DATA.forEach(cur => {
    newApiData[cur.code] = (newApiData[cur.code] * newBase).toFixed(6);
  });
  return newApiData;
};

const modelCtrl = (() => ({
  getRates,
  calculateValue,
  changeBase,
}))();
export default modelCtrl;
