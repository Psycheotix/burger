
$(function(){
    $(".change_devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            eaten: newDevoured
        };

        //SEND PUT REQ

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                //RELOAD AND GET UPDATED LIST
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            name: $("#ger").val().trim(),
            eaten: $("[name=eaten] :checked").val().trim()
        };

        //SEND POST REQ
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("created new Burger")
                //RELOAD PAGE UPDATE LIST
                location.reload();
            }
        );
    });
});