$( document ).ready(function() {

//Your jquery goes here
$( document ).ready(function() {
$("#startingbutton").click(function() {
  $("#back2").show({});
    $("#mask").show({});
    $("#startingbutton").hide({});
  $("#startingb").hide({});
    $("#instructions").hide({});
    $("#right1").show({});
  $("#left1").show({});
    $("#forward").show({});
      $("#h1").fadeIn({});
});

$("#back2").hide({});
  $("#back3three").hide({});
  $("#right1").hide({});
  $("#left1").hide({});
  $("#forward").hide({});
  $("#h1").hide({});
  $("#hands2").hide({});
  $("#forward2").hide({});
  $("#back4").hide({});
  $("#hands4").hide({});
  $("#monster1").hide({});
        $("#warning1").hide({});
        $("#mask").hide({});





$("#right1").click(function() {
  $("#back2").fadeOut({});
  $("#back4").fadeIn({});
  $("#bman").fadeOut({});
  $("#right1").fadeOut({});
  $("#left1").fadeOut({});
    $("#forward").fadeOut({});
      $("#hands").fadeOut({});
  $("#hands4").fadeIn({});



});

$("#forward").click(function() {
    $("#back3three").show({});
      $("#back2").hide({});
  $("#backback").hide({});
        $("#right1").hide({});
        $("#left1").hide({});
        $("#forward").hide({});
        $("#hands").hide({});
        $("#hands2").show({});
  $( "#warning1" ).slideUp( 200 ).delay( 800 ).show( 300 );
  $( "#warning1" ).slideDown( 200 ).delay( 800 ).hide( 300 );
          $("#forward2").show({});
  $( "#monster1" ).slideUp( 300 ).delay( 4000 ).show( 1 );
  });
  $("#forward2").click(function(){
    });
    });
   
  
    $("#instructions").animate({
        left: '20px',
         height: '+=10px',
        width: '+=150px',
        top: '600px',
    });
});

var $img = $('#monster1'),
    scale = 1.1,
    h = $img.height(),
    sh = h*scale;

function scaleUp($elt)
{
    $elt.animate({height: sh}, function ()
    {
        scaleDown($elt);
    });
}

function scaleDown($elt)
{
    $elt.animate({height: h}, function ()
    {
        scaleUp($elt);
    });
}

scaleUp($img);



    
  
});