// import { createInterface } from 'readline';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// 文字列
// rl.question('文字列を入力してください', (line) => {
//   // 文字列が入力されると実行される
//   console.log(`${line}が入力されました`);
//   rl.close();
// })

// 数値
// rl.question('数値を入力してください', (line) => {
//   // lineを文字列から数値に変換
//   const num = Number(line);
//   console.log(num + 1000);
//   rl.close();
// });

// 入力された数値が0以上100未満であることを判定
// rl.question('数値を入力してください', (line) => {
//   const num = Number(line);

//   if (0 <= num && num < 100) {
//     console.log(`${num}は0以上100未満です`);
//   } else {
//     console.log(`${num}は0以上100未満ではありません`);
//   }

//   rl.close();
// });

// 環境変数SECRETを取得
// 左側のオペランドがnullまたはundefind
// const secret = process.env.SECRET ?? "default";
// 左側のオペランドがfalsy
const secret = process.env.SECRET || "default";
console.log(`secretは${secret}です`);

