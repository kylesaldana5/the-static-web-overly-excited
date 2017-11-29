// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let blank = "";

let exclamation = "!";

// The addExcitement function should accept the array as the sole argument

/* Write a `for` loop that iterates over the array argument and
outputs the words. */

     function addExcitement (Arry) {
        for( i=0; i < sentence.length; i++){
        blank += " " + sentence[i]
          if(i%3 === 2 ){
               blank += exclamation;
               exclamation += exclamation;
               
           } 
        
          console.log(blank)
        }
         

            
                       
    
   
}

// Invoke the function and pass in the array
addExcitement(sentence)


