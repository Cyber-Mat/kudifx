import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

import '../../dist/css/style.css';

import viewCtrl, { variables } from './view';
import modelCtrl from './model';

const appCtrl = ((viewCtrl, modelCtrl) => {
  const state = {
    curFrom: 'AED',
    curTo: 'AED',
    valueFrom: 0,
    valueTo: 0,
    apiData: {},
  };

  const DOM = viewCtrl.DOM;
  const {
    selectArray,
    selectIconArray,
    selectFrom,
    selectTo,
    iconFrom,
    iconTo,
    converterInputArray,
    fromConverterInput,
    toConverterInput,
    converterDate,
    ratesBaseSelect,
  } = variables;

  /**
   *  EVENT LISTENERS
   */

  // FROM DROPDOWN EVENT LISTENER
  selectFrom.addEventListener('change', () => {
    // Render Icons
    viewCtrl.renderIcon('from');
    // Render currency symbol
    state.curFrom = selectFrom.value;
    viewCtrl.renderSymbol(state, 'from');

    // Calculate new converted value on currency change
    state.valueTo = parseFloat(toConverterInput.value);
    if (state.valueTo) {
      const value = modelCtrl.calculateValue(state, 'to');

      if (value) fromConverterInput.value = value.toFixed(4);
      else fromConverterInput.value = 0;
    }
  });

  // TO DROPDOWN EVENT LISTENER
  selectTo.addEventListener('change', () => {
    // Render Icons
    viewCtrl.renderIcon('to');
    // Render currency symbol
    state.curTo = selectTo.value;
    viewCtrl.renderSymbol(state, 'to');

    // Calculate new converted value on currency change
    state.valueFrom = parseFloat(fromConverterInput.value);
    if (state.valueFrom) {
      const value = modelCtrl.calculateValue(state, 'from');

      if (value) toConverterInput.value = value.toFixed(4);
      else toConverterInput.value = 0;
    }
  });

  // FROM INPUT EVENT LISTENER
  fromConverterInput.addEventListener('input', e => {
    state.valueFrom = parseFloat(e.target.value);
    const value = modelCtrl.calculateValue(state, 'from');

    if (value) toConverterInput.value = value.toFixed(4);
    else toConverterInput.value = 0;
  });

  // TO INPUT EVENT LISTENER
  toConverterInput.addEventListener('input', e => {
    state.valueTo = parseFloat(e.target.value);
    const value = modelCtrl.calculateValue(state, 'to');

    if (value) fromConverterInput.value = value.toFixed(4);
    else fromConverterInput.value = 0;
  });

  // WINDOW EVENT LISTENER
  window.addEventListener('load', async () => {
    // Render main dropdown options on page load
    viewCtrl.renderDropdown('main');

    // Make API request and store in state
    await modelCtrl.getRates(state);

    // Set time
    window.setInterval(viewCtrl.setTime, 1000);

    // Render exchange rate base currency options on page load
    viewCtrl.renderDropdown('base');

    // Render exchange rates on page load in USD(convert from EUR default of API )
    const base = ratesBaseSelect.value;
    const newApiData = modelCtrl.changeBase(state, base);

    viewCtrl.renderRates(newApiData);

    // RATES DROPDOWN EVENT LISTENER
    ratesBaseSelect.addEventListener('change', e => {
      const base = e.target.value;
      const newApiData = modelCtrl.changeBase(state, base);

      viewCtrl.renderRates(newApiData);
    });
  });
})(viewCtrl, modelCtrl);
