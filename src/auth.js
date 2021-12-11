class Auth {
   constructor() {
      this.authenticated = false; 
   } 

   signup(cb) {
    this.authenticated = true; 
    cb();
 }

   
   login() {
     if (this.isAuthenticated()) { 
       return this.authenticated = true
     } else {
       return this.authenticated
     }
   }


   logout(cb) {
      this.authenticated = false;
      cb();
   }

   isAuthenticated() {
      if (localStorage.getItem('jwt') !== null) { 
      this.authenticated = true
      return this.isAuthenticated
      }

   }
 
}

export default new Auth();