
import CommonPage from "./commonPage.js";
class GoldFishPage extends CommonPage{

    constructor()
    {
        super();
        this.$chooseGoldFish = () =>$('//a[text()="FI-FW-02"]')
        this.$goldFishHeader =()=>$('//h2[text()="Goldfish"]')
        this.$addToCartFish =() =>$('(//a[text()="Add to Cart"])[1]')
        
       
    }
/**
 * Add to cart the first product
 */
   async addToCartGoldFish()
   {
    await this.$addToCartFish().click();
   }
}


export default new  GoldFishPage();