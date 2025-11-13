
describe('Flutter Counter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.enableAccessibility();
  });

  it('increments the counter once when the + button is clicked', () => {
    cy.counterValueIsDisplayed('0');
    cy.clickIncrementButton();
    cy.counterValueIsDisplayed('1');
  });

  it('increments the counter from 0 to 3 after three clicks', () => {
    cy.counterValueIsDisplayed('0');

    cy.clickIncrementButton();
    cy.clickIncrementButton();
    cy.clickIncrementButton();

    cy.counterValueIsDisplayed('3');
  });
});
