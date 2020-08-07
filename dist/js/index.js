"use strict";

var CURRENCY_DATA = [{
  code: 'AED',
  name: 'United Arab Emirates Dirham'
}, {
  code: 'AFN',
  name: '	Afghan Afghani'
}, {
  code: 'ALL',
  name: 'Albanian Lek'
}, {
  code: 'AMD',
  name: 'Armenian Dram'
}, {
  code: 'ANG',
  name: 'Netherlands Antillean Guilder'
}, {
  code: 'AOA',
  name: 'Angolan Kwanza'
}, {
  code: 'ARS',
  name: 'Argentine Peso'
}, {
  code: 'AUD',
  name: 'Australian Dollar'
}, {
  code: 'AWG',
  name: 'Aruban Florin'
}, {
  code: 'AZN',
  name: 'Azerbaijani Manat'
}, {
  code: 'BAM',
  name: 'Bosnia-Herzegovina Convertible Mark'
}, {
  code: 'BBD',
  name: 'Barbadian Dollar'
}, {
  code: 'BDT',
  name: 'Bangladeshi Taka'
}, {
  code: 'BGN',
  name: 'Bulgarian Lev'
}, {
  code: 'BHD',
  name: 'Bahraini Dinar'
}, {
  code: 'BIF',
  name: 'Burundian Franc'
}, {
  code: 'BMD',
  name: 'Bermudan Dollar'
}, {
  code: 'BND',
  name: 'Brunei Dollar'
}, {
  code: 'BOB',
  name: 'Bolivian Boliviano'
}, {
  code: 'BRL',
  name: 'Brazilian Real'
}, {
  code: 'BSD',
  name: 'Bahamian Dollar'
}, {
  code: 'BTC',
  name: 'Bitcoin'
}, {
  code: 'BTN',
  name: 'Bhutanese Ngultrum'
}, {
  code: 'BWP',
  name: 'Botswanan Pula'
}, {
  code: 'BYR',
  name: 'Belarusian Ruble'
}, {
  code: 'BYN',
  name: 'New Belarusian Ruble'
}, {
  code: 'BZD',
  name: 'Belize Dollar'
}, {
  code: 'CAD',
  name: 'Canadian Dollar'
}, {
  code: 'CDF',
  name: 'Congolese Franc'
}, {
  code: 'CHF',
  name: 'Swiss Franc'
}, {
  code: 'CLF',
  name: 'Chilean Unit of Account (UF)'
}, {
  code: 'CLP',
  name: 'Chilean Peso'
}, {
  code: 'CNY',
  name: 'Chinese Yuan'
}, {
  code: 'COP',
  name: 'Colombian Peso'
}, {
  code: 'CRC',
  name: 'Costa Rican Colón'
}, {
  code: 'CUC',
  name: 'Cuban Convertible Peso'
}, {
  code: 'CUP',
  name: 'Cuban Peso'
}, {
  code: 'CVE',
  name: 'Cape Verdean Escudo'
}, {
  code: 'CZK',
  name: 'Czech Republic Koruna'
}, {
  code: 'DJF',
  name: 'Djiboutian Franc'
}, {
  code: 'DKK',
  name: 'Danish Krone'
}, {
  code: 'DOP',
  name: 'Dominican Peso'
}, {
  code: 'DZD',
  name: 'Algerian Dinar'
}, {
  code: 'EGP',
  name: 'Egyptian Pound'
}, {
  code: 'ERN',
  name: 'Eritrean Nakfa'
}, {
  code: 'ETB',
  name: 'Ethiopian Birr'
}, {
  code: 'EUR',
  name: 'Euro'
}, {
  code: 'FJD',
  name: 'Fijian Dollar'
}, {
  code: 'FKP',
  name: 'Falkland Islands Pound'
}, {
  code: 'GBP',
  name: 'British Pound Sterling'
}, {
  code: 'GEL',
  name: 'Georgian Lari'
}, {
  code: 'GGP',
  name: 'Guernsey Pound'
}, {
  code: 'GHS',
  name: 'Ghanaian Cedi'
}, {
  code: 'GIP',
  name: 'Gibraltar Pound'
}, {
  code: 'GMD',
  name: 'Gambian Dalasi'
}, {
  code: 'GNF',
  name: 'Guinean Franc'
}, {
  code: 'GTQ',
  name: 'Guatemalan Quetzal'
}, {
  code: 'GYD',
  name: 'Guyanaese Dollar'
}, {
  code: 'HKD',
  name: 'Hong Kong Dollar'
}, {
  code: 'HNL',
  name: 'Honduran Lempira'
}, {
  code: 'HRK',
  name: 'Croatian Kuna'
}, {
  code: 'HTG',
  name: 'Haitian Gourde'
}, {
  code: 'HUF',
  name: 'Hungarian Forint'
}, {
  code: 'IDR',
  name: 'Indonesian Rupiah'
}, {
  code: 'ILS',
  name: 'Israeli New Sheqel'
}, {
  code: 'IMP',
  name: 'Manx pound'
}, {
  code: 'INR',
  name: 'Indian Rupee'
}, {
  code: 'IQD',
  name: 'Iraqi Dinar'
}, {
  code: 'IRR',
  name: 'Iranian Rial'
}, {
  code: 'ISK',
  name: 'Icelandic Króna'
}, {
  code: 'JEP',
  name: 'Jersey Pound'
}, {
  code: 'JMD',
  name: 'Jamaican Dollar'
}, {
  code: 'JOD',
  name: 'Jordanian Dinar'
}, {
  code: 'JPY',
  name: 'Japanese Yen'
}, {
  code: 'KES',
  name: 'Kenyan Shilling'
}, {
  code: 'KGS',
  name: 'Kyrgystani Som'
}, {
  code: 'KHR',
  name: 'Cambodian Riel'
}, {
  code: 'KMF',
  name: 'Comorian Franc'
}, {
  code: 'KPW',
  name: 'North Korean Won'
}, {
  code: 'KRW',
  name: 'South Korean Won'
}, {
  code: 'KWD',
  name: 'Kuwaiti Dinar'
}, {
  code: 'KYD',
  name: 'Cayman Islands Dollar'
}, {
  code: 'KZT',
  name: 'Kazakhstani Tenge'
}, {
  code: 'LAK',
  name: 'Laotian Kip'
}, {
  code: 'LBP',
  name: 'Lebanese Pound'
}, {
  code: 'LKR',
  name: 'Sri Lankan Rupee'
}, {
  code: 'LRD',
  name: 'Liberian Dollar'
}, {
  code: 'LSL',
  name: 'Lesotho Loti'
}, {
  code: 'LTL',
  name: 'Lithuanian Litas'
}, {
  code: 'LVL',
  name: 'Latvian Lats'
}, {
  code: 'LYD',
  name: 'Libyan Dinar'
}, {
  code: 'MAD',
  name: 'Moroccan Dirham'
}, {
  code: 'MDL',
  name: 'Moldovan Leu'
}, {
  code: 'MGA',
  name: 'Malagasy Ariary'
}, {
  code: 'MKD',
  name: 'Macedonian Denar'
}, {
  code: 'MMK',
  name: 'Myanma Kyat'
}, {
  code: 'MNT',
  name: 'Mongolian Tugrik'
}, {
  code: 'MOP',
  name: 'Macanese Pataca'
}, {
  code: 'MRO',
  name: 'Mauritanian Ouguiya'
}, {
  code: 'MUR',
  name: 'Mauritian Rupee'
}, {
  code: 'MVR',
  name: 'Maldivian Rufiyaa'
}, {
  code: 'MWK',
  name: 'Malawian Kwacha'
}, {
  code: 'MXN',
  name: 'Mexican Peso'
}, {
  code: 'MYR',
  name: 'Malaysian Ringgit'
}, {
  code: 'MZN',
  name: 'Mozambican Metical'
}, {
  code: 'NAD',
  name: 'Namibian Dollar'
}, {
  code: 'NGN',
  name: 'Nigerian Naira'
}, {
  code: 'NIO',
  name: 'Nicaraguan Córdoba'
}, {
  code: 'NOK',
  name: 'Norwegian Krone'
}, {
  code: 'NPR',
  name: 'Nepalese Rupee'
}, {
  code: 'NZD',
  name: 'New Zealand Dollar'
}, {
  code: 'OMR',
  name: 'Omani Rial'
}, {
  code: 'PAB',
  name: 'Panamanian Balboa'
}, {
  code: 'PEN',
  name: 'Peruvian Nuevo Sol'
}, {
  code: 'PGK',
  name: 'Papua New Guinean Kina'
}, {
  code: 'PHP',
  name: 'Philippine Peso'
}, {
  code: 'PKR',
  name: 'Pakistani Rupee'
}, {
  code: 'PLN',
  name: 'Polish Zloty'
}, {
  code: 'PYG',
  name: 'Paraguayan Guarani'
}, {
  code: 'QAR',
  name: 'Qatari Rial'
}, {
  code: 'RON',
  name: 'Romanian Leu'
}, {
  code: 'RSD',
  name: 'Serbian Dinar'
}, {
  code: 'RUB',
  name: 'Russian Ruble'
}, {
  code: 'RWF',
  name: 'Rwandan Franc'
}, {
  code: 'SAR',
  name: 'Saudi Riyal'
}, {
  code: 'SBD',
  name: 'Solomon Islands Dollar'
}, {
  code: 'SCR',
  name: 'Seychellois Rupee'
}, {
  code: 'SDG',
  name: 'Sudanese Pound'
}, {
  code: 'SEK',
  name: 'Swedish Krona'
}, {
  code: 'SGD',
  name: 'Singapore Dollar'
}, {
  code: 'SHP',
  name: 'Saint Helena Pound'
}, {
  code: 'SLL',
  name: 'Sierra Leonean Leone'
}, {
  code: 'SOS',
  name: 'Somali Shilling'
}, {
  code: 'SRD',
  name: 'Surinamese Dollar'
}, {
  code: 'STD',
  name: 'São Tomé and Príncipe Dobra'
}, {
  code: 'SVC',
  name: 'Salvadoran Colón'
}, {
  code: 'SYP',
  name: 'Syrian Pound'
}, {
  code: 'SZL',
  name: 'Swazi Lilangeni'
}, {
  code: 'THB',
  name: 'Thai Baht'
}, {
  code: 'TJS',
  name: 'Tajikistani Somoni'
}, {
  code: 'TMT',
  name: 'Turkmenistani Manat'
}, {
  code: 'TND',
  name: 'Tunisian Dinar'
}, {
  code: 'TOP',
  name: 'Tongan Paʻanga'
}, {
  code: 'TRY',
  name: 'Turkish Lira'
}, {
  code: 'TTD',
  name: 'Trinidad and Tobago Dollar'
}, {
  code: 'TWD',
  name: 'New Taiwan Dollar'
}, {
  code: 'TZS',
  name: 'Tanzanian Shilling'
}, {
  code: 'UAH',
  name: 'Ukrainian Hryvnia'
}, {
  code: 'UGX',
  name: 'Ugandan Shilling'
}, {
  code: 'USD',
  name: 'United States Dollar'
}, {
  code: 'UYU',
  name: 'Uruguayan Peso'
}, {
  code: 'UZS',
  name: 'Uzbekistan Som'
}, {
  code: 'VEF',
  name: 'Venezuelan Bolívar Fuerte'
}, {
  code: 'VND',
  name: 'Vietnamese Dong'
}, {
  code: 'VUV',
  name: 'Vanuatu Vatu'
}, {
  code: 'WST',
  name: 'Samoan Tala'
}, {
  code: 'XAF',
  name: 'CFA Franc BEAC'
}, {
  code: 'XAG',
  name: 'Silver (troy ounce)'
}, {
  code: 'XAU',
  name: 'Gold (troy ounce)'
}, {
  code: 'XCD',
  name: 'East Caribbean Dollar'
}, {
  code: 'XDR',
  name: 'Special Drawing Rights'
}, {
  code: 'XOF',
  name: 'CFA Franc BCEAO'
}, {
  code: 'XPF',
  name: 'CFP Franc'
}, {
  code: 'YER',
  name: 'Yemeni Rial'
}, {
  code: 'ZAR',
  name: 'South African Rand'
}, {
  code: 'ZMK',
  name: 'Zambian Kwacha (pre-2013)'
}, {
  code: 'ZMW',
  name: 'Zambian Kwacha'
}, {
  code: 'ZWL',
  name: 'Zimbabwean Dollar;'
}];
window.addEventListener('load', function () {
  var selectArray = Array.from(document.querySelectorAll('.cur__select'));
  var html = "<option class=\"cur-option to__content-option\" value=\"usd\">%%code%% - %%name%%</option>";
  var newHtml;
  CURRENCY_DATA.forEach(function (cur) {
    newHtml = html.replace('%%code%%', cur.code);
    newHtml = newHtml.replace('%%name%%', cur.name);
  });
  selectArray.forEach(function (select) {
    select.innerHTML('beforeend', newHtml);
  });
});
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