// readonly属性はTypeScriptのみ
// コンパイル後は、通常の配列となる
const arrReadonly: readonly number[] = [1, 10, 100];

// readonlyなのでエラー
// arr.push(1);
// includes:引数の要素を配列が含む：true、含まない：falseを返す
console.log(arrReadonly.includes(2));
console.log(arrReadonly.indexOf(100));
