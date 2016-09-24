// JavaScript Document
 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'XX-XXXXXXXX-x']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
var isiPad = ua.indexOf("ipad") > -1; //&& ua.indexOf("mobile");
var VP = document.getElementsByTagName("meta");
var userAgent;

if(isAndroid || isiPad) {
	for (userAgent=0; userAgent<VP.length; userAgent++) {
      if (VP[userAgent].name == "viewport") {
        VP[userAgent].content = "width=device-width, initial-scale=1";
      }
    }
}
$(document).ready(function(e) {
	//items to close popup here
});
