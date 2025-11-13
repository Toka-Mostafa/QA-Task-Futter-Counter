export const CounterSelectors = {
  canvas: 'flt-canvas-container canvas',
  semantics: 'flt-semantics-host',
};

export function readCanvasImage($canvas) {
  return $canvas[0].toDataURL('image/png');
}

export function clickPlusSmart() {
  const insets  = [24, 40, 56];
  const targets = [CounterSelectors.semantics, CounterSelectors.canvas];

  cy.get(CounterSelectors.canvas).then(($canvas) => {
    const before = readCanvasImage($canvas);

    const attempts = [];
    targets.forEach((target) => {
      insets.forEach((inset) => attempts.push({ target, inset }));
    });

    function tryAttempt(index = 0) {
      if (index >= attempts.length) {
        throw new Error('Could not trigger + : tried all targets/insets');
      }

      const { target, inset } = attempts[index];

      cy.get(target).then(($el) => {
        const { width, height } = $el[0].getBoundingClientRect();
        const x = Math.max(5, width  - inset);
        const y = Math.max(5, height - inset);

        cy.wrap($el)
          .click(width / 2, height / 2, { force: true })
          .click(x, y, { force: true });

        cy.wait(300); 

        cy.get(CounterSelectors.canvas).then(($canvasAfter) => {
          const after = readCanvasImage($canvasAfter);

          if (after === before) {
            tryAttempt(index + 1);
          }
        });
      });
    }

    tryAttempt();
  });
}
