/**
 *    Version: 1.0.2
 *     Author: Ali Mahmudlu (alimahmudlu)
 *    Website: http://alimahmudlu.github.io
 *     Github: https://github.com/alimahmudlu/
 *       Repo: https://github.com/alimahmudlu/twelfy/
 *  Telephone: +994708550235
 *      Email: alimahmudlu@gmail.com
*/

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
function heightControl(mainSection, changeSection, minusSection=0) {
	var mainHeight = $(mainSection).actual('outerHeight');
	var minusHeight = $(minusSection).actual('outerHeight');
	console.log(mainHeight - minusHeight)
	$(changeSection).css('height', mainHeight - minusHeight)
}
popperFn()
heightControl('.section_leg', '.section-rating', '.section-calendar')
$(window).resize(function (){
	heightControl('.section_leg', '.section-rating', '.section-calendar')
})
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
