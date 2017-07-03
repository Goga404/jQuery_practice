/*
create checklist
delete item on click

html:
		<form name="checkListForm">
			<input type="text" name="checkListItem"/>
		</form>
		<div id="button">Add!</div>
		<br/>
		<div class="list"></div>
*/

$(document).ready(function() {
    $("#button").click(function() {
            var toAdd = $("input[name = checkListItem]").val();  
            $(".list").append('<div class="item">' + toAdd + '</div>');
            $("input[name = checkListItem]").val(" "); //clear input
        });
        
    $(document).on("click", ".item", function() { //delete item
    $(this).remove();
    });
    
    });
