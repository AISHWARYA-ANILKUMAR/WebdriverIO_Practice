import CommonPage from "./commonPage.js";

class LandingPage extends CommonPage {

    constructor()
    {
        super();
        this.$akbarTravelsHeader = () => $('//*[local-name()="svg" and @class="ng-tns-c7-2"]')
        this.$cruise = () => $('(//a[@fxlayout="column" and .//span[contains(@class, "ak-cruise icon")]])[2]')
        this.$CruiseIcon =() =>$('//i[@class="ak-cruise icon"]')
       

    }

    /**
     * Click on the OK button pop-up
     */

    async clickCruise()
    {
   
    await this.$cruiseIcon().waitForDisplayed({ timeout: 5000 })
    await this.$cruiseIcon().click()
    }

    /**
     * click on the cruise Packages icon on the Navigation bar
     */
    async clickOnCruise(){
         
        //await this.$holidaysPageHeader().waitForDisplayed({ timeout: 5000 });
        await this.$cruise().waitForClickable({ timeout: 10000 });
        await this.$cruise().click();


    }

    
    
}

export default new LandingPage();