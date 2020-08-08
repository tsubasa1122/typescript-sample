function Logger() {
  return function (constructor: Function) {
    console.log("ログ出力中...");
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  }
}
// @Logger()
@WithTemplate('<h1>Personオブジェクト</h1>', "app")
class Person {
  name = 'Max';
  constructor() {
    console.log("Personオブジェクトを作成中....");
  }
}

const persons = new Person();

console.log(persons);
