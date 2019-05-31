///Не сделано:
///
// 1. одновременная работа фильтра и поиска
// 2. рейтинг
// 3. работа с историей
// 4. ООП (классы) 
// 5. утилиты
// 6. mvc
// 7. localStorage

function getJSON () {
			var requestURL = 'https://rsu-library-api.herokuapp.com/books';
			var request = new XMLHttpRequest();
			request.open('GET', requestURL, false);
			request.send();
			if (request.status != 200) {
			    console.log(request.status + ': ' + request.statusText);
			} else {
			  	var booksText = request.responseText;
				return JSON.parse(booksText);
			}
		}

var books = getJSON();

window.onload = function () {
    makeNewBook(books);
}; 

function makeNewBook (array) {
	for(let i = 0; i < array.length; i++) {
			var wrapper = document.querySelector('article');
			var bookItem = document.createElement('div');
			bookItem.className = "book_item";
			wrapper.appendChild(bookItem);
			var bookItem_img = document.createElement('img');
			bookItem_img.src = array[i].image_url;
			bookItem.appendChild(bookItem_img);
			bookItem_p = document.createElement('p');
			bookItem_p.innerHTML = array[i].title;
			bookItem.appendChild(bookItem_p);
			bookItem_p2 = document.createElement('p');
			bookItem_p2.innerHTML = "by " + array[i].author.firstName + " " + array[i].author.lastName;
			bookItem.appendChild(bookItem_p2);
			var rating_div = document.createElement('div');
			var rating_span = document.createElement('span');
			rating_span.className = "rating";
			bookItem.appendChild(rating_div);
			rating_div.appendChild(rating_span);
		}
	}
