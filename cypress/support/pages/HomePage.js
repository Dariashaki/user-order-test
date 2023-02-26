import BasePage from "./BasePage";

export class HomePage extends BasePage {
    visit() {
        return cy.visit('/');
    }

    getProducts() {
        return cy.get('.thumbnail');
    }
}

export default new HomePage();
