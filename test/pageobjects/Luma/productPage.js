import CommonPage from "./commonPage.js";
class productPage extends CommonPage{

    constructor()
    {
        super();

        this.$headerHoodie=()=>$(`//h1[@id="page-title-heading"]`)
        this.$LastHoodie=()=>$(`(//li[@class="item product product-item"])[last()]`)
        this.$FirstHoodie=()=>$(`(//li[@class="item product product-item"])[1]`)

        this.$hoodieItem=(index)=>$(`//li[@class="item product product-item"][${index}]`)
        this.$productHeader =() => $('//span[text()="Beaumont Summit Kit"]')
        this.$productHeader=(name)=>$(`//span[text()="${name}"]`);
        this.$productNameInList = (index) => $(`//li[@class="item product product-item"][${index}]//a[@class="product-item-link"]`)
    }
        
    

    /**
     * choose last hoodie item from the product list
     */

    async chooseLastHoodie(){
        
        await this.$LastHoodie().click()
        // let hoodieCount=await this.$FirstHoodie();
        // let prodName = (await this.$productNameInList(hoodieCount).getText()).trim();
        // await this.$productHeader(prodName).waitForDisplayed({timeout:10000});
        // return prodName;
      
    }

    async ChooseFirstHoodie(){

        await this.$FirstHoodie().click();

        

    } 

  


}





export default new productPage();