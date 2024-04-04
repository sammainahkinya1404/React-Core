// constructo function for making books
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   }

   Book.prototype.info=function(){
    return this.title + " by " + this.author + ". " + this.pages + ". " + this.read;
   }

//create instances of Person object
var person1=new Book("The Odin Project","Open Source",256,"Not yet read");

console.log(person1.info());


