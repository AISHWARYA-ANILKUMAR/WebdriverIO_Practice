
import CommonPage from "./commonPage.js";
class DalmatianPage extends CommonPage{

    constructor()
    {
        super();
      
        this.$addToCartDog =() =>$('(//a[text()="Add to Cart"])[1]')
        this.$dalmatianHeader = () =>$('//h2[text()="Dalmation"]')
      
       
    }
/**
 * Add to cart the first product
 */
   async addToCartDalmatian()
   {
    await this.$addToCartDog().click();
   }
}


export default new  DalmatianPage();