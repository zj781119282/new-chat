import $ from 'jquery'

import './header.scss'

$(() => {
  const drop = $('header .dropdown');
  const lang = $('header .lang');

  const bannerHei = $('section.banner').height();
  const headerHei = $('header').height();
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const scrollLeft = $(this).scrollLeft();

    // 修正fixed时左右拖动窗口header的定位问题
    $('header').css('left', -scrollLeft);
    // 向下滚动header缩放
    if (scrollTop > bannerHei - headerHei) {
      $('header').addClass('with-bg').height(headerHei * .75).find('.container').addClass('little');
    } else {
      $('header').removeClass('with-bg').height(headerHei).find('.container').removeClass('little');
    }
  });

  lang.hover(() => {
    drop.toggle();
  });
});
