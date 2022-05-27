import { Category } from "./Category";

export class Modality {
    id: number;
    name : string
    
   
    constructor()
      {
        this.id = 0;
        this.name = "";
       
      }
  
      setId(id: number) {
        this.id = id;
   }

}