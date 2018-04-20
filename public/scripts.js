$("button.continue").click(function(){
    var k = 0
    for (var i = 1; i <= 10; ++i) {
        $("tbody.game").append('<tr></tr>');
    }
    for(i=1; i<= 10; i++){
        $("tbody.game tr").append('<td width="50px" height="50px">'+i+'</td>');        
    }
    $(this).hide();
})
$("tr td").hover(function(){
    alert("DIMA HUI");
})