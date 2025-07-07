/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,htm,js}'],
	theme: {
		container: {
			padding: 'var(--container-gap)',
			center: true,
			screens: {
				sm: '100%',
				md: '100%',
				lg: '100%',
				xl: '100%',
			},
		},
		fontFamily: {
			body: 'Manrope',
		},
		spacing: {
			0: '0',
			1: '1px',
			2: '.02rem',
			4: '.04rem',
			6: '.06rem',
			8: '.08rem',
			10: '.1rem',
			12: '.12rem',
			14: '.14rem',
			16: '.16rem',
			20: '.2rem',
			24: '.24rem',
			26: '.26rem',
			32: '.32rem',
			36: '.36rem',
			40: '.4rem',
			50: '.5rem',
			80: '.8rem',
			100: '1rem',
			120: '1.2rem',
		},
		borderWidth: {
			DEFAULT: '1px',
		},
		extend: {
			fontSize: {
				s: '.14rem',
				m: '.16rem',
				l: '.20rem',
			},
			colors: {
				bg: '#F6F6F6',
				white: '#FFFEFE',
				black: '#404040',
				lavender: '#DFD9EA',
				'lavender-dark ': '#9C94A9',
			},
			borderRadius: {
				DEFAULT: '50%',
				10: '0.1rem',
				20: '0.2rem',
				30: '0.3rem',
			},
			boxShadow: {
				custom: '0px .08rem .3rem 0px rgba(0, 0, 0, 0.08)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		function ({ addUtilities }) {
			addUtilities({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.position-0': {
					position: 'absolute',
					top: '0',
					right: '0',
					bottom: '0',
					left: '0',
				},
				'.-position-1': {
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					bottom: '-1px',
					left: '-1px',
				},
				'.position-center': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				},
			})

			// Заголовки з адаптивністю
			addUtilities({
				'.h1': { fontSize: '.34rem', lineHeight: '117%' },
				'.h2': { fontSize: '.32rem', lineHeight: '117%' },
				'.h3': { fontSize: '.24rem', lineHeight: '117%' },
				'.h4': { fontSize: '.18rem', lineHeight: '117%' },
			})
			addUtilities({
				'@media (min-width: 640px)': {
					'.h1': { fontSize: '.4rem', lineHeight: '117%' },
					'.h2': { fontSize: '.36rem', lineHeight: '117%' },
					'.h3': { fontSize: '.28rem', lineHeight: '117%' },
					'.h4': { fontSize: '.18rem', lineHeight: '117%' },
				},
			})
			addUtilities({
				'@media (min-width: 1024px)': {
					'.h1': { fontSize: '.48rem', lineHeight: '117%' },
					'.h2': { fontSize: '.42rem', lineHeight: '117%' },
					'.h3': { fontSize: '.32rem', lineHeight: '117%' },
					'.h4': { fontSize: '.2rem', lineHeight: '117%' },
				},
			})
		},
	],
}
