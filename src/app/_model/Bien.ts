import { Category } from "./Category";
import { Etage } from "./Etage";
import { Surface } from "./Surface";

export class Bien {
    id: number;
    category : Category;
    surface : Surface;
   etage : Etage;
   montantTotal : number;
    constructor()
      {
        this.id = 0;
        this.category = new Category();
        this.surface = new Surface();
        this.etage = new Etage();
        this.montantTotal = 0;
      }
  
      setId(id: number) {
        this.id = id;
   }
}
