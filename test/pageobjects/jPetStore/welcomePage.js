
import CommonPage from "./commonPage.js";
class WelcomePage extends CommonPage{

    constructor()
    {
        super();

        this.$fishIcon = () => $('//img[@src="../images/sm_fish.gif"]')
        this.$welcomeHeader = () => $('//div[@id="WelcomeContent"]')
        this.$chooseGoldFish = () =>$('//a[text()="FI-FW-02"]')
        this.$chooseDog = () =>$('//img[@src="../images/sm_dogs.gif"]')
        
      
       
    }
/**
 * click on the fish option on the list
 */
   async clickOnFishOption()
   {
    await this.$fishIcon().waitForDisplayed({timeout: 3000});
    await this.$fishIcon().click();
   }

   /**
    * click on Dog option on the list
    */
  
   async clickOnDogOption()
   {
    await this.$chooseDog().waitForDisplayed({timeout: 3000});
    await this.$chooseDog().click();
   }
}


export default new WelcomePage();