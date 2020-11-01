'use strict';
//演算子

const number = 100

console.log(number > 80); // true ~より大きい
console.log(number < 80); // 〜より小さい
console.log(number >= 80); // 〜以上
console.log(number <= 80); // 〜以下
console.log(number === 80); // 〜等しい
console.log(number !== 80); // 〜異なる

//false <- 0,null,undefined,'',false
//true <- それ以外

console.log(Boolean(0)); //(Boolean(**))で真偽値を調べれる
console.log(Boolean('hello'));

//条件式 if(条件式){trueだった時の処理}

const score = 50

if(score >= 80 ){ // score が80点以上なら'good'と表示される
  console.log('good!!');
} else if(score >= 60 ){ //60点以上なら'nice'
  console.log('nice');
} else {  //それ以外なら
  console.log('お米食え！！');
} //命令がブロック{}終わる場合は;つけない

// if文の短縮 true or false
score >= 80 ? console.log('good!!') : console.log('お米食え！！');