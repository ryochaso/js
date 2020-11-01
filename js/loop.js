'use strict'

//繰り返し処理 for文

for( let i = 1; i <= 10; i++){
   // iの値が10になるまで処理を続ける
  //console.log('味噌汁');
  //console.log('味噌汁' + i);
  console.log(`味噌汁 ${i}`); //(`文字列 ${値}`)で値の埋め込み
}

// while文 ~の間

let hp = 100 
// hpが0になるまで処理が続く
while(hp > 0){
  console.log(`${hp} HP left!`); //hpを表示
  hp -=15; //式を忘れると無限ループになる
}

// 現在の値を確認できる
do {
  console.log(`${hp} HP left!`); //hpを表示
  hp -=15; 
}　while(hp > 0)

//continue,break文

for( let i = 1; i <= 10; i++){
  //if( i ===4){
    //continue; //指定した条件式をスキップ
    if(i % 3 === 0){ //3の倍数がスキップ %は倍数を表現する時に使う
      continue;
    }
  console.log( i ); 
}

for( let i = 1; i <= 10; i++){
  if(i === 4){
    break; //指定したところで処理が止まる
  }
  console.log( i );
}