
export default class CommonPage{
    constructor()
    {
      this.$AutomationSiteHeader = () =>$('//h1[normalize-space(text())="Automation Demo Site"]');
      this.$downloadButton = () =>$('//a[@type="button"]')
    }


    async LaunchUrl()
    {
        await browser.url("https://demo.automationtesting.in")
        browser.maximizeWindow();

                                              
    }

    async randomEmail()
    {
        let number=Math.floor(Math.random()*11)
        return `abc${number}@gmail.com`
    }
     
    async fileUrl() {
        
        await browser.url('https://demo.automationtesting.in/FileDownload.html')
        browser.maximizeWindow();


        
        }
}