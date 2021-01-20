console.log('Hello World!');

// Hamburguer animation JS
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

window.onload = function() {
    console.log($("html"));
    $("html").css("opacity", "1");
    Sentry.init({ dsn: 'https://c675804bbd96428ca226db9a72844f6a@sentry.io/1424702' });
    console.log(Sentry);
    let url_string = window.location.href;
    let url = new URL(url_string);
	  let mail = url.searchParams.get("userMail");
	  if(mail != undefined && mail != null && mail != ""){
		  logUserMail(mail)
	  }  else {
      logVisit(url);
    }
	
}

function logVisit(url) {
    console.log(`visit from ${url}`);
    //trackUser();
    //Sentry.captureMessage(`visit from ${url}`, Sentry.Severity.Log);
}

function trackUser() {
  jQuery.get("https://api.ipdata.co?api-key=test", function (response) {
    let json = $("#response").html(JSON.stringify(response, null, 4));
    console.log(json);
    console.log(response);
     //Sentry.captureMessage(`ipinfo ${response}`, Sentry.Severity.Debug);
  }, "jsonp");
  Se
}
function getIPDetails() {
    var ipAddress = document.getElementById("txtIP").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", "http://ip-api.io/json/" + ipAddress, true);
    xhttp.send();
}


function logUserMail(mail){
	console.log(`received mail: ${mail}`);
	Sentry.captureMessage(`mail: ${mail}`, Sentry.Severity.Info);
} 

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getColor() {
  var hero = document.querySelector(".hero-name");
  var cross = document.querySelector(".fas")
  var user_secret = document.querySelector(".fa-user-secret");
  $(cross).css(`color`, `white`);
  $(user_secret).css(`color`, `white`);
  httpGetAsync("https://calapi.inadiutorium.cz/api/v0/en/calendars/default/today", function(response) {
    console.log(`response ${response}`);
    var obj = JSON.parse(response);
    console.log(`season ${obj.season}`);
    console.log(`color: ${obj.celebrations[0].colour}`);
    let color = obj.celebrations[0].colour
    $(hero).css(`color`, `${color}`);
    $(cross).css(`color`, `${color}`);
    $(user_secret).css(`color`, `${color}`);
    console.log(hero);
    // $(hero).css({ 'color': 'red' });
  })

}
getColor();
