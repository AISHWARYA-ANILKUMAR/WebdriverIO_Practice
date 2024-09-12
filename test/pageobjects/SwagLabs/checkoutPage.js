import CommonPage from "./commonPage.js";

class CheckoutPage extends CommonPage
{
    constructor()
    {
        super();
        this.$checkoutHeader = () =>$('//span[text()="Checkout: Your Information"]')
        this.$firstName = () =>$('//input[@placeholder="First Name"]')
        this.$lastName = () =>$('//input[@placeholder="Last Name"]')
        this.$postalCode = () =>$('//input[@placeholder="Zip/Postal Code"]')
        this.$continueButton = () =>$('//input[@id="continue"]')
        
       
        
    }

 async checkOutProcess(fname,lname,post)
 {
    await this.$firstName().setValue(fname)
    await this.$lastName().setValue(lname)
    await this.$postalCode().setValue(post)

    await this.$continueButton().click();
 }




    

   
    }




    

export default new CheckoutPage();