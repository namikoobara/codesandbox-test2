/**
 * const let等の変数宣言
 */

// var val1="var変数";
// console.log(val1);
// //var変数は上書き可能
// val1="var変数は上書き";
// console.log(val1);
// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

//

// const val3="const変数";
// console.log(val3);

// // val3="const overwritten";

// const val3="const redeclared";

// const val4={
//   name:"じゃけえ",
//   age:26,
// };
// val4.name ="jak";
// console.log(val4);

// const val5=['dog','cat'];
// val5[0]='bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "じゃけえ";
//  const age = 28;
//  const message1="私の名前は"+ name+ "です。年齢は"+age+ "です。";
//  console.log(message1);

// function func1(str){
// return str;
// }
// console.log(func1("func1です"));

// const func2 = (str) =>{
//   return str;
// }
// console.log(func2("func2desu"));

// const func3 =(num1, num2) => num1 + num2

// console.log(func3(10,20));

// const myProfile = {
//   name:"じゃけえ",
//   age:28,
// };

// const {name,age} = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["じゃけえ", 28];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

const [name, age] = myProfile;
const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message4);
