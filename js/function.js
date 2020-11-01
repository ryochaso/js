'use strict'
// 関数

// console.log('おにぎり');
// console.log('味噌汁');
// console.log('焼鮭');

// function　関数名(仮引数,仮引数){ 定義したい処理処理 }
function morning(drink = 'おしるこ'){ //仮引数、 ='**'でデフォルト値
  console.log('おにぎり');
  console.log('味噌汁');
  console.log('焼鮭');
  console.log(`${drink}`); //テンプレートリテラル(`${**}`)で仮引数
}

morning();

//引数
morning('お茶'); //()に代入したい値をいれる、実引数
//morning('お水');
//morning('カレー');

//returnについて

/* function sum(a,b,c,){
  console.log(a + b + c );
   return a + b + c; //returnが戻り値となる
}

  const total =sum(1,2,3) + sum(3,4,5); //18
  console.log(total);
*/

//関数式

//無名関数

/*const sum = function(a,b,c,){
  return a + b + c;
}; //引数がある場合は ; が必要

const total =sum(1,2,3) + sum(3,4,5);
console.log(total);
*/

//アロー関数
/*const sum = (a,b,c,) => a + b + c;

const total =sum(1,2,3) + sum(3,4,5);
console.log(total);
*/

/*const double =function(a){
  return a * 2
};        アロー関数に書き換えると↓↓↓
*/ 

const double = a => a * 2; //引数がひとつの場合は（）いらない
console.log(double(10));