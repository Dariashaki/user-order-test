import BasePage from "./BasePage";

class CartPage extends BasePage {
    visit() {
        return cy.visit('/index.php?rt=checkout/cart');
    }

    checkout() {
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
    }
}

export default new CartPage();
