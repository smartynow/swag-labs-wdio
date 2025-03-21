import BaseComponent from './base.component';

export default class InputComponent extends BaseComponent {
    constructor(xpath) {
        super(xpath);
    }

    async setValue(value) {
        const element = await this.getElement();
        await element.setValue(value);
    }

    async getValue() {
        const element = await this.getElement();
        return await element.getValue();
    }
}
