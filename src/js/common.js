/**
 * Created by Administrator on 2018/4/12 0012.
 */
import $ from 'jquery'

import { showTranslations } from 'i18n/i18n.config'

import 'normalize.css'
import 'css/global.scss'
import 'css/common.scss'

import './../components/header/header'
import './../components/footer/footer'

$(() => {
  showTranslations();
});
