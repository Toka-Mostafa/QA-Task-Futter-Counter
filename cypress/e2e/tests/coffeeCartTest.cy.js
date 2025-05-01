import { HomePage } from '../../pageObjects/HomePage';
import { CartPage } from '../../pageObjects/CartPage';
import {Helpers} from '../../support/helpers';

const homePage = new HomePage ()
const cartPage = new CartPage ()
const helpers = new Helpers()


describe('Add coffee to the cart, assert the total and submit order', () =>{

    const coffeeNames = ['Cafe Latte', 'Espresso Macchiato', 'Cappuccino'];
    const promoCupPrice = 4;

    it('Adding coffee to the cart', () =>{

        homePage.navigatetoHomePage()
        

        coffeeNames.forEach((coffeeName) => {
            homePage.addCoffeeItemToCartByName(coffeeName);
        })

        homePage.acceptTheExtraCup()

        helpers.calculateExpectedTotal(homePage,coffeeNames)
        .then((calculatedTotal) => {
            const expectedTotal = calculatedTotal + promoCupPrice;
            const expectedCheckoutText = `Total: $${expectedTotal.toFixed(2)}`;
        

        homePage.navigateToCartPage()
        
        cartPage.getCartTotalPrice().then((cartTotalText) => {
            expect(cartTotalText).to.eq(expectedCheckoutText)
        })

    })


        //Submit the order
        cartPage.clickTotalTosubmitOrder()

        cartPage.fillPaymentDetails('Toka', 'toka@altiverse.co')

        cartPage.submitOrder()

        cartPage.assertConfirmation()
})
})


