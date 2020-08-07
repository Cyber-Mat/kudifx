import axios from 'axios';
import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

const getRates = async state => {
  try {
    const data = await axios('http://data.fixer.io/api/latest?access_key=9ff7c352dc9fdbfef38d8e9d431a73d8');
    state.apiData = data.data.rates;
    console.log(state.apiData);
  } catch (e) {
    console.log(e);
    alert('ERROR PROCESSING REQUEST');
  }
};

const calculateValue = (state, type) => {
  if (type === 'from') {
    const base = 1 / state.apiData[state.curFrom];
    const result = 1 / state.apiData[state.curTo];

    console.log(base, '=', result);
    const value = (base * state.valueFrom) / result;
    state.valueTo = value;
    console.log(state.valueTo);
    return value;
  } else if (type === 'to') {
    const base = 1 / state.apiData[state.curTo];
    const result = 1 / state.apiData[state.curFrom];

    console.log(base, '=', result);
    const value = (base * state.valueTo) / result;
    state.valueFrom = value;
    console.log(state.valueFrom);
    return value;
  }
};

const modelCtrl = (() => ({
  getRates,
  calculateValue,
}))();
export default modelCtrl;

/**
 * const getRates = async (userBase, target, amount) => {
  // Convert user defined base currency to EUR(API's base currency)
  const apiData = await fetch(`http://data.fixer.io/api/latest?access_key=98fe9ee99c2e0f60c722bc023693e089&symbols=${userBase}`);
  
  const { rates } = await apiData.json();

  const newBase = 1 / rates[userBase];
  //console.log(newBase);

  // Use converted currency to get desired target rates
  const data = await fetch(`http://data.fixer.io/api/latest?access_key=98fe9ee99c2e0f60c722bc023693e089&base=EUR&symbols=${target}`);
  const { base, date, rates: newRate } = await data.json();

  const result = newBase * newRate[target];
  //console.log(result);
  console.log(`${userBase}${amount}: ${target}${(result * amount).toFixed(2)}`);
};

dom.form.addEventListener('submit', e => {
  e.preventDefault();
  const amount = dom.num.value;
  const base = dom.cur.value;
  const target = dom.to.value;

  getRates(base, target, amount);
});
 */
