import {Key} from "webdriverio";

export default class BaseComponent {
    constructor(xpath) {
        if (!xpath) {
            throw new Error('XPath locator is required');
        }
        this.xpath = xpath;
    }

    async getElement() {
        return await $(this.xpath);
    }

    async isDisplayed() {
        const element = await this.getElement();
        return await element.isDisplayed();
    }

    async click() {
        const element = await this.getElement();
        await element.click();
    }

    async getText() {
        const element = await this.getElement();
        return await element.getText();
    }

    async clear() {
        const element = await this.getElement();
        await element.click();
        await browser.keys([Key.Ctrl, 'a']);
        await browser.keys('Backspace');
    }
}
