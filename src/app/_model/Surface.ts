import { Category } from "./Category";

export class Surface {
    id: number;
    valeur : string;
   nameCat : string;
    constructor()
      {
        this.id = 0;
        this.valeur = "";
       this.nameCat = "";
      }
  
      setId(id: number) {
        this.id = id;
   }

}