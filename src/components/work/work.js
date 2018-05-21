import $ from 'jquery'

import './work.scss'

import intro1_en from './assets/intro1_en.png'
import intro1_cn from './assets/intro1_cn.png'
import intro2_en from './assets/intro2_en.png'
import intro2_cn from './assets/intro2_cn.png'
import intro3_en from './assets/intro3_en.png'
import intro3_cn from './assets/intro3_cn.png'

$(() => {
  const lang = localStorage.getItem('_lang');
  $('#work .intro1').append(`<img src="${lang === 'zh-CN' ? intro1_cn : intro1_en}"/>`);
  $('#work .intro2').append(`<img src="${lang === 'zh-CN' ? intro2_cn : intro2_en}"/>`);
  $('#work .intro3').append(`<img src="${lang === 'zh-CN' ? intro3_cn : intro3_en}"/>`);
});
