// class 
export class payment {
    // readonly client: string; // 読み込み専用。外から変更できない
    // private details: string; // private: 外からアクセスできない
    // amount: number;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
