import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

const state = {
  curFrom: 'AED',
  curTo: 'AED',
  valueFrom: 0,
  valueTo: 0,
};

const modelCtrl = (() => ({
  state,
}))();
export default modelCtrl;
