$(document).ready(function() {
	// var incompleteItems = [];


	$(document).keyup(function(e) {
		var enterKey = e.keyCode || e.which;
		if(enterKey == 13) {
			var listItem = $("#item-input").val();
			if(listItem.length > 0)
				$("#incomplete-items>ul").prepend( "<li><div><input type='checkbox' class='checkbox' id='check'/></div><div class='list-item'>" + listItem + "</div></li>" );
				$("#item-input").val("");
		}
	});

	// $("input:checkbox:checked").

	// $("input:checkbox").on("click", function() {
	// 	if (this.checked == True) {
	// 		this.
	// 	}
	// })
	$("input[type=checkbox]").on("click", function() {
		verifyChecked();
	});
});

function verifyChecked() {
	if (document.getElementById("check").checked) {
		$("input").closest("li").insertAfter("#complete-items>ul");
	}
}