$( document ).ready(function() {
  $("button").click(function () {
    var search = $("input").val();
    console.log("this is what is in the search box! " + search);  
    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&format=json&callback=?";
    console.log("API: "+api);
    $.ajax({
      url: api,
      type: "GET",
      dataType: 'json',
      success: function( data ) {
        $('#output').empty();
        for (var i=0;data[1].length>i; i++){
          var well = document.createElement('div');
          var dt = document.createElement("dt");
          var dd = document.createElement('dd');
          $(well).addClass("well");
          dt.innerHTML = "<a href = " + data[3][i] + " target = 'blank'>" + data[1][i] + "</a>";
          dd.innerHTML = data[2][i];
          
          $('#output').append(well);
          $(well).append(dt).append(dd);
          
        }//end for 
      }, 
      error: function ( error ) {
        alert ('Error with API');
      }
    });//end of ajax
  });//end search click
  
});//end doc ready