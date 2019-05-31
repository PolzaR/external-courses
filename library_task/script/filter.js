var li_must_read = document.querySelector('.must_read');

var must_read_filter = function() {
	var result = books.filter(function(a) {
		return a.categories.includes("must_read");
	});
	
	wrapper.innerHTML = "";
	makeNewBook(result);
}

li_must_read.addEventListener('click', must_read_filter);

var li_best = document.querySelector('.best');

var best_filter = function() {
	var result = books.filter(function(a) {
		return a.categories.includes("best");
	});
	
	wrapper.innerHTML = "";
	makeNewBook(result);
}

li_best.addEventListener('click', best_filter);

var li_classic = document.querySelector('.classic');

var classic_filter = function() {
	var result = books.filter(function(a) {
		return a.categories.includes("classic");
	});
	
	wrapper.innerHTML = "";
	makeNewBook(result);
}

li_classic.addEventListener('click', classic_filter);

var li_non_fiction = document.querySelector('.non_fiction');

var non_fiction_filter = function() {
	var result = books.filter(function(a) {
		return a.categories.includes("non_fiction");
	});
	
	wrapper.innerHTML = "";
	makeNewBook(result);
}

li_non_fiction.addEventListener('click', non_fiction_filter);
