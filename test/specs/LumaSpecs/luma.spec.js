import landObj from "../../pageobjects/Luma/landingPage.js";
import prodObj from "../../pageobjects/Luma/productPage.js";
import prodDeatailObj from "../../pageobjects/Luma/productDetailPage.js"

let arr=[];
let size1="XL"
let color1="Black"
let qty1=1


describe('Luma website Flow',() => {


    it("Launch URl", async () => {

        await landObj.LaunchUrl();
        expect(await landObj.$lumaLogo().isDisplayed())
        .withContext('Expect Luma LOgo is displayed')
        .toBeTrue(); 
    
       
    })

    it("Choose Hoodie from Mens Tops Category", async () => {

      await landObj.chooseMenTops();
      expect(await prodObj.$lumaLogo().isDisplayed())
      .withContext('Expect Header of Jacket Category is displayed')
      .toBeTrue(); 
  
       
    })

    it("Choose the last product", async () => {

        await prodObj.chooseLastHoodie();
        // expect(await prodObj.$productHeader(prodName).isDisplayed())
        // .withContext('The product name is displayed')
        // .toBeTrue();
   


    
         
      })

      it("choose a size", async () => {

        await prodDeatailObj.size(size1);
      })
 
      it("choose a Color", async () => {

        await prodDeatailObj.color(color1);
      })

     it("set quantity of the product",async () => {

        await prodDeatailObj.quantity(qty1);
        
    })
    it("should add the SKU of the product to the array", async () => {
        let sku1 = await prodDeatailObj.skuOfProduct();
        let initialLength = arr.length;
        arr.push(sku1);
        let finalLength = arr.length;
        expect(initialLength).not.toEqual(finalLength);
    });
    

    it("Add the product to the Cart", async () => {

        await prodDeatailObj.addToCartProduct();
        expect(await prodDeatailObj.$addedToCartAlert().isDisplayed())
        .withContext('Product added to Cart successful alert notification should be displayed')
        .toBeTrue(); 

    })

    
    it("click on 'Add Product to Compare' option", async () => {

        await prodDeatailObj.clickOnAddToCompare();
        expect(await prodDeatailObj.$addToCompareAlert().isDisplayed())
        .withContext("Product added to 'Comparison List' alert notification should be displayed")
        .toBeTrue(); 

    })

    it("Choose the First product", async () => {

        await prodObj.ChooseFirstHoodie();
        // expect(await prodObj.$productHeader(prodName).isDisplayed())
        // .withContext('The product name is displayed')
        // .toBeTrue(); 
      })

      
    it("Add the product to the Cart", async () => {

      await prodDeatailObj.addToCartProduct();
      // expect(await prodDeatailObj.$addedToCartAlert().isDisplayed())
      // .withContext('Product added to Cart successful alert notification should be displayed')
      // .toBeTrue(); 

  })


    
         
      })


  
   

   

   