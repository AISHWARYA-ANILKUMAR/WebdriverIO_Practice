import CommonPage from "./commonPage.js";

class ProductPage extends CommonPage
{
    constructor()
    {
        super();
        this.$dropDown = () =>$('//span[@class="select_container"]')
        this.$highToLowSorting = () =>$('//option[text()="Price (high to low)"]');
        this.$productHeader = () =>$('//span[text()="Products"]')
        this.$$allProductPrice = () =>$('//div[@class="inventory_item_price"]')
        this.$singleProductPrice = () =>$(`(//div[@class="inventory_item_price"])[${index}]`)
        this.$cartIcon = () =>$('//a[@class="shopping_cart_link"]')
        this.$addToCartProductOne = () =>$('//div[text()="Sauce Labs Backpack"]//following::button[@id="add-to-cart-sauce-labs-backpack" and text()="Add to cart"]')


        
    }



    async sortHighToLow()
    {
        await this.$dropDown().waitForClickable({timeout : 5000 , timeoutMsg:'element is not clickable'});
        await this.$dropDown().click();
        await this.$highToLowSorting().click();

        let fetchedPrices = [];

        for(let i = 0; i < this.$$allProductPrice().length; i++)
        {
            let exactPrice = await this.$singleProductPrice(i).getText();
            let removeDollar = exactPrice.replace('$', '');
            let priceFormatted = parseFloat(removeDollar);
            fetchedPrices.push(priceFormatted);

        }
        return fetchedPrices;
       
    }

    async addToCart()
    {
        await this.$addToCartProductOne().click();
    }

    async clickOnCartIcon()
    {
        await this.$cartIcon().click();
    }

   
    }




    

export default new ProductPage();