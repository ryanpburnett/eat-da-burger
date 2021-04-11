$(function() {
	$(".submit").on("submit", function(e) {
		e.preventDefault();
		var burgName = $("#input").val().trim();
		console.log(burgName);
        $.ajax("/api/burgers", {
        type: "POST",
        data: {
            burgName: burgName
        }
        }).then(function(res) {
            location.reload();
        });
		
	});
});