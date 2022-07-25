import { Video } from 'src/app/_model/Video';
import { Category } from './Category';
import { Lieu } from './Lieu';
import { Modality } from './Modality';

export class Visit {
    [x: string]: any;
    id: number;
    numberReference: string;
    titre: string;
    address: string;
    description: string;
    price: number;
    video: Video;
    lieu: Lieu;
    modality : Modality;
    category: Category;
    dateCreated : string;
    rating : number

    constructor()
    {
      this.id = 0;
      this.numberReference = "";
      this.titre = "";
      this.address = "";
      this.description = "";
      this.price = 0;
      this.video = new Video();
      this.lieu = new Lieu();
      this.modality = new Modality();
      this.category = new Category();
      this.dateCreated = "";
      this.rating = 0
    
    }

    setId(id: number) {
      this.id = id;
 }
}
