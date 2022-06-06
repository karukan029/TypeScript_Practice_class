const objectCsv = () => {
  type User = {
    name: string;
    age: number;
    premiumUser: boolean;
  }

  const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

  // ここにコードを足す
  // const splitCommaData = data.split(",");
  // macのバックスラッシュはoption+¥
  const splitCommaData = data.split("\n");
  console.log(splitCommaData);

  const users: User[] = [];

  for (const elm of splitCommaData) {
    if (elm !== "") {
      const [name, age, premiumUser] = elm.split(",");

      const numAge = Number(age);
      const booleanPremiumUser = premiumUser === "1" ? true : false; 

      users.push({name, age: numAge, premiumUser: booleanPremiumUser});
    }
  };


  for (const user of users) {
    if (user.premiumUser) {
      console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    } else {
      console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
    }
  }
}

objectCsv();
