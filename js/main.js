$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		dots: false,
		margin: 48,
		loop: true,
	})
})

const videoBtn = document.querySelector('#video-btn')
const videoPreview = document.querySelector('.video__preview')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')

// 	videoWrapper.addEventListener('click', function () {
// 		if (video.paused) {
// 			video.play()
// 			videoPreview.classList.add('none')
// 			videoWrapper.classList.remove('video__overlay')
// 			videoBtn.classList.add('none')
// 		} else {
// 			video.pause()
// 			videoBtn.classList.remove('none')
// 			videoWrapper.classList.add('video__overlay')
// 		}
// 	})
//

videoWrapper.addEventListener('click', function () {
	if (video.paused) {
		videoPreview.classList.add('none')
		videoWrapper.classList.remove('video__overlay')
		videoBtn.classList.add('none')
		video.play()
	} else {
		videoWrapper.classList.add('video__overlay')
		videoBtn.classList.remove('none')
		video.pause()
	}
})
