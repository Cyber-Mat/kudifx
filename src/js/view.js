import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

const DOM = {
  select: '.cur-select',
  converterDate: '.converter__date',
  selectIcon: '.cur-img',
  fromSymbol: '.from-symbol',
  toSymbol: '.to-symbol',
  converterInput: '.converter__input',
};

const selectArray = Array.from(document.querySelectorAll('.cur-select'));
const selectIconArray = Array.from(document.querySelectorAll(DOM.selectIcon));
const [selectFrom, selectTo] = selectArray;
const [iconFrom, iconTo] = selectIconArray;
const converterInputArray = Array.from(document.querySelectorAll(DOM.converterInput));
const [fromConverterInput, toConverterInput] = converterInputArray;

export const variables = {
  selectArray,
  selectIconArray,
  selectFrom,
  selectTo,
  iconFrom,
  iconTo,
  converterInputArray,
  fromConverterInput,
  toConverterInput,
};
const renderDropdown = () => {
  const html = `<option class="cur-option" value="%%value%%">%%code%% - %%name%%</option>`;
  let newHtml;

  CURRENCY_DATA.forEach(cur => {
    newHtml = html.replace('%%code%%', cur.code);
    newHtml = newHtml.replace('%%name%%', cur.name);
    newHtml = newHtml.replace('%%value%%', cur.code);

    // Render select options with objects from data array
    selectArray.forEach(select => {
      select.insertAdjacentHTML('beforeend', newHtml);
    });
  });
};

const renderIcon = type => {
  const html = `<svg><use xlink:href="img/sprite.svg#icon-%%icon%%"></use></svg></figure>`;
  let newHtml = html.replace('%%icon%%', type === 'from' ? selectFrom.value : selectTo.value);

  // Render icon based on current value
  if (type === 'from') {
    iconFrom.innerHTML = '';
    iconFrom.insertAdjacentHTML('beforeend', newHtml);
  } else if (type === 'to') {
    iconTo.innerHTML = '';
    iconTo.insertAdjacentHTML('beforeend', newHtml);
  }
};

const renderSymbol = (state, type) => {
  SYMBOL_DATA.forEach(cur => {
    if (type === 'from') {
      if (state.curFrom === cur.code) {
        document.querySelector(DOM.fromSymbol).textContent = cur.symbol;
      }
    } else if (type === 'to') {
      if (state.curTo === cur.code) {
        document.querySelector(DOM.toSymbol).textContent = cur.symbol;
      }
    }
  });
};
const viewCtrl = (() => ({
  DOM,
  renderDropdown,
  renderIcon,
  renderSymbol,
}))();

export default viewCtrl;
