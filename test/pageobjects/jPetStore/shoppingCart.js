
import CommonPage from "./commonPage.js";
class ShoppingCartFish extends CommonPage{

    constructor()
    {
        super();
        
        this.$shoppingCartHeader =()=>$('//h2[text()="Shopping Cart"]')
        this.$quantity =()=>$('//input[@name="EST-20"]')
        this.$updateCart =()=>$('//input[@name="updateCartQuantities"]')
        this.$checkoutButton =()=>$('//a[text()="Proceed to Checkout"]')
        this.$itemId =()=>$('//a[text()="EST-20"]')
        this.$productId =()=>$('//td[text()="FI-FW-02"]')
        this.$listPrice = () =>$('//td[text()="$5.50"]')
      
      
       
    }


/**
 * fetch the itemId
 */

async getItemId() {

    let fetchedId = await this.$itemId();
    return fetchedId

}
/**
 * fetch the product id 
 */

async getProductId() {

    let fetchedProductId = await this.$productId();
    return fetchedProductId

}

/**
 * fetch the list Price
 */
async getListPrice() {

    let fetchedListPrice = await this.$productId();
    return fetchedListPrice

}

 /**
  * Set quantity and update cart
  */
   async setQuantityAndUpdateCart()
   {
    await this.$quantity().setValue(2);
    await this.$updateCart().click();
   }

   /**
    * proceed to checkout
    */

   async checkout()
   {
    await this.$checkoutButton().click();
   }
}


export default new  ShoppingCartFish();