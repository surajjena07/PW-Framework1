class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async fillDetailsAndFinish(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
  }
}
module.exports = {CheckoutPage};
