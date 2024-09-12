

import logObj from "../../pageobjects/SwagLabs/LoginPage.js";
import prodObj from "../../pageobjects/SwagLabs/productPage.js";
import cartObj from "../../pageobjects/SwagLabs/cartPage.js";
import checkObj from "../../pageobjects/SwagLabs/checkoutPage.js";
import checkOverObj from "../../pageobjects/SwagLabs/checkoutOverviewPage.js";
import checkCompleteObj from "../../pageobjects/SwagLabs/checkoutCompletePage.js";

describe("Swag Labs Flow ",() => {


    it("Load Url of the  website",async() => {

        await logObj.loadUrl();
        await logObj.$swagLabsHeader().waitForDisplayed({timeout : 5000, timeoutMsg :"Header is not visible"});
        expect(await logObj.$swagLabsHeader().isDisplayed())
        .withContext('The Swag Lab Header is not displayed')
        .toBeTrue();   
    
})

it("Login using valid credentials", async () => {
    await logObj.Login();
    expect (await prodObj.$productHeader().isDisplayed()).withContext("Header is not displayed").toBeTrue();
  });

it("Sort the Products 'High To Low' and validated if they are sorted properly", async () => {

    await prodObj.sortHighToLow()
    await browser.pause(3000);
    let prices = await prodObj.sortHighToLow();
    let sortedPrice = prices.sort((a,b)=>a-b)
    await(expect (prices).toEqual(sortedPrice));    
})

it("Add a product to the cart ", async () => {
 
    await prodObj.addToCart();

   
})
it("Click on the add to cart icon", async () => {

    await  prodObj.clickOnCartIcon()
    expect(await cartObj.$cartPageHeader().isDisplayed())
    .withContext("The 'your cart' Header is not displayed")
    .toBeTrue();


   
})
it("Click on the Checkout button'", async () => {
 await cartObj.clickOnCheckoutButton();
 expect(await checkObj.$checkoutHeader().isDisplayed())
 .toBeTrue();
   
})

it("Enter Details to Checkout the cart'", async () => {
    await checkObj.checkOutProcess("Hiya","Rowan",682056);
    expect(await checkOverObj.$checkoutOverviewHeader().isDisplayed())
    .toBeTrue();
      
   })
    
   it("Click on the Finish Button'", async () => {
    await checkOverObj.clickOnFinishButton();
    expect(await  checkCompleteObj.$thankYouHeader().isDisplayed())
    .toBeTrue();
      
   })



})