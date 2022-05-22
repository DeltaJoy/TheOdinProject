const getTheTitles = function(books) {
    let booksArr = []
    for(let i = 0; i<books.length; i++) {
        booksArr.push(books[i].title)
    }
    console.log(booksArr)

}
console.log("hello world")
getTheTitles(books)



// Do not edit below this line
module.exports = getTheTitles;
