function changeTo(s) {
	var newS = "";
	for (var i = 0 ; i < s.length ; ++i) {
		if (s[i] != '_')
				newS += s[i];
		else
				newS += ' ';
	}
	return newS;
}
function changeToRev(s) {
	var newS = "";
	for (var i = 0 ; i < s.length ; ++i) {
		if (s[i] != ' ')
				newS += s[i];
		else
				newS += '_';
	}
	return newS;
}
