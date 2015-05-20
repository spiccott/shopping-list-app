$(document).ready(function() {
	$(document).keyup(function(e) {
		var enterKey = e.keyCode || e.which;
		if(enterKey == 13) {
			var listItem = $("#item-input").val();
			$("#incomplete-items>ul").prepend( "<li><input type='checkbox'/>" + listItem + "</li>" );
			$("#item-input").val("");
		}
	});
});