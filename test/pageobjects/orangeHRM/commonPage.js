export default class CommonPage{

    constructor()
    {
       
        this.$header = (header) => $(`//h5[text()="${header}"]`)
       
    }

    /**
     * Launch the url of the website
     */
    async LaunchUrl()
    {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        browser.maximizeWindow();
        await this.$header('Login').waitForDisplayed({ timeout:5000 , timeoutMsg :"Header is not displayed"})
    }
    
}