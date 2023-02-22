import { headlessLogin, findProduct } from '../support/helper';
import * as user from '../fixtures/user.json';

it('search', () => {
    cy.visit('https://automationteststore.com/');
    headlessLogin(user);

    findProduct('Highlighting Expressions');
    
    cy.get('.productpagecart').children('li').eq(0).click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();

    cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
})