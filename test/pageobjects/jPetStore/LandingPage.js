
import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{

    constructor()
    {
        super();
        this.$signIn =() => $('//a[text()="Sign In"]')
        

        
       
    }
 

    /**
     * click on the signIn Option
     */
    async clickOnSignInButton()
    {
        await this.$signIn().click();
    }


   


}


export default new LandingPage();