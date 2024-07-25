let hoverImg = document.querySelector('.img-hover')

// Image hover standart
hoverImg.addEventListener('mouseover', () => {
	hoverImg.setAttribute(
		'src',
		'./assets/18156905_1635911036437547_5845614818443819711_n.jpg',
	)
})

hoverImg.addEventListener('mouseout', () => {
	hoverImg.setAttribute(
		'src',
		'./assets/18058014_1635912326437418_1675364734027074307_n.jpg',
	)
})

let close = document.querySelectorAll('.close')
close.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.target.parentElement.style.display = 'none'
		e.preventDefault()
	})
})

// mencoba turnary code
// let toggle = false
// let img = ''
// let hoverMouse = () => {
// 	toggle
// 		? (img = './assets/18156905_1635911036437547_5845614818443819711_n.jpg')
// 		: (img = './assets/18058014_1635912326437418_1675364734027074307_n.jpg')
// 	hoverImg.setAttribute('src', img)
// 	toggle = !toggle
// }
