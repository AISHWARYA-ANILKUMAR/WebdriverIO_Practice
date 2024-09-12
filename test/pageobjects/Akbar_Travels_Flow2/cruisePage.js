import CommonPage from "./commonPage.js";

class CruisePage extends CommonPage {

    constructor()
    {
        super();
        
       this.$cruiseHeader = () => $('//h1[normalize-space(text())="Book Domestic and International Cruise"]')
       this.$city = () => $('//input[@name="city"]')
       this.$sailMonthsDropDown = () => $('//select[@name="sailDate"]')
       this.$chosenSailMonth = () => $('//option[text()="May-2025"]')
       this.$selectDaysDropDown = () => $('//select[@id="operator"]')
       this.$chosenDay = () => $('//option[text()="7 To 9 night(s)"]')
       this.$selectCruiseLineDropDown = () => $('//select[@name="cruise"]');
       this.$searchButton = () => $('//button[text()="Search Cruise"]')
       this.$chosenCruise = () => $('//option[text()="Holland America Line"]')
       this.$loader = () => $('(//img[@class="ng-tns-c40-4"])[1]')
       

    }

    async chooseCruise(city)
    {
        await this.$city().setValue(city)
        await this.$sailMonthsDropDown().click();
        await this.$chosenSailMonth().click();
        await this.$selectDaysDropDown().click();
        await this.$chosenDay().click();
        await this.$selectCruiseLineDropDown().click();
        await this.$chosenCruise().click();
        await this.$searchButton().click();
        await this.$loader().waitForDisplayed({timeout:5000,timeoutMsg:"loader is not displayed",reverse:true})

    }

    async getSelectedCruiseAndNightsDetails()

    {
        let selected =[];

        let Cruise = await this.$chosenCruise().getText();
        selected.push(Cruise);
        
        let Nights = await this.$chosenDay().getText();
        selected.push(Nights);

        console.log(selected);

    }

   

 
    
    
}

export default new CruisePage();