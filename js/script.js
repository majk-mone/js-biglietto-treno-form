function getPrice() {
	const age = parseInt(document.getElementById('age').value)
	const km = parseFloat(document.getElementById('km').value)

	let price = km * 0.21

	if (age < 18) {
		price *= 0.8
	} else if (age >= 65) {
		price *= 0.6
	}

	document.getElementById('showAge').textContent = age || '-'
	document.getElementById('showKm').textContent = `${km || '-'} km`
	document.getElementById('showPrice').textContent = `${price.toFixed(2)} €`
}
