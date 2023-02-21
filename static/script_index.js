
document.addEventListener('DOMContentLoaded', () => {
	var info_arr = getAllArr()

	var q = (new URL(document.location)).searchParams.get('q')
	if (q != null && q != '') {
		info_arr = searchArr(info_arr, q.toLowerCase())
	}

	for (var i = 0; i < info_arr.length; i++) {
		document.querySelector('.grid').innerHTML += `
		<div class="grid-item drawings-card">
			<a href="artwork.html?name=${info_arr[i][ind.drawing]}"><img src="static/drawings/lores/${info_arr[i][ind.drawing]}" alt="${info_arr[i][ind.alt]}"></a>
			<div>${getCharDiv(info_arr[i][ind.characters], info_arr[i][ind.fandom])}</div>
			<div>${getSmDiv(info_arr[i])}${info_arr[i][ind.date]}</div>
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

