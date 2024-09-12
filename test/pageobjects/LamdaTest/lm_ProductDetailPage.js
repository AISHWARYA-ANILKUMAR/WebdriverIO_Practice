

import CommonPage from "./lm_CommonPage.js";
class ProductDetailPage extends CommonPage{

    constructor()
    {
        super();

        this.$selectMoRL = () => $('//select[@name="option[231]"]')
        

    }

    async chooseSize()
    {
        this.$selectMoRL().click();
       
       
    }

  

}


export default new  ProductDetailPage();