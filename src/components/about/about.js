import $ from 'jquery'
import './about.scss'

$(() => {
  const lang = localStorage.getItem('_lang') === 'zh-CN' ? 'cn' : 'en';

  function getPdfUrl(lang, type) {
    const url = 'static/assets/';
    const pdfName = type === 'tech' ? 'tech_white_paper_en.pdf' : `${type}_white_paper_${lang}.pdf`;
console.log(pdfName);
    return url + pdfName;
  }

  $('.open-white-paper').click(function() {
    const url = getPdfUrl(lang, $(this).data('type'));
    window.open(url);
  })
});
