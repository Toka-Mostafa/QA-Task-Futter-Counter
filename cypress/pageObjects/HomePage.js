export class HomePage {
   
    navigatetoHomePage() {
      cy.visit('/');
    }

    navigateToCartPage(){
        cy.get('a[href="/cart"]').click();
    }

    addCoffeeItemToCartByName(coffeeName){
        cy.get(`[aria-label="${coffeeName}"]`).click()
    }

    acceptTheExtraCup(){
        cy.get('.promo').find('button.yes').click()
    }

    refuseTheExtraCup(){
        cy.get('.promo').find('button.no').click()
    }




    getCoffeePriceByName(coffeeName) {
        return cy.contains('li', coffeeName)
            .find('small')
            .invoke('text')
            .then((priceText) => parseFloat(priceText.replace('$', '').trim())); //Changing the price to float
    }

    
}
