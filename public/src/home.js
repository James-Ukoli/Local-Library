function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((total, book) => {
    return total + book.borrows.filter(borrow => borrow.returned === false).length;
  }, 0);
}


function getMostCommonGenres(books) {
//// return an array + slice(0,5)
/// counting genres (greatest to least)
///if genre === undefinied push genre into array
/// if genre === genre[i] increment ++
/// {name: "Genre", count: 9}
let lookUp = {}
books.forEach((book)=>{
  const { genre } = book
   lookUp.hasOwnProperty(genre) ? lookUp[genre] += 1 : lookUp[genre] = 1 
})
////// ^ creating the key ^ ////////////////
const genreArray = Object.keys(lookUp)
////// ^ Puttiing keys in array ^ //////////////
let result = genreArray.map((genre)=>{
  let count = lookUp[genre];
  let currentObj = { name: genre, count: count}
  console.log(currentObj)
  return currentObj
//////// ^ Unsorted array ^ ///////////
})
let sorted = result.sort((ele1, ele2)=>{
  return ele2.count-ele1.count
///////// ^ Sorted ^ highest to lowest ////////////////////
});
return sorted.slice(0,5)
}

function getMostPopularBooks(books) {
/// returns an array 
/// splice (0,5)
// make the object first, then fill in array 
/// how many times a book has been borrowed
/// sort by count {name: "${title}", count: "#"
let sorted = books.sort((book1,book2)=>{
  return book2.borrows.length - book1.borrows.length
})
/////// ^ Sort Popular ^////////////
let mapped = sorted.map((book)=>{
 const {title, borrows} = book
  let obj = { name: title, count: borrows.length}
return obj
})
//////// ^Placing in array//////////////
return mapped.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
//returns an array containing five objects or fewer that represents the most popular books
// {name: ${title}, count: borrows.length}
// sort books array
let sorted = books.sort((book1, book2)=>{
  return book2.borrows.length - book1.borrows.length
})
///// ^ Sort by count first ^ ////////////
let topFiveBooks = sorted.slice(0,5);
////  ^ Slice Top 5 Currently Checked Out books ///////  
let result = topFiveBooks.map((book)=>{
  const {borrows,authorId } = book
  let foundAuthor = authors.find((author)=>{
    return author.id === authorId
  })
  ////// ^ Return the author that matches authorId /////
  let FullName = helperJoinFirstAndLastName(foundAuthor.name.first, foundAuthor.name.last)
  let obj = { name: FullName, count: borrows.length };
  return obj
  /////Structuring the requested date within an object///////////
})
return result
}

function helperJoinFirstAndLastName(firstName, lastName) {
  return `${firstName} ${lastName}`
}








module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
