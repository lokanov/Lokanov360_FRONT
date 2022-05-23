import { Modality } from './Modality';

export class Category {
    id: number;
    name: string;

    constructor()
    {
      this.id = 0;
      this.name= "";
    }

    setId(id: number) {
      this.id = id;
 }
}