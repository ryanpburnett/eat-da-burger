$(function() {
	$("#submit").on("click", function(e) {
		e.preventDefault();
		var burgName = $("#text").val().trim();
        $.ajax("/api/burgers", {
        method: "POST",
        data: {
            burgName: burgName
        }
        }).then(function(res) {
            location.reload();
        });
		
	});
});