$(document).ready(function() {
	$(document).keyup(function(e) {
		var enterKey = e.keyCode || e.which;
		if(enterKey == 13) {
			var listItem = $("#item-input").val();
			if(listItem.length > 0)
				$("#item-list>ul").prepend( "<li class='items'><span class='item-check incomplete'></span><span class='item-text'>" + listItem + "</span><span class='item-remove'><img src='images/remove.png' alt='remove' width='20px'></span></li>" );
				$("li:first-child").css('opacity', "0")
				.animate(
				    { opacity: "1" },
				    { queue: true, duration: 'slow' }
				);
				$("#item-input").val("");
		}
	});
	$("#item-list>ul").on('click', '.item-check', function(event) {
		if($(this).hasClass( "incomplete" )) {
			console.log('Clicked');
			$(this).removeClass("incomplete");
			$(this).addClass("complete");
			$(this).parent().css({'background-color': 'rgba(255,255,255,0)', 'text-decoration': 'line-through', 'color': '#999999'})
		}
		else {
			console.log('Clicked');
			$(this).removeClass("complete");
			$(this).addClass("incomplete");
			$(this).parent().css({'background-color': 'rgba(255,255,255,0.8)', 'text-decoration': 'none', 'color': '#131313'})
		}
	});
	$("#item-list>ul").on('click', '.item-remove', function(event) {
		$(this).parent().remove();
	});
});