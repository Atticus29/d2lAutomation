// Cypress.on('fail', (err, runnable) => {
//   debugger
// });

describe('Automates file additions to D2L content page', function() {
  it.skip('logs in', function(){
    cy.visit('https://my.pcc.edu');
    // cy.visit('https://authenticate.pcc.edu/authenticationendpoint/login.do?commonAuthCallerPath=%252Fcas%252Flogin&forceAuth=false&passiveAuth=false&tenantDomain=carbon.super&sessionDataKey=c0550b47-4b9a-469f-957e-9e6bf8e1d58b&relyingParty=Portal&type=cassso&sp=Portal&isSaaSApp=false&authenticators=BasicAuthenticator:LOCAL');
    cy.login();
  });

  it('navigates to D2L content page', function(){
    cy.visit("https://online.pcc.edu/d2l/le/content/267204/Home");
    cy.login();
  });

  it('navigates to content', function(){
    cy.get('a').contains("Content").click({force:true});
    // cy.get('button').should('match',/Upload/).click({force:true});
  });

  it('uploads new link', function(){
    // cy.get('button').should('match',/Upload/).click({force:true});
    cy.get('d2l-menu-item').contains("Create a Link").click({force:true});

  });
 });
