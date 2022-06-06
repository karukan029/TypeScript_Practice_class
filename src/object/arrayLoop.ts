const arr1 = [1, 10, 100];

// for of文は、要素を出力する
for (const elm of arr1) {
  console.log(elm);
};

// for in文はオブジェクトのプロパティを一覧出力したい場合に使える
type Obj1 = {
  name: string;
  secondName: string;
  lastName: string;
}

const obj1: Obj1 = {
  name: "KaKa",
  secondName: "karukan029",
  lastName: "karukan013"
}

// javascriptなら不要
// ユーザー定義型ガードで、オブジェクトのプロパティ名のみに対象を絞り込み
function isProperty(value: string): value is (keyof Obj1){
  return value === 'name' || value === 'secondName' || value === 'lastName';
}

for (const property in obj1) {
  // console.log(property);
  if (isProperty(property)) {
    console.log(`${property}: ${obj1[property]}`);
  }
}
