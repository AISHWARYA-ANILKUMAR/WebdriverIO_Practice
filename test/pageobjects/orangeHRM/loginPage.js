import CommonPage from "./commonPage.js";

class LoginPage extends CommonPage {

    constructor()
    {
        super();
        this.$$credentials = () => $$('//p[@class="oxd-text oxd-text--p"]')
        this.$loginDetails = (value) => $(`//input[@name="${value}"]`)
        this.$submitButton = () =>$('//button[@type="submit"]')
        this.$dashboardHeader = () =>$('//h6[text()="Dashboard"]')
        

    }

    async extractCredentials()

    {
        let credentials=[];

        for(let item of await this.$$credentials())
        {
            credentials.push(await item.getText());
        }
       let username = credentials[0].split(":")
       let finalUsername = username[1].trim()
       let password = credentials[1].split(":")
       let finalPassword = password[1].trim() 

       console.log(finalUsername)
       console.log(finalPassword)
        await this.$loginDetails('username').setValue(finalUsername)
        await this.$loginDetails('password').setValue(finalPassword)
        await this.$submitButton().click();

    }

  

    
    
}

export default new LoginPage();