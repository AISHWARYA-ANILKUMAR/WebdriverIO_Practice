
export default class CommonPage 
{
    constructor()
    {
        this.$swagLabsHeader = () => $('//div[text()="Swag Labs"]')

    }


    /**
     * Load the url of the website
     */

    async loadUrl()
    {
        await browser.url('https://www.saucedemo.com')
        browser.maximizeWindow();

    }
}