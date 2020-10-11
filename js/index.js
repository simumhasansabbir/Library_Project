console.log("Hello");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}
//Add method to display
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book){
    if (book.name.length<2 || book.author.length<2 ){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type, displaymessage){
    let message = document.getElementById('message');
    message.innerHTML = `
                        <div class="alert alert- ${type} alert-dismissible fade show" role="alert">
                    <strong>Message:</strong> ${displaymessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>`
        setTimeout(function(){
            message.innerHTML = '';
        },2000);
}

// eventlistener

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('Submitted Library Form')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let programming = document.getElementById('programming');
    let hardware = document.getElementById('hardware');
    let software = document.getElementById('software');

    if (programming.checked) {
        type = programming.value;
    }
    else if (hardware.checked) {
        type = hardware.value;
    }
    else if (hardware.checked) {
        type = hardware.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added');

    }
    else{
        display.show('error','Sorry, You can not add this book');
    }
    
    
}

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    
})
