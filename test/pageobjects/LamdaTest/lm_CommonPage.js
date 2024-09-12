export default class CommonPage
{
    constructor()
    {
        this.$lamdatestHeader = () => $('//a[@title="Poco Electro"]');
       

    }

/**
 * launch url for the website
 */

    async LaunchUrl()
    {
        await browser.url('https://ecommerce-playground.lambdatest.io')
        browser.maximizeWindow();
    }

    async randomEmail()
    {
        let number=Math.floor(Math.random()*11)
        return `abc${number}@gmail.com`
    }


}