function findAccountById(accounts, id) {
  return accounts.find(accountObj => {
return accountObj.id === id;
  });
};

function sortAccountsByLastName(accounts) {
 let lastNameOrder = accounts.sort((accountA, accountB)=>{
  if (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase()) {
    return 1
  } else {
    return -1
  }
})
return lastNameOrder
}

function getTotalNumberOfBorrows(account, books) {
  //It returns a _number_ that represents the number
  /// of times the account's ID appears 
  //in any book's `borrows` array. 
  /// Destructure from account 
  const { id: accId } = account;

  return books.reduce((acc, book) => {
    return (acc + book.borrows
        .filter(borrow => borrow.id === accId)
        .reduce((accBorrows, borrow) => accBorrows + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  //Initialze a return array
  let booksPossessed=[];
  //check for the account id in the borrows arrays
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  ///////////// ^ Passing in Book Obj ^ /////////////////////////
  booksPossessed.forEach(book=>{
    let author = authors.find(authorObj => authorObj.id === book.authorId);
    book['author'] = author;
  })
  //////////// ^ Passing in matching author obj ^/////////
  console.log(booksPossessed);
  return booksPossessed;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
