var main = function() {
    
    $('input').on('click', (event) => {
        $(event.currentTarget).addClass('active');
    });// this will add the class 'active' to the input element when clicked

    // Change input background color on button hover
    $('button').hover(
        function() {
            $('input').css('background-color', 'hsl(56, 71%, 64%)');
        },
        function() {
            $('input').css('background-color', '');
        }
    );



};

$(document).ready(main);
