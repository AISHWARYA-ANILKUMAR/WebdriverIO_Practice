import loginPage from "../../pageobjects/orangeHRM/loginPage.js";
import dashboard from "../../pageobjects/orangeHRM/dashboard.js";

describe('OrangeHRM Flow',() => {


    it("Launch URl of the website", async () => {
        await loginPage.LaunchUrl();
        expect(await loginPage.$header('Login').isDisplayed())
        .withContext('Expect OrangeHRM Logo is not displayed')
        .toBeTrue();
       
    })

    it("Extract Credentials from the website and Login into the website", async () => {
        await loginPage.extractCredentials();
        await browser.pause(5000)
        expect(await loginPage.$dashboardHeader().isDisplayed())
        .withContext('Dashboard Header is not displayed').toBeTrue();
        
    })

    it("Click on 'My Info' section", async () => {

        await dashboard.clickInfo();
        expect(await dashboard.$personalDetails().isDisplayed()) 
        .withContext('Personal Details Header is not displayed')
  })

  

   
})