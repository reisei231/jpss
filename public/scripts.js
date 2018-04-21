$("button.continue").click(function(){
    $.cookie('cardId', null);
    var id = 0;
    var idArray = randomizer(36);
    var score = 0;
    for(var i = 0; i<36; i++){
        $(".body").append("<div class='game card'>"+idArray[i]+"</div>");
        $(".game.card").last().attr("id", idArray[i]);
    }
    $(this).hide();
    $(".game .card").click(function(){
        $(this).addClass('selected');
        if($.cookie('cardId')){
            var cookieId = $.cookie('cardId');
            var selectId = $(this).attr('id');
            if(cookieId != selectId) {
                if((Math.abs(cookieId - selectId)) == 18){
                    score++;
                    $(".score").html("Cчет : "+score);
                    $("#"+cookieId).css('visibility', 'hidden');
                    $("#"+selectId).css('visibility', 'hidden');
                    $(".game.card").removeClass('selected');
                    $.cookie('cardId', null);
                }
                else{
                    $(".game.card").removeClass('selected');
                    $.cookie('cardId', null);
                }
            }
            if(cookieId == selectId){
                $(".game.card").removeClass('selected');
                $.cookie('cardId', null);
            }
        }
        else{
            $.cookie('cardId', $(this).attr('id'))
        }
    });
});
$.cookie('cardId', null);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
function randomizer(max){
    var arr=[];
    for (var i = 1; i <= max; i++)
        arr.push(i);
    shuffle(arr);
    return arr;
}