var smallSizeNavBackground = false;

function scroll_to(el){
	if (el == undefined) {
		if ($('.navbar').offset().top < $('#eventoo').offset().top + $('#eventoo').height() - 70) {
			el = '#speakers';
		} else if ($('.navbar').offset().top < $('#speakers').offset().top + $('#speakers').height() - 70) {
			el = '#schedule';
		} else if ($('.navbar').offset().top < $('#schedule').offset().top + $('#schedule').height() - 70) {
			el = '#sponsors';
		} else if ($('.navbar').offset().top < $('#sponsors').offset().top + $('#sponsors').height() - 70) {
			el = '#location';
		} else if ($('.navbar').offset().top < $('#location').offset().top + $('#location').height() - 70) {
			el = '#aboutus';
		} else {
			el = '#eventoo';
		}
	}
	if ($(el).offset()) {
		$('html, body').animate({
			scrollTop: $(el).offset().top - 70
		}, 500);
	} else {
		console.error('The referenced element does not exist or does not have an offset property.');
	}
}

function backgroundNavbar() {
	var scrollTop = $(document).scrollTop();
	var maxLimit = 200;

	$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, 0.90)' });

	if (scrollTop < maxLimit && !smallSizeNavBackground) {
		var transparencia = scrollTop / maxLimit * 0.90;
		$('.navbar').css({ backgroundColor: 'rgba(34, 34, 34, ' + transparencia + ')' });
	}
}

$(document).ready(()=>{

	backgroundNavbar();

	$(document).on('scroll', backgroundNavbar);

	$('.navbar-nav>li>a').on('click', () => {
	    $('.navbar-collapse').collapse('hide');
	});

	$('.navbar-collapse').on('show.bs.collapse', () => {
		smallSizeNavBackground = true;
		backgroundNavbar();
	});

	$('.navbar-collapse').on('hide.bs.collapse', () => {
		smallSizeNavBackground = false;
	});

});

particlesJS.load('eventoo-background', 'js/particles.json');

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
    }, 0);
});

setInterval(() => { $('#eventoo-background').height($('#eventoo').height()); }, 0);