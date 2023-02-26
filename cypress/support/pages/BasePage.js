export default class BasePage {

    getSearchField(){
        return cy.get('#filter_keyword');
    }

    submitSearchForm(text) {
        return this.getSearchField()
            .type(text)
            .closest("form")
            .submit();
    }
}
