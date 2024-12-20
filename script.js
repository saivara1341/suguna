let crossWords = {
	0: ["HAPPY-", "BIRTH", "--DAY"],
	1: ["", "SUGUNA", "--MAM"]
};

const container = document.getElementById("wordGrid");

Object.values(crossWords).forEach((group) => {
	const groupDiv = document.createElement("div");
	groupDiv.classList.add("word-group");
	group.forEach((word) => {
		const paddedWord = word.padEnd(6, " ");
		paddedWord.split("").forEach((char) => {
			const cell = document.createElement("div");
			cell.classList.add("cell");
			cell.textContent = char === "-" ? " " : char;
			groupDiv.appendChild(cell);
		});
	});

	container.appendChild(groupDiv);
});
