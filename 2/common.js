$(document).ready( function () {

var $container = $('.container');
var $input = $('input[type="number"]');
var $inputColor = $('input[type="color"]');

$input.on('input', function () {
    
    $container.empty();
     
    var $value = $input.val();

    for ( var i=1; i<=$value; i++ ){ 
    $container.append('<div class="block">' + i + '</div>'); }    

    });

$inputColor.on( 'change', function () {

var $block = $( '.block' );    
var $colorValue = $inputColor.val();

$container.toggleClass( 'odd' );

var $item = $block.filter(function (index) {
var $hasClass = $container.hasClass( 'odd' );

return !$hasClass ? index % 2 !== 0 : index % 2 === 0

        });

$item.css( {'background' : $colorValue } );        

    });

});    
