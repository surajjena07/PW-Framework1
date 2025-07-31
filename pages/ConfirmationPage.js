const { expect } = require('@playwright/test');

exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.confirmationHeader = '.complete-header';
  }

  async verifyConfirmationMessage() {
    await expect(this.page.locator(this.confirmationHeader)).toHaveText('Thank you for your order!');
  }
}
