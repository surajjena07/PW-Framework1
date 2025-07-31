class InventoryPage {
  constructor(page) {
    this.page = page;
    this.firstAddToCartBtn = '.inventory_item button';
    this.cartIcon = '.shopping_cart_link';
  }

  async addFirstItemToCart() {
    await this.page.click(this.firstAddToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}
module.exports = {InventoryPage}
