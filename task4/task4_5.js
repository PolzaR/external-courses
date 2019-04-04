function searchTheSameString(string1, string2) {
	if ( string1.indexOf(string2) !== -1 ) {
		return true
    } else {
        return false;
    }
}

searchTheSameString("Who are you?", "you");