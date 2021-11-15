var initialLibrary = [
    {
        title: 'Lord of the Rings',
        author: 'J. R. R. Tolkien',
        dateOfPublication: '1954'
    },
    {
        title: 'The Expanse',
        author: 'James S. A. Corey',
        dateOfPublication: '2011'
    },
    {
        title: 'The Foundation',
        author: 'Isaac Asimov',
        dateOfPublication: '1942'
    },
    { title: 'I Robot', author: 'Isaac Asimov', dateOfPublication: '1950' },
];
function Book(title, author, dateOfPublication) {
    this.title = title;
    this.author = author;
    this.dateOfPublication = dateOfPublication;
}
var Library = /** @class */ (function () {
    function Library(library) {
        this.library = library;
    }
    Library.prototype.addBookToLibrary = function (newBook) {
        this.library.push(newBook);
    };
    return Library;
}());
function initLibrary() {
    var newSciFiLibrary = new Library(initialLibrary);
    var duneBook = new Book('Dune', 'Frank Herbert', '1965');
    newSciFiLibrary.addBookToLibrary(duneBook);
    return newSciFiLibrary;
}
