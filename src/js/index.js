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
  } = variables;

  // FROM DROPDOWN EVENT LISTENER
  selectFrom.addEventListener('change', () => {
    // Render Icons
    viewCtrl.renderIcon('from');
    // Render currency symbol
    state.curFrom = selectFrom.value;
    viewCtrl.renderSymbol(state, 'from');
  });

  // TO DROPDOWN EVENT LISTENER
  selectTo.addEventListener('change', () => {
    // Render Icons
    viewCtrl.renderIcon('to');
    // Render currency symbol
    state.curTo = selectTo.value;
    viewCtrl.renderSymbol(state, 'to');
  });

  // WINDOW EVENT LISTENER
  window.addEventListener('load', () => {
    viewCtrl.renderDropdown();

    modelCtrl.getRates(state);
  });

  ////////////////////////////////////
  fromConverterInput.addEventListener('input', e => {
    state.valueFrom = parseInt(e.target.value);
    const value = modelCtrl.calculateValue(state, 'from');
    toConverterInput.value = value;
  });

  toConverterInput.addEventListener('input', e => {
    state.valueTo = parseInt(e.target.value);
    const value = modelCtrl.calculateValue(state, 'to');
    fromConverterInput.value = value;
  });
})(viewCtrl, modelCtrl);

/**
 * AED: 4.364448
AFN: 90.907786
ALL: 123.578814
AMD: 576.91846
ANG: 2.124849
AOA: 688.750225
ARS: 86.217117
AUD: 1.651802
AWG: 2.139084
AZN: 2.020686
BAM: 1.956445
BBD: 2.390151
BDT: 100.377067
BGN: 1.953825
BHD: 0.447933
BIF: 2282.236046
BMD: 1.188248
BND: 1.621423
BOB: 8.173767
BRL: 6.287497
BSD: 1.183772
BTC: 0.000102
BTN: 88.582364
BWP: 13.780628
BYN: 2.887507
BYR: 23289.665211
BZD: 2.386049
CAD: 1.57674
CDF: 2363.425986
CHF: 1.078466
CLF: 0.033477
CLP: 923.746455
CNY: 8.249534
COP: 4486.231174
CRC: 696.843003
CUC: 1.188248
CUP: 31.488578
CVE: 110.298714
CZK: 26.090419
DJF: 210.73796
DKK: 7.450376
DOP: 69.130132
DZD: 152.150337
EGP: 18.9888
ERN: 17.823936
ETB: 41.711351
EUR: 1
FJD: 2.525622
FKP: 0.902671
GBP: 0.902825
GEL: 3.665788
GGP: 0.902671
GHS: 6.83609
GIP: 0.902671
GMD: 61.634395
GNF: 11417.885472
GTQ: 9.126843
GYD: 247.657782
HKD: 9.20922
HNL: 29.24794
HRK: 7.467089
HTG: 131.556425
HUF: 345.26332
IDR: 17301.488281
ILS: 4.052687
IMP: 0.902671
INR: 88.913644
IQD: 1413.17387
IRR: 50031.191474
ISK: 160.1781
JEP: 0.902671
JMD: 175.063506
JOD: 0.842509
JPY: 125.353655
KES: 128.330928
KGS: 91.378541
KHR: 4867.028723
KMF: 499.028592
KPW: 1069.491286
KRW: 1406.850066
KWD: 0.362986
KYD: 0.98651
KZT: 495.845742
LAK: 10737.86296
LBP: 1790.062204
LKR: 219.587821
LRD: 236.847573
LSL: 20.444864
LTL: 3.508588
LVL: 0.718759
LYD: 1.626725
MAD: 10.991352
MDL: 19.650272
MGA: 4557.441468
MKD: 61.634877
MMK: 1605.759321
MNT: 3383.086268
MOP: 9.449568
MRO: 424.204748
MUR: 47.233062
MVR: 18.348064
MWK: 878.757924
MXN: 26.568759
MYR: 4.974603
MZN: 84.35967
NAD: 20.433635
NGN: 457.522759
NIO: 41.212291
NOK: 10.628482
NPR: 141.729318
NZD: 1.790744
OMR: 0.457493
PAB: 1.183782
PEN: 4.206057
PGK: 4.165173
PHP: 58.271248
PKR: 199.166254
PLN: 4.404064
PYG: 8218.449906
QAR: 4.326114
RON: 4.833911
RSD: 117.601225
RUB: 86.487362
RWF: 1135.497133
SAR: 4.457138
SBD: 9.782471
SCR: 21.188599
SDG: 65.705246
SEK: 10.283766
SGD: 1.62689
SHP: 0.902671
SLL: 11591.361425
SOS: 693.342125
SRD: 8.861943
STD: 26016.893333
SVC: 10.358253
SYP: 608.453576
SZL: 20.427216
THB: 36.918813
TJS: 12.207537
TMT: 4.170751
TND: 3.236732
TOP: 2.704632
TRY: 8.409824
TTD: 8.005714
TWD: 34.870926
TZS: 2762.676824
UAH: 32.758313
UGX: 4364.470781
USD: 1.188248
UYU: 50.185185
UZS: 12086.105214
VEF: 11.867629
VND: 27536.464367
VUV: 134.555831
WST: 3.112608
XAF: 656.157573
XAG: 0.042926
XAU: 0.000579
XCD: 3.211301
XDR: 0.841064
XOF: 656.163099
XPF: 121.141723
YER: 297.47829
ZAR: 20.60933
ZMK: 10695.659434
ZMW: 21.633095
ZWL: 382.616156
 */
