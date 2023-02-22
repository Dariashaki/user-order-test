export function loginViaUI(user){
    cy.log('**Open website login page**');
    cy.visit('/');

    cy.log('**Authorize user**');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('h1 span.subtext').should('contain', user.firstName);
}

export function headlessLogin(user){
    let csrfToken;
    let csrfInstance;

    cy.request('GET', '/index.php?rt=account/login').then( response => {
        let htmlResp = document.createElement('html')
        htmlResp.innerHTML = response.body;
        csrfToken = htmlResp.querySelector('#loginFrm [name="csrftoken"]').getAttribute('value');
        csrfInstance = htmlResp.querySelector('#loginFrm [name="csrfinstance"]').getAttribute('value');
    }).then(() => {
        cy.request({
            method: 'POST',
            url: '/index.php?rt=account/login',
            body: {
                loginname: user.username,
                password: user.password,
                csrfinstance: csrfInstance,
                csrftoken: csrfToken
            },
            form: true
        })
    })
}

function findOnPage(name) {
    const linkLocator = '.prdocutname[title="' + name + '"]';
    const nextLocator = '.pagination li > a:contains(>)';

    cy.get('body').then($body => {
        console.log('find',$body.find(linkLocator))
        if ($body.find(linkLocator).length > 0) {
            cy.get(linkLocator).click();
        } else if ($body.find(nextLocator).length > 0) {
            cy.get(nextLocator).first().click();
            findOnPage(name);
        } else {
            throw new Error('Product not found');
        }
    });
}

export function findProduct(name) {
    cy.get('#filter_keyword').type('E');
    cy.get('.button-in-search').click();

    findOnPage(name);

    cy.get('h1.productname').invoke('text').should('eq', name);
}

// export function someLoginViaAPI(){
//     let token;

//     cy.request({
//         method: 'POST',
//         url: '/index.php?rt=account/login',
//         body: {
//             loginname: user.username,
//             password: user.password
//         }
//     }).then( response => {
//         token = response.body.token
//         cy.setCookie('token', response.body.token);
//         window.localStorage.setItem('token', response.body.token);
//         window.sessionStorage.setItem('token', response.body.token);
//     })
// }