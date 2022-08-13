export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            // 先頭に li を追加
            this.container.prepend(li);
        }
        else {
            // 末尾に li を追加
            this.container.append(li);
        }
    }
}
