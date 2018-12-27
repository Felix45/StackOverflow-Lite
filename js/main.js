//window.onload = display_flyout_menu



function display_flyout_menu() {
	var menubar = document.getElementById("flyout");
	var computedStyle = getComputedStyle(menubar);
	if(computedStyle.width == '1px' || computedStyle.width == '0px' || computedStyle.width == '0%' ){
		menubar.style.width = 90 + "%";	
	}else{
		menubar.style.width = 0 + "%";	
	}
}