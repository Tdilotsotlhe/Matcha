

$(document).ready(function(){
    location.hash = "Register";
    $("#reg_form").on("submit", function (event) {
        event.preventDefault();
        var inputs = this.serialize();
        console.log(inputs);
        alert(this);
    });
});

/* function newMmeber() {
    
} */