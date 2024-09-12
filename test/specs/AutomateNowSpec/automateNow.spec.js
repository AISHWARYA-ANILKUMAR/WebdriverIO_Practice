import landObj from "../../pageobjects/AutomateNow/landingPage.js";
import gesObj from "../../pageobjects/AutomateNow/gesturesPage.js";
import calObj from "../../pageobjects/AutomateNow/calenderPage.js";
import brokenObj from "../../pageobjects/AutomateNow/brokenLinkPage.js";
import missObj from "../../pageobjects/AutomateNow/missingLinkPage.js";
import data from "../../calenderTestData/calenderDate.json" assert{type:'json'}



let date = data.date.split("-");
let day = date[0];
let month = date[1];
let year = date[2];


const notFound = "https://practice-automation.com/broken-links/missing-page.html";
 

describe('AutomateNow Website Testing', () => {


    it('Launch Url of the website', async() => {
        await landObj.launchUrl();
        await landObj.$homePageHeader().waitForDisplayed({timeout : 5000})
        expect(await landObj.$homePageHeader().isDisplayed())
        .withContext('The Logo is not displayed')
        .toBeTrue();   
})

it('click on Gestures on the Home page', async() => {
    await landObj.clickOnGesture();  
    expect(await gesObj.$gestureHeading().isDisplayed())
    .withContext('The Gesture Heading  is not displayed')
    .toBeTrue();
})

it('Drag and Drop the AutomateNow Logo', async() => {
    await gesObj.dragAndDropAutomateNow();  
    await browser.pause(3000)
    expect(await gesObj.$divToDrop().isDisplayed())
    .withContext('The element is not displayed')
    .toBeTrue();
})


it("drag", async() => {

    await gesObj.dragDropMoveMe();
        const locationAfterDrag = await gesObj.$boxToDrag().getLocation();
        console.log(`Coordinates after drag: (${locationAfterDrag.x}, ${locationAfterDrag.y})`);
});


it('Click on Home icon to return back to Home page', async() => {
  
    await landObj.clickReturnToHome();
    expect(await landObj.$homePageHeader().isDisplayed())
    .withContext('The Home page header is not displayed')
    .toBeTrue();
})

it('click on calender option on the Home page', async() => {
    await landObj.clickOnCalender();  
    expect(await calObj.$calenderHeading().isDisplayed())
    .withContext('The calender Heading  is not displayed')
    .toBeTrue();
})

it('Set Date', async() => {
    await calObj.datePicker(day,month,year); 
    await browser.pause(5000); 
    expect(await calObj.$roundLoadingSvgIcon().isDisplayed())
    expect(await calObj.$validateText().isDisplayed())
    .withContext('The Text  is not displayed')
    .toBeTrue();
})

// it('Set Date', async() => {
//     await calObj.setDate("12-12-2012"); 
//     await browser.pause(5000); 
//     expect(await calObj.$roundLoadingSvgIcon().isDisplayed())
//     expect(await calObj.$validateText().isDisplayed())
//     .withContext('The Text  is not displayed')
//     .toBeTrue();
// })

it('Click on Home icon to return back to Home page', async() => {
  
    await landObj.clickReturnToHome();
    expect(await landObj.$homePageHeader().isDisplayed())
    .withContext('The Home page header is not displayed')
    .toBeTrue();
})

it('click on Broken Link Option on the Home page', async() => {
    await landObj.clickOnBrokenLinkOption();  
    expect(await brokenObj.$brokenLinkHeader().isDisplayed())
    .withContext('The Broken Link Heading  is not displayed')
    .toBeTrue();
})

it("click on 'BrokenLink' Link on the Broken Link page", async() => {
    await brokenObj.clickOnBrokenLink();  
    expect(await missObj.$linkNotFoundHeader().isDisplayed())
    .withContext('The Link Missing Heading  is not displayed')
    .toBeTrue();
})

it("Check the response is of status code :404", async () => {
    await browser.maximizeWindow();
    const response = await missObj.getApiResponseNotFound(notFound);
    console.log(response.response)
    await expect(response.response.status).toEqual(404);
  });




})