export class ContactModel {
    public email: string; 
    public description: string;
    public reason: string;
    static valid: any;
 
  
    constructor(email: string, reason: string,  description:string,) {
      this.email = email;
      this.description = description;
      this.reason= reason;
 
    }
  }
  