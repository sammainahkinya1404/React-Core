// constructor Function
function Book(bookName,bookAuthor,publishedYear){
    this.bookName = bookName;
    this.bookAuthor= bookAuthor;
    this.publishedYear = publishedYear;
    this.fullName=function(){
        return bookName+","+ " by  " +bookAuthor+"."+publishedYear;
    }

}

newBook= new Book("Deep Learning","Samson Kinyanjui",2025);


console.log(newBook.fullName()
)

archBook= new Book("Deep Learning","Samson Kinyanjui",2026);
console.log(archBook.fullName())
