/**Userだと命名が被るため、UserClassとしている*/
class UserClass {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前は空にできません！");
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const uhyo = new UserClass("uhyo", 26);
console.log(uhyo.getMessage("こんにちは"));
