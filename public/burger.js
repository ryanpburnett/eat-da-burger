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

    $(".eatIt").on("click", function() {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: {
            devoured: true
        }
        }).then(function() {
        location.reload();
        });
        
	});
});