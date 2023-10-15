export default {
	draw,
	highlight
};

let diagonals = [];
let map = new Map();
let highlighted = [];

// prepare board presentations
// set up empty array for 15 major diagonals and 15 minor diagonals
function prep() {
	for (let i = 0; i < 30; i++) {
		diagonals.push([]);
	}
}

function draw(boardEl) {
	prep();

	for (let i = 0; i < 8; i++){
		const row = document.createElement("div");

		for (let j = 0; j < 8; j++){
			const tile = document.createElement("div");
			row.append(tile);

			const majorDiagonalIdx = 7 - (i - j);
			const minorDiagonalIdx = 15 + (i + j);

			diagonals[majorDiagonalIdx].push(tile);
			diagonals[minorDiagonalIdx].push(tile);

			map.set(tile, [diagonals[majorDiagonalIdx],diagonals[minorDiagonalIdx]]);
		}

		boardEl.append(row);
	}
}

function highlight(tileEl) {
	highlighted.forEach(tile => tile.classList.remove("highlighted"));

	const [majorDiagonal, minorDiagonal] = map.get(tileEl);
	highlighted = [...majorDiagonal, ...minorDiagonal];
	highlighted.forEach(tile => tile.classList.add("highlighted"));
}