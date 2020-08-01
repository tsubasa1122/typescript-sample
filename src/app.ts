function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
};

const mergedOjb = merge({ name: 'Max' }, { age: 30 });
console.log(mergedOjb.age);

interface Lengthy {
  length: number;
};

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です。';
  }
  return [element, descriptionText];
};

console.log(countAndDescribe(['sports', 'cooking']));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
};

extractAndConvert({ name: 'Max' }, "name");
