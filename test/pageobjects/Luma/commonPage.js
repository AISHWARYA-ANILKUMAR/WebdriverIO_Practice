
export default class CommonPage
{
    constructor()
    {
       
        this.$lumaLogo = () => $('//a[@class="logo"]')
    }

/**
 * Launch Url of the website
 */
    async LaunchUrl()
    {
        await browser.url('https://magento.softwaretestingboard.com');
        browser.maximizeWindow();
    }

}