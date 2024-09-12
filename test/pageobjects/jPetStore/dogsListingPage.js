
import CommonPage from "./commonPage.js";
class DogListingPage extends CommonPage{

    constructor()
    {
        super();
        this.$dalmatian = () =>$('//a[text()="K9-DL-01"]')
        this.$dogHeader =()=>$('//h2[text()="Dogs"]')
        this.$addToCartFish =() =>$('(//a[text()="Add to Cart"])[1]')
      
       
    }
/**
 * Click on Dalmatian
 */
   async chooseDalmatian()
   {
    await this.$dalmatian().click();
   }
}


export default new  DogListingPage();