// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//Make Grid
function makeGrid(row, column) {
   $('tr').remove(); 
   for (let i = 1; i <= row; i++) {
       $('#pixelCanvas').append('<tr></tr>');
	}
   for (let j = 1; j <= column; j++) {
       $('tr').append('<td></td>');
   	}


    //Add or remove color from a cell on click
    $('td').click(function() {
    	let color = $('#colorPicker').val();
    	if ($(this).attr('style')) {
        	$(this).removeAttr('style');
     	} else {
        	$(this).attr('style', 'background-color:' + color);
    	}

   })

}    


$(function() {
   //Get user input value for the grid size
   $('#sizePicker').submit(function(event) {
       event.preventDefault();
       let height = $('#inputHeight').val();
       let width = $('#inputWeight').val();
               
       makeGrid(height, width);
             
   })

})





	












	






	



