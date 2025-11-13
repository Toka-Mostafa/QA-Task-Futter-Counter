import { CounterSelectors as S, clickPlusSmart, readCanvasImage } from '../support/helpers';

export class CounterCanvas {
  open() { cy.visit('/'); }     
  expectVisible() { cy.get(S.canvas, { timeout: 30000 }).should('be.visible'); }

  grabImage(aliasName) {
    cy.get(S.canvas).then(($c) => cy.wrap(readCanvasImage($c), { log: false }).as(aliasName));
  }

  clickPlus() { clickPlusSmart(); }
}
