import { Invoice } from './classes/Invoice.js'; // .js としないとだめ！！
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Paymemt.js';
// docOne, docTwo が HasFormatter インターフェースを実装した Object であると規定する
// 少なくとも「この属性はも持っている必要がある変数」を定義するときなどに有効？
let docOne;
let docTwo;
// hasFormatter を実装しているclassならこの変数に入れられる
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'unchi', 1000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('mario', 'work on the MM site', 105);
const invTwo = new Invoice('Luigi', 'work on the LL site', 205);
// classの配列：stging などと同じように作成可能
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'aaa'
    console.log(inv.client, inv.amount, inv.format());
});
// // null でないとわかっている場合 ! を末尾につけるとエラーが出ない
// const anchor = document.querySelector('a')!
// // nullの可能性があるとき、コンパイルエラーになる
// // if (anchor) {
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// const form = document.querySelector('form')!;
// class 指定で取得すると、typescript 内でフォーム型であると判定できない
// 命じてkに宣言する場合は 型宣言する
// form型のエレメントであるという宣言
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
// selector 型のエレメントであるという宣言
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // フォームデフォルト動作（フォームのの内容送信）をしない
    // console.log(type, tofrom, details, amount)
    console.log(type.value, tofrom.value, details.value, 
    // amount.value, // string型として受け取る
    amount.valueAsNumber // 数値型として受け取る
    );
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generic
// T は name: に文字列属性を持つ object であるとする
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    /// ... はobject や list のカッコを外す(スプレッド構文)
    /// 新しい obj に uid を追加したものを返す
    return Object.assign(Object.assign({}, obj), { uid });
};
console.log(addUID({ name: 'hoge', aaa: 'bbb' }));
// console.log(addUID('hoge'))
// Enum
// 各変数は数値となる
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc3 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: 'hoge'
};
console.log(doc3);
const doc4 = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data: ['hote', 'fuga']
};
console.log(doc4);
// tuples
let arr = ['hoge', 25, true];
arr[0] = false;
let tup = ['aaa', 23, true];
tup[0] = 'ry';
//tup[0] = false
// let student: [string, number]
// student = ['aaaaaa', 238928923]
