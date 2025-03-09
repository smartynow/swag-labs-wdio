import BasePage from './base.page';
import InputComponent from '../components/input.component';
import ButtonComponent from '../components/button.component';
import ErrorComponent from '../components/error.component';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.usernameInput = new InputComponent('//*[@data-test="username"]');
        this.passwordInput = new InputComponent('//*[@data-test="password"]');
        this.loginButton = new ButtonComponent('//*[@data-test="login-button"]');
        this.errorMessage = new ErrorComponent('//*[@data-test="error"]');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async clearInputs() {
        await this.usernameInput.clear();
        await this.passwordInput.clear();
    }

    async getErrorMessage() {
        return await this.errorMessage.getErrorMessage();
    }
}

export default new LoginPage();
