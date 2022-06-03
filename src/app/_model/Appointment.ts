import { BinaryOperator } from "@angular/compiler";
import { Bien } from "./Bien";
import { Category } from "./Category";
import { Etage } from "./Etage";
import { Surface } from "./Surface";

export class Appointment
{
    id: number;
    name : string;
    email : string;
    phone : string;
    personContact : string;
    bien : Bien;
    autres : string;
    numberReference : string;
    category : Category;
    surface : Surface;
    etage : Etage;
    montantTotal : number;
   
    constructor()
      {
        this.id = 0;
        this.name = "";
        this.email = "";
	    	this.phone = "";
		    this.personContact = "";
        this.bien = new Bien();
		    this.autres = "";
        this.numberReference = "";
        this.category = new Category();
        this.surface = new Surface();
        this.etage = new Etage();
        this.montantTotal = 0;
      }
  
      setId(id: number) {
        this.id = id;
   }

}