import CommonPage from "./commonPage.js";

class cartPage extends CommonPage
{
    constructor()
    {
        super();
       this.$cartPageHeader = () => $('//span[text()="Your Cart"]')
       this.$checkoutButton = () => $('//button[@name="checkout"]')
        
    }

    async clickOnCheckoutButton()
    {
        await this.$checkoutButton().click();
    }





    

   
    }




    

export default new cartPage();