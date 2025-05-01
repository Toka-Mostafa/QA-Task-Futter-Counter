export class CartPage {

    getCartTotalPrice() {
        return cy.get('[data-test="checkout"]').invoke('text');
    }


clickTotalTosubmitOrder() {
    cy.get('[data-test="checkout"]').click();
}


fillPaymentDetails(name, email) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
}

submitOrder(){
    cy.get('#submit-payment').click()
}

assertConfirmation(){
    cy.contains('Thanks for your purchase. Please check your email for payment.').should('be.visible');
}


}