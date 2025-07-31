const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');
const { validUser } = require('../data/credentials');

test('Login with valid credentials and place an order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  // Step 1: Go to login page and login
  await loginPage.goto();
  await loginPage.login(validUser.username, validUser.password);

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);

  // Step 2: Add item to cart and go to cart
  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  // Step 3: Proceed to checkout
  await cartPage.checkout();

  // Step 4: Fill in user details and place order
  await checkoutPage.fillDetailsAndFinish('Suraj', 'Jena', '123456');

  // Step 5: Verify order confirmation
  await confirmationPage.verifyConfirmationMessage();
});
