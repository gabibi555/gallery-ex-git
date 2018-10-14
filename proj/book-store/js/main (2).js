'use strict';


function init() {
    render()
}

function render() {
    renderTable()
    renderBooks()
}

function renderTable() {
    var book = gBooks
    var strHtmls =
        `       <tr>
        <th class="text-center">Book ID</th>
        <th class="text-center">Book Title</th>
        <th class="text-center">Price</th>
        <th class="text-center">Actions</th>
    </tr>
    <tbody class="books-list">

    </tbody>
`
    document.querySelector('.table').innerHTML = strHtmls
}
function renderBooks() {
    var book = gBooks
    var strHtmls = gBooks.map(function (book) {
        return `<tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.price}</td>
                <td>
                <span><button onclick="renderDetailsModal('${book.id}')" data-toggle="modal" data-target="#book-details" type="button" class="btn btn-danger btn-rounded btn-sm my-0 read-book ">Read
                Book</button></span>
                 <span><button id='${book.id}' data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-danger btn-rounded btn-sm my-0 update-book ">Kakon
                  Book</button></span>
                 <span><button onclick="onDeleteBook('${book.id}')" type="button" class="btn btn-danger btn-rounded btn-sm my-0 remove-book">Maggot
                  Book</button></span>
                </td>
            </tr>`
    })
    document.querySelector(".books-list").innerHTML = strHtmls.join('')
}
function renderDetailsModal(bookId) {
    var currBook = getBook(bookId)

    var strHtml = `<div class="modal fade" id="book-details" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" 
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">    
                      <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"> ${currBook.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
       <div class="modal-body">
       <img src="${currBook.url}" 
             alt="" title="${currBook.title}"
             onerror="" onload="" width="300" height="300">
       <a href="${currBook.url}"></a>
       ${currBook.details} 
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>    `

    document.querySelector('.detail-modal').innerHTML = strHtml;
}

function renderFormBtn(n, book) {
    if (n > 0) {
        var strHtml = `<button id="Create-btn-inside-modal" onclick="onUpdateBook('${book.id}')" type="button" class="btn btn-primary"
                            data-dismiss="modal">Update Book</button>`
        document.querySelector('.btn-div').innerHTML = strHtml;
    }
    else {
        strHtml = `<button id="Create-btn-inside-modal" onclick="onAddBook()" type="button" class="btn btn-primary"
        data-dismiss="modal">Create Book</button>`
        document.querySelector('.btn-div').innerHTML = strHtml;
    }
}

$('#exampleModal').on('show.bs.modal', function (event) {
    var currBook = getBook(event.relatedTarget.id)
    if (!currBook) {
        renderFormBtn(0)
    } else {
        renderFormBtn(1, currBook)
    }
})

function onDeleteBook(bookId) {
    deleteBook(bookId)
}

function onAddBook() {
    var title = $('#book-title').val()
    var price = $('#book-price').val()
    var photoUrl = $('#book-photo').val()
    createBook(title, price, photoUrl)
    $('#book-title').val('')
    $('#book-price').val('')
    $('#book-photo').val('')
}

function onUpdateBook(bookId) {
    var currBook = getBook(bookId)
    updateBook(currBook)
}
$('#book-details').on('show.bs.modal', function (event) {
    debugger
    var currBook = getBook(event.relatedTarget.id)
    console.log(currBook)

})
function onReadBook() {

}