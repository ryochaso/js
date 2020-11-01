'use strict'
//論理演算子

const score = 60;
const name = 'おにぎり';

/*
&& なおかつ  (and)
|| もしくは  (or)
! 〜ではない  (not)
*/ 

if(score >= 50 && name ==='おにぎり'){
  console.log('good job!');
}

//switch文 if文で ===　全て書ける場合の処理

const signal = 'blue'

switch (signal) {
  case 'red':
    console.log('stop!');
    break;
  case 'yellow':
    console.log('caution!');
    break;
  case 'blue':
  case 'green': // blue or green で動く
    console.log('go!');
    break;
  default : //指定した値以外の場合の処理
  console.log('wrong signal');

}