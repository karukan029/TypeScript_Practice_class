// タプル型
// []内に要素の方を指定、指定した数だけ要素を持てる
type User = [string, number];

// 2個まで(3個指定するとエラー)
const user :User = ["aaa", 0];

// 要素の後に?をつけると、オプショナル(任意)になる
type OptionalUser = [string, number, string?];

const optionalUser: OptionalUser = ["aaa", 0];
