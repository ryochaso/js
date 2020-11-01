'use script'; //エラーチェックの構文

    console.log('hello world from main JS') ; //;は命令の最後にいれる
    console.log('hello\n world from\t JS');// \n改行 \t タブ

    console.log('hello' + 'world')

    console.log(10 + 5);
    console.log(10 - 5);
    console.log(10 * 5);
    console.log(10 / 5) ;
    console.log(10 % 3); //余りの計算
    console.log(10 ** 3); //n乗計算
    console.log((10 - 2) * 10) //80

//定数

const price = 150; //定数の宣言 再代入不可

console.log(price * 140);

//変数

let value = 150 //変数の宣言

console.log(value * 10);

value = 100 //再代入の宣言

console.log(value * 10);

/*命名規則
  ・英数字、$, _のみ、数値から始められない
  ・大文字、小文字は区別される
  ・予約語は使えない
*/

//自己代入

let num = 100;

console.log(num += 100); // price = price + 100;

console.log(num++); // price +-= 1;

console.log(num) //201

//データの型

console.log(typeof'味噌汁'); //(typeof **)でデータの型の確認
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

