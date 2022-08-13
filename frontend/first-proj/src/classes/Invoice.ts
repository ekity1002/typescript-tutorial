import { HasFormatter } from '../interfaces/HasFormatter.js'

// class 
export class Invoice implements HasFormatter {
    // readonly client: string; // 読み込み専用。外から変更できない
    // private details: string; // private: 外からアクセスできない
    // amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
        ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}
