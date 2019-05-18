export class User {
 public name: string;
 public email : string;
 public password : string;
 public phone : number;
 public role : string;
 public address : string;
 constructor(name : string,email :string,password:string,phone:number,role:string,address: string){
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone =phone;
    this.role = role;
    this.address = address
 }
 public static create(): User{
 return new User(null,null,null,null,'user',null);
 }
}