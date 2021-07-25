var num_project = $("ul.project_list li").length,
    current = 1,
    left_button = $("button.left_button"),
    right_button = $("button.right_button"),
    wrapper = $("ul.project_list"),
    margin_left = 0,
    shift_distance = 368;
console.log(shift_distance+"px")

left_button.click(
    function(){
        left_button.css("background-color", "#ff7856");
        if (current != 1){
            margin_left += shift_distance;
            current -= 1;
        }
        $(wrapper).css("margin-left", margin_left+"px");
    }
)
right_button.click(
    function(){
        right_button.css("background-color", "#ff7856");
        if (current != num_project){
            margin_left -= shift_distance;
            current += 1;
        }
        $(wrapper).css("margin-left", margin_left+"px");
    }
)
left_button.mouseover(
    function(){
        left_button.css("background-color", "#ffb6a3");
    }
)
right_button.mouseover(
    function(){
        right_button.css("background-color", "#ffb6a3");
    }
)
left_button.mouseout(
    function(){
        left_button.css("background-color", "#bbbbbb");
    }
)
right_button.mouseout(
    function(){
        right_button.css("background-color", "#bbbbbb");
    }
)