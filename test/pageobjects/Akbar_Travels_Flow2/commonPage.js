export default class CommonPage{

    constructor()
    {
       
        this.$akbarTravelsHeader = () => $('//*[local-name()="svg" and @class="ng-tns-c7-2"]')
        // this.$clickOkButton = () => $('//button[@id="wzrk-confirm"]')
        this.$okButton = () => $('//button[text()="Later"]')

        
    }

    /**
     * Launch the url of the website
     */
    async LaunchUrl()
    {
        await browser.url('https://www.akbartravels.com/in/flight?lan=en')
        browser.maximizeWindow();
        await this.$okButton().click();
       
       

    }

  
    
}