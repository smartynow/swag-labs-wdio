import BaseComponent from './base.component';

export default class ErrorComponent extends BaseComponent {
    constructor(xpath) {
        super(xpath);
    }

    async getErrorMessage() {
        return await this.getText();
    }
}
