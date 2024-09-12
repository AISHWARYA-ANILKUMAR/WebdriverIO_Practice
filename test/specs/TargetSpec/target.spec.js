import landObj from "../../pageobjects/Target.com/landingPage.js"

describe('Target.com website Flow',() => {


    it("Launch URl", async () => {

        await landObj.LaunchUrl();
        expect(await landObj.$pageHeader().isDisplayed())
        .withContext('Expect LamdaTest LOgo is displayed')
        .toBeTrue(); 
    
       
    })

    it("Verify if the Navigation bar contains the required elements", async () => {

        for(let items of landObj.navigationArray){
            expect(await landObj.$navigationBarItems(items).isDisplayed())
            .withContext("each icon is diaplayed")
            .toBeTrue();
        
        }
    
       
    })

    it("Verify if the Navigation bar contains the required elements", async () => {

        for(let items of landObj.navigationArray){
            expect(await landObj.$navigationBarItems(items).isDisplayed())
            .withContext("each icon is diaplayed")
            .toBeTrue();
        
        }
    
       
    })


   

})

   