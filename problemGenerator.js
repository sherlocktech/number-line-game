// Create problem that follows a + b = c, where a & b are given
// integers and c must be solved by student playing game.
// Answer is only generated within bounds of numberLine
function problemGenerator (cenNum, bounds, p5) {
	var a, b, c;
	var l = cenNum - bounds; // lower bound of numberLine
	var u = cenNum + bounds; // upper bound of numberLine

	c = random(l, u);
	a = random(l - bounds, u + bounds);
	b = (a - c) * -1;
}
