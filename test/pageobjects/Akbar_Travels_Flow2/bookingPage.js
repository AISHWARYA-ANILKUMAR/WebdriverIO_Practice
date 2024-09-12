import CommonPage from "./commonPage.js";

class BookingPage extends CommonPage {

    constructor()
    {
        super();
        
      
       this.$bookNowButton = () => $('(//a[text()="Book now"])[1]')
       this.$bookingPageHeader = () => $('//div[@class="col-sm-12 main-txt p-0 ng-tns-c47-8"]')
       this.$yellowAlert = () => $('//div[@class="ng-tns-c21-6 toast-message ng-star-inserted"]')

    }

    async  checkAlert()
    {
        const alertText = await this.$yellowAlert().getText();

    }
   

    
    
}

export default new BookingPage();