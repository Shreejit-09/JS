// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

----------------------------------------------------------


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(menu){
  //     let prop;
      for(let key in menu){
          if (typeof menu[key] == 'number'){
              menu[key] = menu[key]*2;
              alert(menu[key]);
          }
         }
       }
       multiplyNumeric(menu);
  