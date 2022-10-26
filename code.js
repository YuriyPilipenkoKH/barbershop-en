function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
      case starter: // Change this line
        price = 0; // Change this line
        break;
  
      case professional: // Change this line
        price = 20; // Change this line
        break;
  
      case organization: // Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }

  /**/
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if (ordered === 0) { 
    message = `There are no products in the order!`;
  } else if (available < ordered) {
    message = `Your order is too large, there are not enough items in stock!`;
  } else {
    message = `The order is accepted, our manager will contact you`
  }
    // Change code above this line
    return message;
  }
 /**/ 
 function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >=5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else discount = BASE_DISCOUNT;
    // Change code above this line
    return discount;
  }
  /**/
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  
   
   message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
    // Change code above this line
    return message;
  }
/** */  
function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
      case `starter`: // Change this line
        price = 0; // Change this line
        break;
  
      case `professional`: // Change this line
        price = 20; // Change this line
        break;
  
      case `organization`: // Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }
  /** */
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  
    switch (password) { 
        case null: 
          message = "Canceled by user!"; 
          break;
    
        case ADMIN_PASSWORD: 
          message = "Welcome!"; 
          break;
    
     default: 
          message = "Access denied, wrong password!";
          break;
      }
    
    // Change code above this line
    return message;
  }
   // if (password === null) {
    //   message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //   message = "Welcome!";
    // } else {
    //   message = "Access denied, wrong password!";
    // }