import CommonPage from "./commonPage.js";
class LandingPage extends CommonPage {
    
    constructor()
    {
        super();

        this.$gesturesClick =() => $('//a[text()="Gestures"]')
        this.$boxToDrag =() => $('//div[@id="moveMe"]')
        this.$divToDrag =() => $('//div[@id="div1"]')
        this.$divToDrop =() => $('//div[@id="div2"]') 
        this.$homePageHeader =() => $('//strong[normalize-space(text())="Welcome to your software automation practice website!"]')
        this.$calenderOption =() =>$('//a[text()="Calendars"]')
        this.$brokenLinkOption = () => $('//a[text()="Broken Links"]')
        
       
    }

    /**
     *   Click on gestures on the landing page
     */
    async  clickOnGesture()
    {

      await this.$gesturesClick().click();
    }
      
    /**
     * Click on calender option on the landing page
     */
      async  clickOnCalender()
      {
  
        await this.$calenderOption().click();
        
      
      }
      /**
       * Click on the broken link option
       */
        async clickOnBrokenLinkOption()
        {
          await this.$brokenLinkOption().click();
        }
    }

    

   

   



export default new LandingPage();