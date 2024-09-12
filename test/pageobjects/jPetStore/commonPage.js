
export default class CommonPage
{
    constructor()
    {
        this.$mainHeader = () => $('(//img[contains (@class ,logo-topbar.sv)])[1]')
        this.$returnToMenu =()=>$('//a[text()="Return to Main Menu"]')
        this.$shoppingCartHeader =()=>$('//h2[text()="Shopping Cart"]')
    }

/**
 * Launch Url of the website
 */
    async LaunchUrl()
    {
        await browser.url('https://petstore.octoperf.com/actions/Catalog.action');
        browser.maximizeWindow();
    }

    /**
     * Generate random email address
     * @returns 
     */

    async randomEmail()
    {
        let number=Math.floor(Math.random()*11)
        return `abc${number}@gmail.com`
    }

    async returnToMenu()
    {
        await this.$returnToMenu().click();

    }

}