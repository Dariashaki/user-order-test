import BasePage from "./BasePage";

class RegistrationPage extends BasePage {

    visit() {
        return cy.visit('/index.php?rt=account/create');
    }

    submitRegistrationForm(user) {
        cy.get('#AccountFrm_firstname').type(user.firstName);
        cy.get('#AccountFrm_lastname').type(user.lastName);
        cy.get('#AccountFrm_email').type(user.email);
        cy.get('#AccountFrm_address_1').type(user.address);
        cy.get('#AccountFrm_city').type(user.city);
        cy.get('#AccountFrm_postcode').type(user.postCode);
        cy.get('#AccountFrm_country_id').select('Denmark');
        cy.get('#AccountFrm_loginname').type(user.username);
        cy.get('#AccountFrm_password').type(user.password);
        cy.get('#AccountFrm_confirm').type(user.password);
        cy.get('#AccountFrm_zone_id')
        .select(2, {force:true})
        .invoke('val')
        .should('not.eq', 'FALSE');

        cy.get('#AccountFrm_newsletter0').check();
        cy.get('#AccountFrm_agree').check();

        cy.get('button[title="Continue"]').click();
    }
}

export default new RegistrationPage();
