console.log('%cCopyright \xA9 2024 imbyter', 'background-color: #000000; color: white; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c   /\\_/\\', 'color: #8B4513; font-size: 20px;');
console.log('%c  ( o.o )', 'color: #8B4513; font-size: 20px;');
console.log(' %c  > ^ <', 'color: #8B4513; font-size: 20px;');
console.log('  %c /  ~ \\', 'color: #8B4513; font-size: 20px;');
console.log('  %c/______\\', 'color: #8B4513; font-size: 20px;');

function toggleClass(selector, className) {
	var elements = document.querySelectorAll(selector);
	elements.forEach(function (element) {
		element.classList.toggle(className);
	});
}
function pop(imageURL) {
	var tcMainElement = document.querySelector('.tc-img');
	if (imageURL) {
		tcMainElement.src = imageURL;
	}
	toggleClass('.tc-main', 'active');
	toggleClass('.tc', 'active');
}
var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
	pop();
});
tc_main[0].addEventListener('click', function (event) {
	event.stopPropagation();
});
function setCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + value + expires + '; path=/';
}
function getCookie(name) {
	var nameEQ = name + '=';
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1, cookie.length);
		}
		if (cookie.indexOf(nameEQ) == 0) {
			return cookie.substring(nameEQ.length, cookie.length);
		}
	}
	return null;
}



function isMobile() {
	let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	return flag;
}

document.addEventListener('DOMContentLoaded', function () {
	var html = document.querySelector('html');
	var themeState;
	if (isMobile()) {
		themeState = getCookie('themeState') || 'Dark';
	} else {
		themeState = getCookie('themeState') || 'Light';
	}

	var tanChiShe = document.getElementById('tanChiShe');
	function changeTheme(theme) {
		tanChiShe.src = './static/svg/snake-' + theme + '.svg';
		if (theme == 'Light'){
			document.documentElement.style.setProperty('--main_bg_color', 'url(../img/background.jpg)');
		}
		else{
			document.documentElement.style.setProperty('--main_bg_color', '#000000');
		}
		html.dataset.theme = theme;
		setCookie('themeState', theme, 365);
		themeState = theme;
	}
	var Checkbox = document.getElementById('myonoffswitch');
	Checkbox.addEventListener('change', function () {
		if (themeState == 'Dark') {
			changeTheme('Light');
		} 
		else{
			changeTheme('Dark');
		} 
	});
	if (themeState == 'Dark') {
		Checkbox.checked = false;
	}
	changeTheme(themeState);
});