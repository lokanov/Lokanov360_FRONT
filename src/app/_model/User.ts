import { Company } from "./Company";
import { Role } from "./Role";
import { RoleName } from "./RoleName.enum";

export class User {
  
  id: number;
  email: string;
  password: string;
  role: string[];
  firstName: string;
  name: string;
  //company: Company;
 

  constructor() {
      this.id = 0;
      this.name = '';
      this.password = '';
      this.firstName = '';
      this.email = '';
      this.role = [];  
      //this.company = new Company();
  }
/*
  setRole(role: RoleName): void
  {
      this.role.name = role;
  }*/

  setId(id: number) {
    this.id = id;
}
}
