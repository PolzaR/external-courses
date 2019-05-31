var containerAddBook = document.querySelector('.container-add_book-form');
var button_add_book = document.querySelector('.button-add_book');
var addBookForm = document.querySelector('.container-add_book-form');
var btn_submit = document.querySelector('#button_submit');


function showFormAddBook(event) {
	 if (event.target == button_add_book || button_add_book.contains(event.target)) {
        addBookForm.style.display = "block";
    };
}
function fadeFormAddBook(event) {
	 if (event.target != containerAddBook && !(addBookForm.contains(event.target)) && event.target != button_add_book && !(button_add_book.contains(event.target)) || event.target == btn_submit) {
        addBookForm.style.display = 'none';
    };
}
button_add_book.addEventListener('click', showFormAddBook);
document.addEventListener('click', fadeFormAddBook);

var inputTitle = document.querySelector('.bookTitle');
var inputAuthorFirstName = document.querySelector('.authorFirstName');
var inputAuthorLastName = document.querySelector('.authorLastName');
var inputCost = document.querySelector('.bookCost');
var inputImage = document.querySelector('.bookImg');
var select = document.querySelector('.bookCategories');
var createdDate = new Date();


function getSelected() {
	var resultSelected = [];
	for (var i = 0; i < select.options.length; i++) {
	  var option = select.options[i];
	  if(option.selected) {
	    resultSelected.push(option.value);
	  }
	}
	return resultSelected;
}

var newBooks = [];
function addBook () {
	newObj = {
      id: books.length + 1,
      title: inputTitle.value,
      author: {
        firstName: inputAuthorFirstName.value,
        lastName: inputAuthorLastName.value
      },
      rating: 0,
      cost: +inputCost.value,
      categories: getSelected(),
      createdAt: createdDate.getTime(),
      updatedAt: createdDate.getTime(),
      image_url: inputImage.value
    };
	books.push(newObj);
	wrapper.innerHTML = "";
	return makeNewBook(books);
};

btn_submit.addEventListener('click', addBook);
