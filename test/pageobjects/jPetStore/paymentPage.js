
import CommonPage from "./commonPage.js";
class PaymentPage extends CommonPage{

    constructor()
    {
        super();
        this.$paymentHeader =() => $('//th[text()="Payment Details"]')
        

        
       
    }

    /**
     * click on the signIn Option
     */
    async clickOnSignInButton()
    {
        await this.$signIn().click();
    }


   


}


export default new PaymentPage();