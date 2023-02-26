import * as user from '../fixtures/user.json';
import {loginViaUI, findProductWithRecursion, searchAndClickProduct, findProduct, productFinder, findProductWithRecursionWithTestFailing, findItems} from '../support/helper';
import loginPage from '../support/pages/LoginPage';
import accountPage from '../support/pages/AccountPage';
import searchPage from '../support/pages/SearchPage';
import productPage from '../support/pages/ProductPage';
import orderResultPage from '../support/pages/OrderResultPage';
import homePage from '../support/pages/HomePage';
import cartPage from '../support/pages/CartPage';

it('Order from home page', () => {
    loginPage.visit();
    loginPage.submitLoginForm(user);

    homePage.visit();
    const productsInStock = homePage.getProducts().then($products => {
        console.log('has', $products.has('.productcart'));
        return cy.wrap(
            $products.has('.productcart')
        );
    });
    // add product to cart
    productsInStock.first().get('.productcart').first().click();

    cartPage.visit();
    cartPage.checkout();

    orderResultPage.verifySuccess();
})

it('Order from search page', () => {
    loginPage.visit();
    loginPage.submitLoginForm(user);

    accountPage.submitSearchForm('e');

    const productName = 'Benefit Bella Bamba';
    searchPage.findProductLink(productName)
        .click({ force: true });

    productPage.verifyProductName(productName);
    productPage.order();

    cartPage.checkout();
    
    orderResultPage.verifySuccess();
})