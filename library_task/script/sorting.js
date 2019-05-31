var wrapper = document.querySelector('article');

///all books///

var li_all_books = document.getElementById('all_books');
var all_books_sort = function () {
		books.sort(function(a, b) {
		return a.id - b.id;
	});
	wrapper.innerHTML = "";
	makeNewBook(books);
}
li_all_books.addEventListener('click', all_books_sort);

///most popular///


var li_popular = document.getElementById('popular');
	var rating_sort = function () {
		books.sort(function(a, b) {
		return b.rating - a.rating;
	});
		wrapper.innerHTML = "";
		makeNewBook(books);
	}
	li_popular.addEventListener('click', rating_sort);

///most recent///

var li_recent = document.getElementById('recent');
var update_sort = function () {
		books.sort(function(a, b) {
		return b.updatedAt - a.updatedAt;
	});
		wrapper.innerHTML = "";
		makeNewBook(books);
	}
li_recent.addEventListener('click', update_sort);

///free books///

var li_free_books = document.getElementById('free_books');
var free_books_sort = function () {
		var result = books.filter(function(a) {
			return a.cost == 0;
			});
		wrapper.innerHTML = "";
		makeNewBook(result);
	};
	
li_free_books.addEventListener('click', free_books_sort);
