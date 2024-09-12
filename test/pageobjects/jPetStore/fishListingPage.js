
import CommonPage from "./commonPage.js";
class FishListingPage extends CommonPage{

    constructor()
    {
        super();

       
        this.$chooseGoldFish = () =>$('//a[text()="FI-FW-02"]')
        this.$fishHeader =()=>$('//h2[text()="Fish"]')
      
       
    }
/**
 * click on goldfish option
 */
   async ClickOnGoldFish()
   {
    await this.$chooseGoldFish().click();
   }
}


export default new  FishListingPage();