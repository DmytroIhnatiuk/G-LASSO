import accordion from '../modules/accordion.js'
import { catalogSlider, reviewsSlider } from '../modules/sliders.js'
window.addEventListener('DOMContentLoaded', () => {
	try {
		accordion('.accordion', '.accordion-header', '.accordion-content')
		reviewsSlider()
		catalogSlider()
	} catch (e) {
		console.log(e)
	}
})
