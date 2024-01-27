$(document).ready(function() {
    $(".box").on("click", function() {
    // 	/**
    // 	 * When we click on an element that has
    // 	 * a 'box' class, this event will be fired.
    // 	 */
    // 	var classNames = $(this).attr("class").split(" ");
    //     $("." + classNames[1]).css("background-color", "red");
        $(".box").on("click", function(){
            /** when we click on an element
             * that has a "box" class, this event will be fired
             */
            var classNames = $(this).attr("class").split(" ");
            var boxClass = classNames[0];
            var className = classNames[1];
            if ($(this).css("background-color") == "rgb(255, 0, 0"){
                //if object is already red, turn it black
                $("." + className).css("background-color", "#000");
            }else{
                //else turn all elements with a box class black
                //and then change the color of all the elements
                //with the same class name as the clicked elements red
                $("." + boxClass).css("background-color", "#000");
                $("." + className).css("background-color", "red");
            }
        });

    });
});