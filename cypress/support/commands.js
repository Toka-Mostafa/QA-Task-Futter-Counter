
Cypress.Commands.add('enableAccessibility', () => {
  cy.get('flt-glass-pane')
    .shadow()
    .find('flt-semantics-placeholder')
    .click({ force: true });
});


Cypress.Commands.add('counterValueIsDisplayed', (value) => {
  cy.get(`flt-semantics-host [aria-label="${value}"]`).should('exist');
});

Cypress.Commands.add('clickIncrementButton', () => {
  cy.get('flt-semantics-host [role="button"][aria-label="Increment"]')
    .click({ force: true });
});
