import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

let pass;

user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode = faker.address.zipCode('####');
user.username = faker.internet.userName();
user.password = faker.internet.password(15);

it('Registration', () => {
    registrationPage.visit();
    registrationPage.submitRegistrationForm(user);
    cy.get('h1').should('contain', 'Your Account Has Been Created!');

    accountPage.visit();
    accountPage.verifyUserName(user);
})
