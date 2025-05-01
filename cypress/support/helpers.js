export class Helpers{

  calculateExpectedTotal(homePage, coffeeNames) {
    let total = 0;
    const pricePromises = coffeeNames.map((name) => {
        return homePage.getCoffeePriceByName(name).then((price) => {
            total += price;
        });
    });
    return Cypress.Promise.all(pricePromises).then(() => total);
}

}