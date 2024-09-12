
import landObj from "../../pageobjects/QA_PlayGround/landingPage.js"
import ratingObj from "../../pageobjects/QA_PlayGround/ratingBarPage.js";
import redirectObj from "../../pageobjects/QA_PlayGround/redirectChainPage.js";
import sortwithoutarrayObj from "../../pageobjects/QA_PlayGround/sortableWithOutArray.js";
describe('QA Playground Components Testing', () => {


    it('Launch Url of the website', async() => {
        await landObj.launchUrl();
        //await browser.pause(1000)
        await landObj.$qaPlayGroundHeader().waitForDisplayed({timeout : 5000})
        expect(await landObj.$qaPlayGroundHeader().isDisplayed())
        .withContext('The Header is displayed')
        .toBeTrue();   
})
 
it('Click on the Rating Range slider option on the website', async() => {
    await landObj.clickOnRatingRangeSlider();
    //await browser.pause(1000)
    expect(await ratingObj.$emoji().isDisplayed())
    .withContext('The Header is displayed')
    .toBeTrue();
})

it('Set value of range filter on the website', async() => {


    await ratingObj.setRatingBar()
    //await browser.pause(1000)
    expect(await ratingObj.$feedbackButton().isDisplayed())
    .withContext('The Feedback button is to be displayed')
    .toBeTrue();

}) 


it('click on feedback button', async() => {


    await ratingObj.clickOnSendFeedbackButton()
    expect(await ratingObj.$feedbackHeader().isDisplayed())
    .withContext('The Feedback button is to be displayed')
    .toBeTrue();

})  

it("click on the 'Apps' option on the top of the navigation bar to go back to the landing page", async() => {

    await ratingObj.clickOnBackPageOption()
    expect(await landObj.$qaPlayGroundHeader().isDisplayed())
    .withContext('The Header is displayed')
    .toBeTrue();   

}) 

it("click on the Redirect chain option", async() => {

    await landObj.clickOnRedirectChainOption()
    expect(await redirectObj.$startRedirectChainButton().isDisplayed())
    .withContext('The Button is displayed')
    .toBeTrue();   

}) 

// it('Verify the pages and their corresponding url displayed in the redirect chain option', async() => {
    
//     await redirectObj.clickOnStartRedirectChainOption()
//    // await browser.pause(3000)

//     expect(await redirectObj.$secondPage().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirect/second.html')

//     expect(await redirectObj.$thirdPage().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirecct/third.html')

//     expect(await redirectObj.$fourthPage().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirect/fourth.html')

//     expect(await redirectObj.$fifthPage().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirect/fifth.html')

//     expect(await redirectObj.$sixth().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirect/sixth.html')

//     expect(await redirectObj.$last().isDisplayed())
//     await expect(browser).toHaveUrl('/apps/redirect/last.html')

//     .withContext('The pages and their corresponding url is displayed')
//     .toBeTrue();


// })


it("Verify all pages in the redirect chain page is displayed", async() => {

    await redirectObj.checkText()
    expect(await redirectObj.$goBackButton().isDisplayed())
    .withContext('The Button is not displayed')
    .toBeTrue();   
})
    
it("click on the 'Apps' option on the top of the navigation bar to go back to the landing page", async() => {

    await ratingObj.clickOnBackPageOption()
    expect(await landObj.$qaPlayGroundHeader().isDisplayed())
    .withContext('The Header is displayed')
    .toBeTrue();   

})
it(`click on sortable list`, async () => {
    await sortwithoutarrayObj.clickOnsortableList();
    expect(await landObj.$qaPlayGroundHeader().isDisplayed())
        .withContext('The Header is displayed')
        .toBeTrue();
   
  });


it(`Sorting the names without array`, async () => {
  
    await sortwithoutarrayObj.sortingWithoutArray();
    //await landObj.clickOnBackPageOption();
  });

})