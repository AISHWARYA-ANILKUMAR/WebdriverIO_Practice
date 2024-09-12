
import CommonPage from "./commonPage.js";
class SignInPage extends CommonPage{

    constructor()
    {
        super();
       
        this.$registerLink =() => $('//a[text()="Register Now!"]')
        this.$credentials =(value) => $(`//input[@name="${value}"]`)//this contains both username and password
       
        this.$loginButton =() => $('//input[@value="Login"]')
    }

    

    async signInProcess(name,password)
    {
        await this.$credentials('username').setValue(name)
        await this.$credentials('password').setValue(password);
        await this.$loginButton().waitForClickable({timeout: 5000,timeoutMsg : 'Button not clickable'});
        this.$loginButton().click();
        
    }

    // async clickOnRegisterLink()
    // {
    //     await this.$registerLink().click();
    // }


   


}


export default new SignInPage();