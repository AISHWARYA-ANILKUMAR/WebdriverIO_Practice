
import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage{

    constructor()
    {
        super();
        this.$navigationBarItems =(items) => $(`//a[text()="${items}"]`)
        this.navigationArray = ['Categories','Deals','New & featured','Pickup & delivery']
       
    }


   


}


export default new LandingPage();