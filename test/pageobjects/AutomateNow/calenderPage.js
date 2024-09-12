import CommonPage from "./commonPage.js";
class CalenderPage extends CommonPage {
    
    constructor()
    {
        super();

        this.$calenderHeading =() => $('//h1[text()="Calendars"]')
        this.$submitButton =() => $('(//button[text()="Submit"])[1]')
        this.$roundLoadingSvgIcon =() => $('//*[local-name()="svg"][@focusable="true"]')
        this.$validateText =() => $('//h4[text()="Your message has been sent"]')
        this.$datePickerLeftArrow =() => $('//a[@class="ui-datepicker-prev ui-corner-all"]')
        this.$datePickerRightArrow =() => $('//a[@class="ui-datepicker-next ui-corner-all"]')
        this.$datePickerInput =() => $('//input[@name="g1065-selectorenteradate"]');
        this.$dayLocator =() => $('//a[@class="ui-state-default" and text()="24"]')
        this.$month =(month) => $(`//span[@class="ui-datepicker-month" and text()="${month}"]`)
        this.$year =(year) => $(`//span[@class="ui-datepicker-year" and text()="${year}"]`)
       
    }

    async datePicker(day,month,year) {

    {
        
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

        let selectedMonth = months[month-1];

        while(!await this.$year(selectedMonth).isDisplayed() || !await this.$month(year).isDisplayed())

            {
           
                {
                await this.$rightArrow().waitForClickable()
                await this.$rightArrow().click()
                }
            }
                await this.$day().click()
                await this.$submitButton().click()
                await this.$finalDate().waitForDisplayed();  
        }

    }



              // async selectDate(date, month, year) {

        //     let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    
        //     await this.$datePickerInput().click()
        //     await this.$calendar().waitForDisplayed({timeout: 2000, timeoutMsg: "Calendar is not visible"})
    
        //     let currentMonth=await this.$month().getText()
        //     let currentYear=await this.$year().getText()
        //     let currentMonthNumber=months.indexOf(currentMonth)+1
    
        //     while(currentYear !=year){
        //         if(currentYear<year){
        //             await this.$datePickerNextArrow().click()
        //             currentYear=await this.$year().getText()
        //         }
        //         else{
        //             await this.$datePickerPreviousArrow().click()
        //             currentYear=await this.$year().getText()
        //         }
        //     }
        //     while(currentMonthNumber !=month){
        //         if(currentMonthNumber<month){
        //             await this.$datePickerNextArrow().click()
        //             currentMonthNumber=months.indexOf(await this.$month().getText())
        //         }
        //         else{
        //             await this.$datePickerPreviousArrow().click()
        //             currentMonthNumber=months.indexOf(await this.$month().getText())
        //         }
        //     }
        //     await this.$$datePicker()[date-1].click()
        //     }

            
        // }
    
    
    
       

  // async setDate(date)
    // {
    // const dateParts = date.split("-");
    // const correctDateOrder =[dateParts[2],dateParts[1],dateParts[0]];
    // const correctDate = correctDateOrder.join("-");
    // await this.$dateInput().setValue(correctDate);
    // await this.$submitButton().click();
    // await this.$roundLoadingSvgIcon().waitForDisplayed({ timeout : 5000,timeoutMsg:"svg element not found", reverse : true });
     
    // }

   

        // while(!year && !month){
        //     if(year > currentYear)
        //     {
        //      await this.$datePickerRightArrow().click();
        //     }

        //     else(year < currentYear)
        //     {
        //         await this.$datePickerLeftArrow().click();
        //     }
        }
        
          /**
     *  set date on calender
     */
    // async setDate(date)
    // {
    // const dateParts = date.split("-");
    // const correctDateOrder =[dateParts[2],dateParts[1],dateParts[0]];
    // const correctDate = correctDateOrder.join("-");
    // await this.$dateInput().setValue(correctDate);
    // await this.$submitButton().click();
    // await this.$roundLoadingSvgIcon().waitForDisplayed({ timeout : 5000,timeoutMsg:"svg element not found", reverse : true });
     
    // }

       

  
export default new CalenderPage();