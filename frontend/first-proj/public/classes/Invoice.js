// class 
export class Invoice {
    // readonly client: string; // 読み込み専用。外から変更できない
    // private details: string; // private: 外からアクセスできない
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
