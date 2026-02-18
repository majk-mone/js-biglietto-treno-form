function getPrice() {
	const nameSurname = document.getElementById('nameSurname').value
	const age = document.getElementById('ageRange').value
	const km = parseFloat(document.getElementById('km').value)

	let price = km * 0.21

	if (age === 'Minorenne') {
		price *= 0.8
	} else if (age === 'Over 65') {
		price *= 0.6
	}

	document.getElementById('showNameSurname').textContent = nameSurname || '-'
	document.getElementById('seniority').textContent = `${age || '-'}`
	document.getElementById('showPrice').textContent = `${price.toFixed(2)} €`
}

function reset() {
	document.getElementById('ticketForm').reset()
}
