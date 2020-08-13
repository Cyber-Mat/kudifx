import CURRENCY_DATA from './currency.data';
import SYMBOL_DATA from './symbols.data';

const DOM = {
  select: '.cur-select',
  converterDate: '.converter__date',
  selectIcon: '.cur-img',
  fromSymbol: '.from-symbol',
  toSymbol: '.to-symbol',
  converterInput: '.converter__input',
  dateSpan: '.date',
  ratesBody: '.rates__body',
  ratesBaseSelect: '.rates__base',
  hDate: '.hdate',
  hTime: '.htime',
  navList: '.nav__list2',
  top: '.top',
  mid: '.mid',
  low: '.low',
};

const selectArray = Array.from(document.querySelectorAll(DOM.select));
const selectIconArray = Array.from(document.querySelectorAll(DOM.selectIcon));
const [selectFrom, selectTo] = selectArray;
const [iconFrom, iconTo] = selectIconArray;
const converterInputArray = Array.from(document.querySelectorAll(DOM.converterInput));
const [fromConverterInput, toConverterInput] = converterInputArray;
const converterDate = document.querySelector(DOM.dateSpan);
const ratesBaseSelect = document.querySelector(DOM.ratesBaseSelect);
const hDate = document.querySelector(DOM.hDate);
const hTime = document.querySelector(DOM.hTime);
const navList = document.querySelector(DOM.navList);
const top = document.querySelector('.top');
const mid = document.querySelector('.mid');
const low = document.querySelector('.low');

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
  converterDate,
  ratesBaseSelect,
  hDate,
  hTime,
  navList,
  top,
  mid,
  low,
};
const renderDropdown = type => {
  const html = `<option class="cur-option" value="%%value%%">%%code%% - %%name%%</option>`;
  let newHtml;

  CURRENCY_DATA.forEach(cur => {
    newHtml = html.replace('%%code%%', cur.code);
    newHtml = newHtml.replace('%%name%%', cur.name);
    newHtml = newHtml.replace('%%value%%', cur.code);

    if (type === 'main') {
      // Render select options with objects from data array
      selectArray.forEach(select => {
        select.insertAdjacentHTML('beforeend', newHtml);
      });
    } else if (type === 'base') {
      document.querySelector(DOM.ratesBaseSelect).insertAdjacentHTML('beforeend', newHtml);
    }
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

const setTime = () => {
  const curDate = new Date();
  const date = curDate.toLocaleDateString().split('/').join('-');
  const time = curDate.toTimeString().split(' ')[0];
  const tz = curDate.toTimeString().split(' ')[1];
  converterDate.textContent = `${date} ${time} ${tz}`;
};

const renderRates = apiData => {
  document.querySelector(DOM.ratesBody).innerHTML = '';

  // Iterate through currency list in multiples of 10(max allowed by page layout per column)
  for (let s = 0; s < CURRENCY_DATA.length; s += 10) {
    const htmlArr = [];
    const html1 = `<span class="code">%%{code}%%</span>
            <span class="name">%%{name}%%</span>
            <span class="value %%{color}%%">%%{value}%%</span>`;

    for (let i = s; i < s + 10; i++) {
      if (i === CURRENCY_DATA.length) break;

      // Make individual currency markup
      let newHtml1 = html1;
      newHtml1 = newHtml1.replace('%%{code}%%', CURRENCY_DATA[i].code);
      //newHtml1 = newHtml1.replace('%%{name}%%', CURRENCY_DATA[i].name <= 15 ? CURRENCY_DATA[i].name : `${CURRENCY_DATA[i].name.slice(0, 14)}...`);
      newHtml1 = newHtml1.replace('%%{name}%%', CURRENCY_DATA[i].name);
      newHtml1 = newHtml1.replace(
        '%%{value}%%',
        apiData[CURRENCY_DATA[i].code] && !isNaN(apiData[CURRENCY_DATA[i].code]) ? apiData[CURRENCY_DATA[i].code] : '-'
      );
      newHtml1 = newHtml1.replace('%%{color}%%', apiData[CURRENCY_DATA[i].code] > 1 ? 'red' : 'green');

      // Store individual currency markup in array
      htmlArr.push(newHtml1);
    }

    // Create column of 10 currencies
    const html2 = `<div class="rates__col rates__col-1">
         <!-- <div class="rates__col-header rates__col-1-header">
            <span class="code">Code</span>
            <span class="name">Name</span>
            <span class="value">Value</span>
          </div> -->
          <div class="rates__col-body rates__col-1-body">
          ${htmlArr.join('')}
           </div>
        </div>`;

    // Render column of 10 currencies
    document.querySelector(DOM.ratesBody).insertAdjacentHTML('beforeend', html2);
  }
};

const setHeaderDateAndTime = () => {
  const headerDate = new Date();
  const day = headerDate.toDateString().split(' ')[0]; //1
  const date = headerDate.toLocaleDateString().split('/').join('.');
  const time = headerDate.toTimeString().split(' ')[0];
  const tz = headerDate.toTimeString().split(' ')[1];
  hDate.textContent = `${day}, ${date}`;
  hTime.textContent = `${time} ${tz}`;
};

const viewCtrl = (() => ({
  DOM,
  renderDropdown,
  renderIcon,
  renderSymbol,
  setTime,
  renderRates,
  setHeaderDateAndTime,
}))();

export default viewCtrl;
