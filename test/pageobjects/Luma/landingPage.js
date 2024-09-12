import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{

    constructor()
    {
        super();

        this.$menDropDown = () => $('//span[text()="Men"]')
        this.$topsDropDown = () => $('//a[@id="ui-id-17"]')
        this.$hoodiesDropDown=()=>$('//a[@id="ui-id-20"]');
         

    }

    /**
     * The user chooses the product (hoodies) from tops under the Men's Category
     */

    async chooseMenTops()
    
    {   await this.$menDropDown().moveTo();
        await this.$topsDropDown().moveTo();
        await this.$hoodiesDropDown().click();
           
    }

    

 

    } 





export default new LandingPage();