export default {
	draw,
	highlight
};

let tiles;

function draw(boardEl) {
	for (let i = 0; i < 8; i++) {
		const row = document.createElement("div");
		row.dataset.rowIdx = i;
		drawTiles(row);
		boardEl.append(row);
	}

	tiles = boardEl.querySelectorAll("div > div");
}

function drawTiles(rowEl) {
	for (let i = 0; i < 8; i++) {
		const tile = document.createElement("div");
		tile.dataset.colIdx = i;
		rowEl.append(tile);
	}
}

function highlight(tileEl) {
	tiles.forEach(node => node.classList.remove('highlighted'));
	tileEl.classList.add('highlighted');

	const tileRowIdx = Number(tileEl.parentNode.dataset.rowIdx);
	const tileColIdx = Number(tileEl.dataset.colIdx);

	for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--){
		findTile(i, j).classList.add('highlighted');
	}

	for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--){
		findTile(i, j).classList.add('highlighted');
	}

	for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++){
		findTile(i, j).classList.add('highlighted');
	}

	for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++){
		findTile(i, j).classList.add('highlighted');
	}
}

function findTile(rowIdx, colIdx) {
	for (let tile of tiles) {
		if (Number(tile.parentNode.dataset.rowIdx) === rowIdx && Number(tile.dataset.colIdx) === colIdx){
			return tile;
		}
	}
}