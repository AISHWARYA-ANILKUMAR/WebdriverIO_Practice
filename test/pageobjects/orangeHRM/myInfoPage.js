import CommonPage from "./commonPage.js";

class MyInfoPage extends CommonPage {

    constructor()
    {
        super();
        
        this.$userNameDetails = (name) => $(`//input[@name="${name}"]`)
    }

  
    async clickInfo()
    {
        await this.$myInfo().click();
    }

    async enterDetails()
    {
        await this.$userNameDetails('').setValue()
    }



    
    
}

export default new MyInfoPage();