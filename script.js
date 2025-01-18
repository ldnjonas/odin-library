const myLibrary = [];

function Book(title,author,pages,read,id) {
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = info()
    function info(){
        return title + " by " + author + "," + pages+"pages, " + (read?"read":"not read yet")
    }
}

function addBookToLibrary(title,author,pages,read,id) {
    myLibrary.push(new Book(title,author,pages,read,id))
}

// addBookToLibrary("test","test","test",true)
// addBookToLibrary("test2","test2","test2",true)
// addBookToLibrary("test2","test2","test2",false)


let displayBooks = (bookArray) => {
    const container = document.querySelector("#main-content");
    for(book of bookArray){
        const blocker = document.createElement("p");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        blocker.textContent = "--------------------------";
        title.textContent = "Title: " + book.title;
        author.textContent = "Author: " + book.author ;
        pages.textContent = "Pages: " + book.pages;
        read.textContent = "Read: " + (book.read?"Yes":"No");
        container.appendChild(blocker)
        container.appendChild(title)
        container.appendChild(author)
        container.appendChild(pages)
        container.appendChild(read)
    }
}


let addBookEntryToDisplay = (book) => {
    const bookEntryList = document.querySelector("#book-entry-list")
    const bookEntry = document.createElement("div");
    bookEntry.classList.add("book-id-"+book.id);
    bookEntryList.appendChild(bookEntry)
    
    const deleteButton = document.createElement("button");
    const readStatusButton = document.createElement("button");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author ;
    pages.textContent = "Pages: " + book.pages;
    read.textContent = "Read: " + (book.read?"Yes":"No");

    deleteButton.textContent = "Delte Entry"
    readStatusButton.textContent = "Change read status"
    deleteButton.addEventListener("click", () => {bookEntry.remove()})
    console.log("pre: " + book.read)
    readStatusButton.addEventListener("click", () => {
        book.read = book.toggleReadStatus()
        read.textContent = "Read: " + (book.read?"Yes":"No");
    })

    bookEntry.appendChild(deleteButton)
    bookEntry.appendChild(title)
    bookEntry.appendChild(author)
    bookEntry.appendChild(pages)
    bookEntry.appendChild(readStatusButton)
    bookEntry.appendChild(read)
}

Book.prototype.toggleReadStatus = function(){
    if(this.read){
        return false
    }else{
        return true
    }
}


    const addNewBookButton = document.querySelector("#add-new-book-btn");
    addNewBookButton.addEventListener("click", () => {dialog.show()})

    const dialog = document.querySelector("#add-book-dialog");
    
    const form = document.querySelector("#form")
    
    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        let formDataArray = []
        for (let value of formData.values()) {
            formDataArray.push(value)
        }
        addBookToLibrary(formDataArray[0],formDataArray[1],formDataArray[2],formDataArray[3],myLibrary.length+1)    
        addBookEntryToDisplay(new Book(formDataArray[0],formDataArray[1],formDataArray[2],formDataArray[3],myLibrary.length+1))

        dialog.close()
    }
    
    form.addEventListener("submit", handleSubmit)
    

