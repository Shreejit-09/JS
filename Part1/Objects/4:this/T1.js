let calculator = {
   
    read(){
      this.numb1= +prompt("Enter a number ");
      this.numb2= +prompt("Enter a number ");
     
    },
    sum(){
  
   return this.numb1 + this.numb2;
    },
    mul(){
        return this.numb1 * this.numb2; 
     }
  
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );