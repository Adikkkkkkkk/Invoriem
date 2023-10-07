$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		responsive: {
			0: {
				items: 2,
				margin: 32,
				loop: true,
				dots: false,
			},
			601: {
				items: 2,
				loop: true,
			},
			1001: {
				items: 3,
				margin: 48,
				loop: true,
				dots: false,
			},
		},
	})
})

const videoBtn = document.querySelector('#video-btn')
const videoPreview = document.querySelector('.video__preview')
const videoWrapper = document.querySelector('.video')
const video = document.querySelector('#video-file')
const videoMobile = document.querySelector('#video-file-mobile')

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
	// Mobile
	if (videoMobile.paused) {
		videoPreview.classList.add('none')
		videoWrapper.classList.remove('video__overlay')
		videoBtn.classList.add('none')
		videoMobile.play()
	} else {
		videoWrapper.classList.add('video__overlay')
		videoBtn.classList.remove('none')
		videoMobile.pause()
	}
})
