import CommonPage from "./commonPage.js";
class BrokenLinkPage extends CommonPage {
    
    constructor()
    {
        super();
      
        this.$brokenLinkHeader = () => $('//h1[text()="Broken Links"]')
        this.$brokenLink = () => $('//a[text()="broken link"]')
        this.$linkNotFoundHeader = () => $('//h5[normalize-space(text())="we could not find that!"]')
       
    }

    /**
     * click on the broken link option on the broken link page
     */

    async clickOnBrokenLink()
    {
        await this.$brokenLink().click();
    }



}

    

   

   



export default new  BrokenLinkPage();