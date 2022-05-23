import { Abonnement } from "./Abonnement";

export class Company{
    id: number;
    name : string;
    adress : string;
    email : string;
    phone : string;
    personContact : string;
    abonnement : Abonnement;
   
    constructor()
      {
        this.id = 0;
        this.name = "";
		    this.adress = "";
        this.email = "";
	    	this.phone = "";
		    this.personContact = "";
		    this.abonnement = new Abonnement();

      }
  
      setId(id: number) {
        this.id = id;
   }

}