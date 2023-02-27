import BasePage from "./BasePage";

class SearchPage extends BasePage {
    findProductLink(product_name) {

        //Find needed product among all
        return cy.get('.thumbnail').then(products => {
            let neededProduct;
            if ((neededProduct = products.find(`a:contains("${product_name}")`)).length > 0) {
                return cy.wrap(neededProduct)
            }
            else {
                cy.get('.pagination li').then(pages => {
    
                //until 'next' button is present click on it and search product again
                    let neededPage = pages.find('.pagination li a[href]:contains(">")')
    
                    if ((neededPage = pages.find('a[href]:contains(">")')).length > 0) {
                        cy.wrap(neededPage)
                            .first()
                            .click({ force: true })
    
                        return this.findProductLink(product_name)
    
                    } else {
                        cy.log('[There is no such product](http://e.ua)') //link is just to make text blue for visibility
                        throw new Error('Product not found');
                    }
    
                })
            }
        })
    }
}

export default new SearchPage();