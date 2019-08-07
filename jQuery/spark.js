console.log('connected');

$('.listButton').click(function(){
    $('ul').fadeToggle();
});

$('input').keypress(function(event){
    if(event.which==13){
        $(this).val("");
    }
})



