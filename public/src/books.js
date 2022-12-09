function findAuthorById(authors, id) {
  return authors.find(authorObj => {
    return authorObj.id === id;
  })
};

function findBookById(books, id) {
  return books.find((bookObj) => {
    return bookObj.id === id;
  });
};

function partitionBooksByBorrowedStatus(books) {
 // Solution return [[objects of bookes currently checkedout],[objects of books that have returned]] 
 //O destructure
const {borrows} = books
 //1 return array where books are currently checkedout
 let checkedOutBooks = borrows.map(borrowedBookObj => {
  return borrows[0].returned === false;
 });
 return checkedOutBooks; // <returns array of CHECKED OUT books objects?
 let returnedBooks = borrows.filter(borrowedBookObj => {
  return borrows[0].returned === true;
 });
 return returnedBooks; // <returns array of RETURNED  books objects?
 return [checkedOutBooks, returnedBooks]
}

function partitionBooksByBorrowedStatus(books) {
  // Solution return [[objects of bookes currently checkedout],[objects of books that have returned]] 
  let checkedOutBooks = books.filter(borrowedBookObj => {
    const {borrows} = borrowedBookObj;
   return borrows[0].returned === false;
  });
  let returnedBooks = books.filter(borrowedBookObj => {
    const {borrows} = borrowedBookObj;
   return borrows[0].returned === true;
  });
  return [checkedOutBooks, returnedBooks]
 }

function getBorrowersForBook(book, accounts) {
let result = []
let borrowList = book.borrows
borrowList.forEach(borrow=>{
  let account = accounts.find(acc => acc.id === borrow.id);
  let obj = account;
  obj['returned'] = borrow.returned;
  result.push(obj);
})
return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
