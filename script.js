headings=document.getElementById("surprise") 
// This line gets the element with the id "surprise" and assigns it to the variable headings
// document is a global object that represents the HTML document
// getElementById is a method that retrieves an element by its id
function surpriseMe(){
  headings.innerHTML = "You just won a discount of 50% on your first purchase!";
}
// innerHTML is a property that gets or sets the HTML content of an element
// This function changes the content of the element with id "surprise" to a message