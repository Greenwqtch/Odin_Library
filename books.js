function Books(name, author, pages, yetRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.yetRead = yetRead;
    this.info = function(){
        console.log(name, author, pages, yetRead)
    }
}

const theHobbit = new Books('The Hobbit,', 'by J.R.R. Tolkien,', '295,', 'Not yet read');

console.log(theHobbit.info());