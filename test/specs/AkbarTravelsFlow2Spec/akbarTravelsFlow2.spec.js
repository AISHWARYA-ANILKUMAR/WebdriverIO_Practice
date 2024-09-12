
import landObj from "../../pageobjects/Akbar_Travels_Flow2/landingPage.js";
import cruisePage from "../../pageobjects/Akbar_Travels_Flow2/cruisePage.js";
import departurePage from "../../pageobjects/Akbar_Travels_Flow2/DeparturePage.js";
import bookingPage from "../../pageobjects/Akbar_Travels_Flow2/bookingPage.js";

let cruiseDisplayed = "Holland America Line / KONINGSDAM";
let displayedNights = "7 Nights"

describe('Akbar Travels Package Search and Download Flow',() => {


    it("Launch URl", async () => {
    
        await landObj.LaunchUrl();
        await landObj.$akbarTravelsHeader().waitForDisplayed({ timeout: 5000 });
        expect(await landObj.$akbarTravelsHeader().isDisplayed())
        .withContext('The Akabar Travels Logo is displayed')
        .toBeTrue(); 
    })

    // it("click on the 'Ok' button", async () => {

    //     await landObj.ClickOnOkButton();
    //     expect(await landObj.$okButton().isDisplayed())
    //     .withContext('The Ok button is not clicked')
    //     .toBeTrue(); 
    // })

    it("Click on the 'cruise' icon in the navigation bar and verify that the page redirects to the cruise section", async () => {
        await landObj.clickOnCruise();
        await browser.switchWindow('https://www.akbartravels.com/cruises');
        //await cruisePage.$cruiseHeader().waitForDisplayed({ timeout: 5000 ,timeoutMsg:'header not displayed'});
         expect(await cruisePage.$cruiseHeader().isDisplayed())
        .withContext('The Header on cruise Page is not displayed')
        .toBeTrue(); 
    })

    it("Choose a cruise to travel", async () => {
    
        await cruisePage.chooseCruise('Lakshadweep');
        await cruisePage.getSelectedCruiseAndNightsDetails()

        // expect (await cruisePage.$loader().isDisplayed())
        
        // let selected = await cruisePage.getSelectedCruiseAndNightsDetails(); 
        // await browser.switchWindow('https://www.akbartravels.com/cruises');
        // let displayed = await departurePage.getDisplayedCruiseAndNightDetails();

        // await(expect(selected.selectedCruise).toContain(displayed.DisplayedCruise))
        // await(expect(selected.selectedNights).toContain(displayed.DisplayedNights))
        
    })

   

    it("Click on Book Now ", async () => {
        await departurePage.clickOnBookNowButton()
        // expect(await bookingPage.$bookingPageHeader().isDisplayed())
        // .withContext('The Booking page header is not displayed')
        // .toBeTrue(); 
    })
    it("fun",async () => {
        
})
    


    
    

})