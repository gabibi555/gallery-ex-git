// CRUDL **Create, **Read, **Update, **Delete, **List/
console.log('this is the service page!')


var gBooks = [
    {
        id: makeId(),
        title: 'kakipotter',
        price: '2',
        url: 'https://vignette.wikia.nocookie.net/pottermore/images/b/b2/Hp-harry-potter-34907716-1280-800.jpg/revision/latest?cb=20131005151708',
        details: 'Book About kaki potter and his toilet'
    },
    {
        id: makeId(),
        title: 'no woman no cry',
        price: '4',
        url: '',
        details: 'a book that speak about world with out women'
    },
    {
        id: makeId(),
        title: 'rami levi and friends',
        price: '4',
        url: '',
        details: 'Book About Rami and his superMarket'
    }

]
//create new book
function createBook(title, price) {
    newBookCreate = {
        id: makeId(),
        title: title,
        price: price,
        details: ''
    }
    gBooks.push(newBookCreate)
    render()
}
//delete book
function deleteBook(bookId) {
    var book = gBooks.find(function (book) {
        return book.id === bookId
    })
    console.log(book)
    gBooks.splice(book, 1)
    renderBooks()

}
//get the curr book 
function getBook(bookId) {
    var currBookId = gBooks.find(function (book) {
        return book.id === bookId
    })
    return currBookId;
}





function updateBook(bookToUpdate) {
    console.log(bookToUpdate)
    bookToUpdate.title = $('#book-title').val()
    bookToUpdate.price = $('#book-price').val()
    bookToUpdate.photoUrl = $('#book-photo').val()
    render()
}


function readBook() {

}