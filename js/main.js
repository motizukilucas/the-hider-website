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
    //Sentry.captureMessage(`visit from ${url}`);
}

function logUserMail(mail){
	console.log(`received mail: ${mail}`);
	Sentry.captureMessage(`mail: ${mail}`, Sentry.Severity.Info);
} 
