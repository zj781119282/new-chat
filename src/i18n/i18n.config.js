import $ from 'jquery';

import index_en from './en-US/index';
import index_cn from './zh-CN/index';
import header_en from './en-US/header';
import header_cn from './zh-CN/header';

const i18nConfig = {
  'en-US': {
    index: index_en,
    header: header_en,
  },
  'zh-CN': {
    index: index_cn,
    header: header_cn,
  },
};

function switchLanguage(key) {
  localStorage.setItem('_lang', key);
  location.reload();
};

function showTranslations() {
  const currentLang = localStorage._lang === 'zh-CN' ? 'zh-CN' : 'en-US';
  const i18n = i18nConfig[currentLang];

  $('.current-language').text(currentLang === 'en-US' ? 'EN' : '中文');

  $('.i18n').each((i, item) => {
    let str = '';
    const data = $(item).data('i18n').split('.');
    $(item).text(i18n[data[0]][data[1]]);
  });

  $('#english').click(() => {
    switchLanguage('en-US');
  });
  $('#chinese').click(() => {
    switchLanguage('zh-CN');
  });
}

export { i18nConfig, showTranslations, switchLanguage };
