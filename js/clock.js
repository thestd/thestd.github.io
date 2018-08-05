setInterval(function(){
    var endDate  = new Date(2018, 3, 27, 10, 00, 0, 0);
    var endDate  = endDate.getTime();
    var currentDate = Date.now();
    var sec      = (endDate - currentDate) / 1000;
    var min       = sec / 60;
    var hou    = min / 60;

    var days    = Math.floor(hou / 24);
    var hours   = Math.floor(hou % 24);
    var minutes = Math.floor(min % 60);
    var seconds = Math.floor(sec % 60);

    $('#clock').html(
      "<div class=\'days cell\' style=\'color: #3b3f40;\'>"+days+"<span style=\'color: #babcbe;\'>дні</span></div>" +
      "<div class=\'hours cell\' style=\'color: #3b3f40;\'>"+hours+"<span style=\'color: #babcbe;\'>год</span></div>" +
      "<div class=\'mins cell\' style=\'color: #3b3f40;\'>"+minutes+"<span style=\'color: #babcbe;\'>хв</span></div>" +
      "<div class=\'secs cell\' style=\'color: #3b3f40;\'>"+seconds+"<span style=\'color: #babcbe;\'>сек</span></div>")
}, 1000);


