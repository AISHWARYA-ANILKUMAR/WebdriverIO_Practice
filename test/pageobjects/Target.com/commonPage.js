
export default class CommonPage
{
    constructor()
    {
       
        this.$pageHeader = () => $('//a[@class="sc-676073c3-0 sc-7d77c0d1-0 fCfUJD cRBlGM"]')
    }


    async LaunchUrl()
    {
        await browser.url('https://www.target.com');
        browser.maximizeWindow();
    }

}