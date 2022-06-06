const obj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!"
};

type FooBarObj = {
  foo: number;
  bar: string;
};

// 部分型関係
type Animal = {
  name: string;
};
type Human = {
  name: string;
  age: number;
}

const me: Human = {
  name: "KaKa",
  age: 25
};

// Animal型にageはないが、nameはあるので部分型関係が成立し、代入できる
const animal: Animal = me;


type AnimlalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
}
type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
}

const humanFamily: HumanFamily = {
  familyName: "KaKaFamily",
  mother: me,
  father: me,
  child: me
}

const animalFamily: AnimlalFamily = humanFamily;

// 型引数の制約
type HasName = {
  name: string;
};
type ExtendHasName = {
  name: string;
  secondName: string;
};

// Parent、ChildはHasNameの部分型である制約
type ExtendFamily<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

// 制約を満たさないとエラー
// type testType = ExtendFamily<string, number>;
// 制約を満たす(ExtendHasNameのプロパティにname: stringを含むため、HasNameはExtendHasNameの部分型)
type testType = ExtendFamily<ExtendHasName, ExtendHasName>;

// オプショナルな型引数
type Family<Parent = Animal, Child = Animal> = {
  mother: Parent;
  father: Parent;
  child: Child;
}

type S = Family<string, string>;
// 型引数を省略
type T = Family;
type U = Family<string>;

