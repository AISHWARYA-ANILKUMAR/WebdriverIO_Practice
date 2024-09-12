import CommonPage from "./commonPage.js";

class CruisePage extends CommonPage {

    constructor()
    {
        super();
        
       this.$clickOnFood = () => $('//a[@href="theme/food-packages/international-tour-packages"]')
       this.$cruiseDisplayed = () => $('//small[text()="Holland America Line / KONINGSDAM"]')
       this.$nightsDisplayed = () => $('//small[text()="7 Nights"]')
       this.$bookNowButton = () => $('(//a[text()="Book now"])[1]')


    }

   

    async getDisplayedCruiseAndNightDetails()
    {
        await this.$cruiseDisplayed().waitForDisplayed({ timeout: 5000 , timeoutMsg:"Element is Displayed"});
        const DisplayedCruise = await this.$cruiseDisplayed().getText();
        const DisplayedNights = await this.$nightsDisplayed().getText();

        return {  DisplayedCruise, DisplayedNights }; 
    }

    async clickOnBookNowButton()
    {
        await this.$bookNowButton().waitForClickable({ timeout: 5000 , timeoutMsg:"element is not clickable"});
        await this.$bookNowButton().click();
    }

 
    
    
}

export default new CruisePage();