import { Byte } from "@angular/compiler/src/util";

export class Video {
  id: number;
  name : string
  url: string;
  nombrePieces: number;
  nombreEtages: number;
  surface: number;
  priceTaxed: number;
  dateCreated: string;


  constructor()
    {
      this.id = 0;
      this.name = "";
      this.url = "";
      this.nombrePieces = 0;
      this.nombreEtages = 0;
      this.surface = 0;
      this.priceTaxed = 0;
      this.dateCreated = "";
      
    }

    setId(id: number) {
      this.id = id;
 }

}
