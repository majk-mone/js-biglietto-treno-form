function getPrice() {
	const nameSurname = document.getElementById('nameSurname').value
	const age = document.getElementById('ageRange').value
	const km = parseFloat(document.getElementById('km').value)
	let carrozza = randomInt(1, 12)
	let codiceCP = randomInt(100, 9999)

	let price = km * 0.21

	if (age === 'Minorenne') {
		price *= 0.8
	} else if (age === 'Over 65') {
		price *= 0.6
	}

	document.getElementById('showNameSurname').textContent = nameSurname || '-'
	document.getElementById('seniority').textContent = `${age || '-'}`
	document.getElementById('showPrice').textContent = `${price.toFixed(2)} €`
	document.getElementById('carrozza').textContent = `${carrozza || '-'}`
	document.getElementById('codiceCP').textContent = `${codiceCP || '-'}`
}

function reset() {
	document.getElementById('ticketForm').reset()
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
