export default class BasePage {
    constructor() {
        this.url = 'https://www.saucedemo.com/';
    }

    async open(path = '') {
        await browser.url(`${this.url}${path}`);
    }
}
