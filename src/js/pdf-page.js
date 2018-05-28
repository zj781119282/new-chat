import getQuery from './../utils/getQuery'

const type = getQuery('type');
const lang = localStorage.getItem('_lang');

let url = 'static/assets/';
let pdfName = '';

if (type === 'tech') {
  pdfName = lang === 'zh-CN' ? 'tech_white_paper_cn.pdf' : 'tech_white_paper_en.pdf';
}

const pageTitle = pdfName;
document.querySelector('title').text = pageTitle;

url += pdfName;

const default_scle = 1;

pdfjsLib.GlobalWorkerOptions.workerSrc = 'static/pdfjs/core/pdf.worker.min.js';

const container = document.getElementById('pageContainer');

pdfjsLib.getDocument(url).then(function (doc) {
  let promise = Promise.resolve();

  for (let i = 1; i <= doc.numPages; i++) {
    promise = promise.then(function(pageNum) {
      return doc.getPage(pageNum).then((pdfPage) => {
        const pdfPageView = new pdfjsViewer.PDFPageView({
          container: container,
          id: pageNum,
          scale: default_scle,
          defaultViewport: pdfPage.getViewport(default_scle),
          annotationLayerFactory: new pdfjsViewer.DefaultAnnotationLayerFactory(),
          renderInteractiveForms: true,
        });
        pdfPageView.setPdfPage(pdfPage);
        return pdfPageView.draw();
      });
    }.bind(null, i));
  }
});
