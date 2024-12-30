function tossCoin() {

       // Randomly generate a number between 0 and 1
       let randomNumber = Math.random();
    
       // If the number is less than or equal to 0.5, return "Heads"
       if (randomNumber <= 0.5) {
          document.getElementById("result").textContent="It's Heads!!🤞";
       } else {
           // Otherwise, return "Tails"
           document.getElementById("result").textContent="It's Tails!!✌";
    }  
}