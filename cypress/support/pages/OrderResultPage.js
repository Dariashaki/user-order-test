import BasePage from "./BasePage";

class OrderResultPage extends BasePage {
    verifySuccess() {
        cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    }
}

export default new OrderResultPage();
