// 正規表現
// ※正規表現に余白を入れない（正しく解釈されなくなる）
const reg = () => {
  const r = /ab+c/

  console.log(r.test("abbbbc"));
}

// reg();

// replace(正規表現にマッチする文字列を置き換え)
const regReplace = () => {
  const str = "Hello, abbbbbbbc world! abbc";
  // 最初にマッチしたもののみ置き換え
  console.log(str.replace(/ab+c/, "foobar"));
  // 全ての要素を置き換え
  // 正規表現において、gフラグは全てにマッチするという意味を持つ
  console.log(str.replace(/ab+c/g,"foobar"));
}

// regReplace();

// matchは、正規表現にマッチするならば文字列の配列、マッチしなければnullを返す
const regMatch = () => {
  const str = "Hello, abbbbbbbc world! abbc";
  // const str = "Hello!";
  // console.log(str.match(/ab+c/));
  // ()で囲うことで、正規表現のキャプチャリンググループを設定できる
  // キャプチャリンググループに一致する部分の情報も戻り値の配列に持つ
  console.log(str.match(/a(b+)c/));
  // 名前付きキャプチャリンググループ
  // (チャプタリンググループを使う機会があるとしたら可読性的にこちらかな)
  console.log(str.match(/a(?<worldName>b+)c/));
}

regMatch();
