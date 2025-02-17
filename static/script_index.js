
document.addEventListener('DOMContentLoaded', () => {
	var info_arr = getArr()

	for (var i = 0; i < info_arr.length; i++) {
		document.querySelector('.grid').innerHTML += `
		<div class="grid-item">
			<img src="static/drawings/${info_arr[i][ind.drawing]}" alt="${info_arr[i][ind.alt]}" onclick="showModal('${info_arr[i][ind.drawing]}')">
		</div>
		`
	}

	imagesLoaded(document.querySelector('.grid'), () => {
		var msnry = new Masonry(document.querySelector('.grid'), {
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		})
	})

}, false)

function showModal(drawing) {
	document.getElementById("modal-image").src = `static/drawings/${drawing}`
	document.getElementById("modal").style.display = "block"
}
function closeModal() {
	document.getElementById("modal").style.display = "none"
}
