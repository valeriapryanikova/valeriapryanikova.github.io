
document.addEventListener('DOMContentLoaded', () => {
	var info_arr = getAllArr()

	var name = (new URL(document.location)).searchParams.get('name')
	if (name != null && name != '') {
		info_arr = searchArr(info_arr, [name])[0][0]

		if (info_arr==null) {
			// console.log(info_arr, sm_info_arr)
			throw 404
		}

		document.querySelector('.drawings-card').innerHTML = `
        <img src="static/drawings/hires/${info_arr[ind.drawing]}" alt="${info_arr[ind.alt]}">
        <div class="div-big-drawing">character(s): ${info_arr[ind.characters]}</div>
        <div class="div-big-drawing">fandom: ${info_arr[ind.fandom]}</div>
        <div class="div-big-drawing">art style: ${info_arr[ind.artstyle]}</div>
        <div class="div-big-drawing">additional tags: ${info_arr[ind.tags]}</div>
        <div class="div-big-drawing">${getSmDiv(info_arr)}${info_arr[ind.date]}</div>
        `
	}
	else {
		throw 404
	}
}, false)

