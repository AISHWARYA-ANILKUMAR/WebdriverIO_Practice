import CommonPage from "./commonPage.js";

class Dashboard extends CommonPage {

    constructor()
    {
        super();
        this.$myInfo = () => $('//span[text()="My Info"]')
        this.$personalDetails = () => $('//h6[text()="Personal Details"]')
    }

  
    async clickInfo()
    {
        await this.$myInfo().click();
    }

    
    
}

export default new Dashboard();