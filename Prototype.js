function Book(name, authors, publishedYear) {
    this.name = name;
    this.authors = authors;
    this.publishedYear = publishedYear;
    }
    Book.prototype.fullName = function () {
     return this.name + " by " + this.authors + ". " + this.publishedYear;
     };
    
    thisBook = new Book("Understanding React",
    ["Enrique Molinari"], 2021);
    console.log(thisBook);
    archBook = new Book("Coding an Architecture Style",
     ["Enrique Molinari"], 2020);
     console.log(archBook);