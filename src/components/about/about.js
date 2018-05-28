import $ from 'jquery'
import './about.scss'

$(() => {
  const lang = localStorage.getItem('_lang');

  function getPdfUrl(type) {
    let url = 'static/assets/';
    let pdfName = '';

    if (type === 'tech') {
      pdfName = lang === 'zh-CN' ? 'tech_white_paper_cn.pdf' : 'tech_white_paper_en.pdf';
    }

    return url + pdfName;
  }
  
  $('.tech-paper').click(() => {
    const url = getPdfUrl('tech');
    window.open(url);
  })
});
