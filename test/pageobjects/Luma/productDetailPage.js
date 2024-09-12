import CommonPage from "./commonPage.js";

class ProductDetailPage extends CommonPage
{

    constructor()
    {
        super();

        this.$sku=()=>$('//div[@class="product attribute sku"]//div');
        this.$size=(size)=>$(`//div[@option-label="${size}"]`);
        this.$color=(color)=>$(`//div[@option-label="${color}"]`);
        this.$quantity=()=>$(`//input[@type="number"]`);
        this.$addToCart=()=>$('//span[text()="Add to Cart"]')
        this.$addedToCartAlert=()=>$('//div[@role="alert"]/div/div/a[text()="shopping cart"]')
        this.$addToCompare=()=>$('(//span[text()="Add to Compare"])[1]')
        this.$addToCompareAlert=()=>$('//div[@role="alert"]/div/div/a[text()="comparison list"]')
    }

   /**
    * 
    * @param {number} size 
    */
    async size(size)
    {
        await this.$size(size).click();
    }

    /**
     * 
     * @param {string} color 
     */

    async color(color)
    {
        await this.$color(color).click();
    }

   /**
    * 
    * @param {number} qty 
    */
    async quantity(qty)
    {
        await this.$quantity().setValue(qty)
    }

    /**
     * set quantity of the product
     */
   async skuOfProduct()
   {
    let sku = await this.$sku().getText();
    return sku;
   }
   
   /**
    * Adding the  product to  cart
    */
   async addToCartProduct()
   {
    await this.$addToCart().click();
    await this.$addedToCartAlert().waitForDisplayed({ timeout: 5000});
   }

   /**
    * click on 'Add Product to Compare' button
    */
   async clickOnAddToCompare()
   {
    await this.$addToCompare().click();
    await this.$addToCompareAlert().waitForDisplayed({ timeout: 5000 });

   }

   async addToCartProduct()
   {
    await this.$addToCart().click();
    await this.$addedToCarctAlert().waitForDisplayed({ timeout: 5000 });
   }
   






}

export default new  ProductDetailPage() ;