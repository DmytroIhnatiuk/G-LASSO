import Swiper from 'swiper'
import { Navigation, Thumbs } from 'swiper/modules'

function productSliderMain() {
	const mainSliderEl = document.querySelector('[data-swiper="productSlider"]')
	const navSliderEl = document.querySelector('[data-swiper="productSliderNav"]')

	if (!mainSliderEl || !navSliderEl) return

	const sliderNav = new Swiper(navSliderEl, {
		slidesPerView: 3,
		spaceBetween: 12,
		direction: 'horizontal',
		watchSlidesProgress: true,
		breakpoints: {
			640: {
				direction: 'vertical',
				spaceBetween: 16,
			},
		},
	})

	new Swiper(mainSliderEl, {
		modules: [Thumbs, Navigation],
		slidesPerView: 1,
		spaceBetween: 100,
		thumbs: {
			swiper: sliderNav,
		},
		navigation: {
			nextEl: mainSliderEl.querySelector('.btn-next'),
			prevEl: mainSliderEl.querySelector('.btn-prev'),
		},
	})
}
function catalogSlider() {
	const item = document.querySelector('[data-swiper="catalogSlider"]')
	if (!item) return

	new Swiper(item, {
		modules: [Navigation],
		slidesPerView: 1.1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2.3,
			},
			1024: {
				slidesPerView: 4,
			},
		},

		navigation: {
			nextEl: item.querySelector('.btn-next'),
			prevEl: item.querySelector('.btn-prev'),
		},
	})
}

function reviewsSlider() {
	const item = document.querySelector('[data-swiper="reviewsSlider"]')
	if (!item) return

	new Swiper(item, {
		modules: [Navigation],
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},

		navigation: {
			nextEl: item.querySelector('.btn-next'),
			prevEl: item.querySelector('.btn-prev'),
		},
	})
}

export { catalogSlider, productSliderMain, reviewsSlider }
