const article = document.querySelector('article');
	const searchBar = document.forms['search-form'].querySelector('input');
	searchBar.addEventListener('keyup', function(e) {
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
});
