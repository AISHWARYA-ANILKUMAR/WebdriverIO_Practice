import landingPage from "../../pageobjects/jPetStore/LandingPage.js";
import signInPage from "../../pageobjects/jPetStore/signInPage.js";
import registerPage from "../../pageobjects/jPetStore/registerPage.js";
import welcomePage from "../../pageobjects/jPetStore/welcomePage.js";
import fishListingPage from "../../pageobjects/jPetStore/fishListingPage.js";
import goldFishPage from "../../pageobjects/jPetStore/goldFishPage.js";
import shoppingCart from "../../pageobjects/jPetStore/shoppingCart.js";
import dogsListingPage from "../../pageobjects/jPetStore/dogsListingPage.js";
import dalmatianPage from "../../pageobjects/jPetStore/dalmatianPage.js";
import paymentPage from "../../pageobjects/jPetStore/paymentPage.js"; 
import credentials from "../../jpetTestData/credentials.json" assert {type :'json'};

let proIdArray = [];
let itemIdArray = [];
let listPriceArray = [];

let email = await landingPage.randomEmail();

describe('Flow of JPetStore webiste',() => {


    it("Launch URl of the JPetStore Website", async () => {
    
        await landingPage.LaunchUrl();
        await landingPage.$mainHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landingPage.$mainHeader().isDisplayed())
        .withContext('The JPetStore Header is not displayed')
        .toBeTrue(); 
    })

    
    it("Click on SignIn Link", async () => {
    
        await landingPage.clickOnSignInButton();
        await browser.pause(3000);
        expect(await landingPage.$mainHeader().isDisplayed())
        .withContext('The JPetStore Header is not displayed')
        .toBeTrue(); 
    })

    it("SignIn into the application", async () => {
        await signInPage.signInProcess(credentials.username,credentials.password);
        await browser.pause(3000);
        expect(await welcomePage.$welcomeHeader().isDisplayed())
        .withContext('The welcome Header is not displayed')
        .toBeTrue(); 
    })

    it(" Click on the fish option ", async () => {
        await welcomePage.clickOnFishOption();
        await browser.pause(3000);
        expect(await fishListingPage.$fishHeader().isDisplayed())
        .withContext('The  Header is not displayed')
        .toBeTrue(); 
    })

    it(" Click on the GoldFish option ", async ()=> {

        await fishListingPage.ClickOnGoldFish()
        expect(await goldFishPage.$goldFishHeader().isDisplayed())
        .withContext('The  Header is not displayed')
        .toBeTrue();
    })

    it(" Add to cart the Gold fish", async ()=> {

        await goldFishPage.addToCartGoldFish()
        expect(await shoppingCart.$shoppingCartHeader().isDisplayed())
        .withContext('The  Shopping Cart Header is not displayed')
        .toBeTrue();
    })

    it(" Set Quantity and click on update cart option", async ()=> {

        await shoppingCart.setQuantityAndUpdateCart()
        
    })

    it("save the value of the itemId", async ()=> {
      
        let itemIdFetched = await shoppingCart.getItemId();
        itemIdArray.push(itemIdFetched)

    })

    it("save the value of the productID", async ()=> {
      
        let prodIDFetched = await shoppingCart.getProductId();
        proIdArray.push(prodIDFetched)

    })

    it("save the value of the price", async ()=> {
      
        let priceListFetched = await shoppingCart.getListPrice();
        listPriceArray.push(priceListFetched)

    })


    it(" Return to main menu", async ()=> {

        await shoppingCart.returnToMenu();
        expect(await landingPage.$mainHeader().isDisplayed())
        .withContext('The JPetStore Header is not displayed')
        .toBeTrue();
        
    })

    it("Click on dog option on the list", async ()=> {

        await welcomePage.clickOnDogOption();
        expect(await dogsListingPage.$dogHeader().isDisplayed())
        .withContext('The Dog Header is not displayed')
        .toBeTrue();
        
    })

    it("Choose Dalmatian", async ()=> {

        await dogsListingPage.chooseDalmatian();
        expect(await dalmatianPage.$dalmatianHeader().isDisplayed())
        .withContext('The Dog Header is not displayed')
        .toBeTrue();
        
    })


it("Add to Cart Dalmatian", async ()=> {

    await dalmatianPage.addToCartDalmatian();
    expect(await shoppingCart.$shoppingCartHeader().isDisplayed())
    .withContext('The Header is not displayed')
    .toBeTrue();
    
})

it("Click on proceed to checkout", async ()=> {

    await shoppingCart.checkout();
    expect(await paymentPage.$paymentHeader().isDisplayed())
    .withContext('The Payment Header is not displayed')
    .toBeTrue();
    
})

})





    // it("Click on Register Link", async () => {
    
    //     await signInPage.clickOnRegisterLink();
    //     await signInPage.$mainHeader().waitForDisplayed({ timeout: 5000 });
    //     expect(await signInPage.$mainHeader().isDisplayed())
    //     .withContext('The JPetStore Header is not displayed')
    //     .toBeTrue(); 
    // })
    
    // it("Register the user into the website", async () => {
    
    //     await registerPage.register(email);
    //     await signInPage.$mainHeader().waitForDisplayed({ timeout: 5000 });
    //     expect(await signInPage.$mainHeader().isDisplayed())
    //     .withContext('The JPetStore Header is not displayed')
    //     .toBeTrue(); 
    // })

