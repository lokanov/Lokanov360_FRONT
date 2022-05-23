import { Company } from "./Company";
import { Role } from "./Role";
import { RoleName } from "./RoleName.enum";

export class User {
  token(arg0: string, token: any) {
    throw new Error('Method not implemented.');
  }
  email: string;
  password: string;
  role : Role;
  id: number;
  firstName: string;
  name: string;
  company: Company;
  constructor() {
      this.id = 0;
      this.name = '';
      this.password = '';
      this.firstName = '';
      this.email = '';
      this.role =  new Role();  
      this.company = new Company();
  }

  setRole(role: RoleName): void
  {
      this.role.name = role;
  }

  setId(id: number) {
    this.id = id;
}
}
