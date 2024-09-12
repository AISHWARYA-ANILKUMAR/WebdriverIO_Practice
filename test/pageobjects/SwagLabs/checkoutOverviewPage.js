import CommonPage from "./commonPage.js";

class CheckoutOverviewPage extends CommonPage
{
    constructor()
    {
        super();
     this.$checkoutOverviewHeader = () => $('//span[text()="Checkout: Overview"]')
     this.$finishButton = () => $('//button[@id="finish"]')
       
        
    }

    async clickOnFinishButton()
    {
        await this.$finishButton().click();
    }

   
    }


    

export default new CheckoutOverviewPage();