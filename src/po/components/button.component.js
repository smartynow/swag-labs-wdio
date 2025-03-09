import BaseComponent from './base.component';

export default class ButtonComponent extends BaseComponent {
    constructor(xpath) {
        super(xpath);
    }

    async click() {
        await super.click();
    }
}
