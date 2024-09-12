import CommonPage from "./commonPage.js";

import axios from 'axios';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



class MissingLinkPage extends CommonPage {
    
    constructor()
    {
        super();
      
       
        this.$linkNotFoundHeader = () => $('//h5[normalize-space(text())="we could not find that!"]')
       
    }

    async getApiResponseNotFound(url) {
        try {
          const response = await axios({
            method: "GET",
            url: url,
            headers: {
              "Content-Type": "application/json",
            },
          });
          return response.data;
        } catch (error) {
          return error;
        }

}

}



   



export default new  MissingLinkPage();