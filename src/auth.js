class Auth {
   constructor() {
      this.authenticated = false; 
   } 

   signup(cb) {
    this.authenticated = true; 
    cb();
 }

   
   login(cb) {
      this.authenticated = true; 
      cb();
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