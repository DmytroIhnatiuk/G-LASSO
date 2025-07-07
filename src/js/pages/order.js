import accordion from '../modules/accordion.js'

window.addEventListener('DOMContentLoaded', () => {
	try {
		accordion('.accordion', '.accordion-header', '.accordion-content')
	} catch (e) {
		console.log(e)
	}
})
