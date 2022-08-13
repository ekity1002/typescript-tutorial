import { Invoice } from './classes/Invoice.js' // .js としないとだめ！！
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Paymemt.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// docOne, docTwo が HasFormatter インターフェースを実装した Object であると規定する
// 少なくとも「この属性はも持っている必要がある変数」を定義するときなどに有効？
let docOne: HasFormatter;
let docTwo: HasFormatter;

// hasFormatter を実装しているclassならこの変数に入れられる
docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'unchi', 1000)

let docs: HasFormatter[] =  [];
docs.push(docOne)
docs.push(docTwo)
console.log(docs)

const invOne = new Invoice('mario', 'work on the MM site', 105);
const invTwo = new Invoice('Luigi', 'work on the LL site', 205);

// classの配列：stging などと同じように作成可能
let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)
invoices.forEach(inv => {
    // inv.client = 'aaa'
    console.log(inv.client, inv.amount, inv.format())
})


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
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children)

// inputs
// selector 型のエレメントであるという宣言
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // フォームデフォルト動作（フォームのの内容送信）をしない
    // console.log(type, tofrom, details, amount)
    console.log(
        type.value,
        tofrom.value,
        details.value,
        // amount.value, // string型として受け取る
        amount.valueAsNumber // 数値型として受け取る
    )
    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'end')
})


// Generic
// T は name: に文字列属性を持つ object であるとする
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    /// ... はobject や list のカッコを外す(スプレッド構文)
    /// 新しい obj に uid を追加したものを返す
    return {...obj, uid};
}
console.log(addUID({name: 'hoge', aaa: 'bbb'}))
// console.log(addUID('hoge'))


// Enum
// 各変数は数値となる
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

// 変数定義時に T に任意の型を 指定して定義できる
interface Resource <T>{
    uid: number;
    resourceType: ResourceType;
    data: T;
}
const doc3: Resource<string> = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: 'hoge'
}
console.log(doc3)

const doc4: Resource<string[]> = {
    uid: 2,
    resourceType: ResourceType.BOOK,
    data:  ['hote','fuga']
}
console.log(doc4)

// tuples
let arr = ['hoge',25,true]
arr[0] = false
let tup: [string, number, boolean] = ['aaa',23,true]
tup[0] = 'ry'
//tup[0] = false

// let student: [string, number]
// student = ['aaaaaa', 238928923]