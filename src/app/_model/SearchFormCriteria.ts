
import { Category } from './Category';
import { Modality } from './Modality';
import { User } from './User';
import { Video } from './Video';


export class ISearchFormCriteria {
  
    user : any;
    userConnected:any;
    userName: any;
 

    constructor(){
        this.user = new User();
        this.userConnected = new User();
       
    }

}

