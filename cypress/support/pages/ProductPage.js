import BasePage from "./BasePage";

class ProductPage extends BasePage {
    order() {
        cy.get('.productpagecart').children('li').eq(0).click();
    }

    verifyProductName(product_name) {
        cy.get('h1.productname').invoke('text').should('eq', product_name);
    }
}

export default new ProductPage();
