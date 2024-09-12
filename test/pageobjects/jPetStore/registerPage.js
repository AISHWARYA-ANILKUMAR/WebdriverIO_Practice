
import CommonPage from "./commonPage.js";
class RegisterPage extends CommonPage{

    constructor()
    {
        super();
       
        this.$registerLink =() => $('//a[text()="Register Now!"]')
        this.$userID =() => $('//input[@name="username"]')
        this.$password =() => $('//input[@name="password"]')
        this.$repeatPassword =() => $('//input[@name="repeatedPassword"]')
        this.$fname =() => $('//input[@name="account.firstName"]')
        this.$lname =() => $('//input[@name="account.lastName"]')
        this.$email =() => $('//input[@name="account.email"]')
        this.$phone =() => $('//input[@name="account.phone"]')
        this.$addressOne =() => $('//input[@name="account.address1"]')
        this.$addressTwo = () =>$('//input[@name="account.address2"]')
        this.$city = () => $('//input[@name="account.city"]')
        this.$state = () => $('//input[@name="account.state"]')
        this.$zip = () =>$('//input[@name="account.zip"]')
        this.$country = () =>$('//input[@name="account.country"]')
        this.$languageDropDown = () =>$('//select[@name="account.languagePreference"]')
        this.$languageChosen = ()=>$('//option[@value="english"]')
        this.$favoriteDropDown = () =>$('//select[@name="account.favouriteCategoryId"]')
        this.$favoriteChosen = ()=>$('//option[@value="DOGS"]')
        this.$MyListCheckbox = () =>$('//input[@name="account.listOption"]')
        this.$MyBannerCheckbox = () =>$('//input[@name="account.bannerOption"]')
        this.$saveAccountButton = () =>$('//input[@value="Save Account Information"]')   
        }


        /**
         * Register into the website
         * @param {string} email 
         */
    async register(email)
    {
        await this.$userID().setValue('Aishwarya')
        await this.$password().setValue('aish@12345')
        await this.$repeatPassword().setValue('aish@12345')
        await this.$fname().setValue('Aishwarya')
        await this.$lname().setValue('Anilkumar')
        await this.$email().setValue(email)
        await this.$phone().setValue('9658745589')
        await this.$addressOne().setValue('123 A HillWalley Kochi')
        await this.$addressTwo().setValue('Kochi Kakkanad Ernakulam')
        await this.$city().setValue('Ernakulam')
        await this.$state().setValue('Kerala')
        await this.$zip().setValue('682056')
        await this.$country().setValue('India')
        await this.$languageDropDown().click();
        await this.$MyListCheckbox().click();
        await this.$MyBannerCheckbox().click();
        await this.$saveAccountButton().click();

    }


   


}


export default new RegisterPage();