//配列の分割代入
const splitArr = [1, 2, 4, 8, 16, 32];

const [first, second, third] = splitArr;

console.log(first);
console.log(second);
console.log(third);

// タプル型の分割代入(ReactのuseState)
const splitTuple: [string, number] = ["KaKa", 25];

const [myname, age] = splitTuple;

console.log("myname", myname);
console.log("age", age);

// restパターン
// オブジェクトの場合、分割代入された残りのプロパティを全て持つ新たなオブジェクトが代入される
const splitRestObj = () => {
  const obj = {
    name: "KaKa",
    age: 25,
    type: "origin",
    length: 184,
    weight: 97
  };

  const {
    name,
    type,
    ...restObj
  } = obj;

  console.log("name", name);
  console.log("type", type);
  console.log("restObj", restObj);
};

splitRestObj();

// 配列の場合、指定した要素以降の全ての要素を含む配列を代入する
const splitRestArr = () => {
  const arr = [1, 2, 4, 8, 16, 32];

  const [first, second, third, ...rest] = arr;
  console.log(rest);
};

splitRestArr();