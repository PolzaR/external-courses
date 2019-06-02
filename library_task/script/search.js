const article = document.querySelector('article');
const searchInput = document.forms['search-form'].querySelector('input');

function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const search = debounce(function(e) {
	const term = e.target.value.toLowerCase();
		const books_select = article.getElementsByTagName('div');
		Array.from(books_select).forEach(function(book) {
			const search_words = book.textContent;
			if(search_words.toLowerCase().indexOf(term) !== -1) {
				// eslint-disable-next-line no-param-reassign
				book.style.display = 'block';
			} else {
				// eslint-disable-next-line no-param-reassign
				book.style.display = 'none';
			}
		})
}, 300);

searchInput.addEventListener('keyup', search);
