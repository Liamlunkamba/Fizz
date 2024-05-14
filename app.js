//input: int, output : string 
function fizzbuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizz buzz", i);
        } else if (i % 5 === 0) {
            console.log("buzz", i);
        } else if (i % 3 === 5) {
            console.log ("fizz", i);
        }else {
         console.log(i);
        }
        
    }
}
// Now we are going to console log 
console.log(fizzbuzz(100));