function popperFn() {
	if ($("[data-toggle=popover]").length) {
		$("[data-toggle=popover]").popover({
			trigger: 'focus'
		});
		$('body').on('click', function (e) {
			$("[data-toggle=popover]").popover({
				trigger: 'focus'
			});
			$('[data-toggle="popover"]').each(function () {
				if (!$(this).is(e.target) &&
					$(this).has(e.target).length === 0 &&
					$('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
			});
			console.log('click')
			console.log($('.tableMoreDots'))
			$('.tableMoreDots').each(function () {
				if (!$(this).is(e.target) &&
					$(this).has(e.target).length === 0 &&
					$('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
			});
		});

	}
}

popperFn()

$(document).on('click', '.section-about-body--video', function () {
	var videoUrl = $(this).attr('data-video-url');

	var videoTag =
		`
			<video id="video" autoplay width="100%" controls>
				<source src="${videoUrl}" type="video/mp4">
				<source src="${videoUrl}" type="video/ogg">
				Your browser does not support HTML video.
			</video>
		`

	$(this).find('.section-about-body--video-preview').toggle()
	$(this).find('.section-about-body--video-tag').append(videoTag).toggle()
})

function heightControl(mainSection, changeSection) {
	var mainHeight = $(mainSection).actual('outerHeight');
	$(changeSection).css('height', mainHeight)
}
heightControl('.section-about', '.section-rating')
$(window).resize(function (){
	heightControl('.section-about', '.section-rating')
})
