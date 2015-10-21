var getJoke = function(){
  $.get("/jokes",function(data){
    var dataSetup = data.setup;
    var dataPunchline = data.punchline;
    var setup = $("#setup");
    var punchline = $("#punchline");
    setup.html(dataSetup);
    punchline.html(dataPunchline);
  },"json");
}
