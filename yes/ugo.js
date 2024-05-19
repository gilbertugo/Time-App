setInterval(app, 1000);

function app(){
    var date = new Date();
    var hr = date.getHours();
    var mn = date.getMinutes();
    var sec = date.getSeconds
     var session = "AM";
      
      if(hr == 0){
        hr < 12
      }
      
      if(hr > 12){
        hr = hr - 12;
        session = "PM"
      }
      
      hr = (hr < 10)? " 0 " + hr:hr;
      mn = (mn < 10)? " 0 " + mn:mn;
      sec = (sec < 10)? " 0 " + sec:sec;
m
      var time = hr + ":" + mn + ":" + sec + "" + session;
      document.getElementById('clock').innerHTML = time;

}
app();
