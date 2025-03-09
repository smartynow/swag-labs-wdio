import LoginPage from '../po/pages/login.page.js';
import { expect } from 'chai';
import logger from '@wdio/logger';

const log = logger('loginTest');

const testData = [
    { username: 'standard_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'locked_out_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'problem_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'performance_glitch_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'error_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
    { username: 'visual_user', password: 'secret_sauce', expectedTitle: 'Swag Labs' },
];

describe('Login Page Tests', () => {
    beforeEach(async () => {
        log.info('Opening login page');
        await LoginPage.open();
    });

    it('UC-1 Test Login form with empty credentials', async () => {
        log.info('Testing login with empty credentials');
        await LoginPage.usernameInput.setValue('Lorem ipsum');
        await LoginPage.passwordInput.setValue('Lorem ipsum');

        await LoginPage.clearInputs();
        log.debug('Inputs cleared');

        await LoginPage.loginButton.click();
        const error = await LoginPage.getErrorMessage();
        log.info(`Received error message: "${error}"`);

        expect(error).to.equal('Epic sadface: Username is required');
    });

    it('UC-2 Test Login form with credentials by passing Username', async () => {
        log.info('Testing login with empty password');
        await LoginPage.usernameInput.setValue('Lorem ipsum');

        await LoginPage.passwordInput.click();
        await LoginPage.passwordInput.clear();
        await LoginPage.loginButton.click();

        const error = await LoginPage.getErrorMessage();
        log.info(`Received error message: "${error}"`);

        expect(error).to.equal('Epic sadface: Password is required');
    });

    testData.forEach(({ username, password, expectedTitle }) => {
        it(`UC-3 Test Login form with valid credentials for ${username}`, async () => {
            log.info(`Testing login with username: ${username}`);
            await LoginPage.login(username, password);

            const title = await browser.getTitle();
            log.info(`Page title after login: "${title}"`);

            expect(title).to.equal(expectedTitle);
        });
    });

    afterEach(async function () {
        if (this.currentTest.state === 'failed') {
            log.error(`Test failed: ${this.currentTest.title}`);
            const screenshotPath = `./screenshots/${this.currentTest.title.replace(/\s+/g, '_')}.png`;
            await browser.saveScreenshot(screenshotPath);
            log.info(`Screenshot saved: ${screenshotPath}`);
        }
    });
});
